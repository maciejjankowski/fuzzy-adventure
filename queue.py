from sqlalchemy import Column, String, Date, Integer, Numeric, Boolean, select, and_, or_

from alchemy.base import Base, session_factory
from time import time


Session = session_factory()


class QueueItem(Base):
    __tablename__ = 'queue_item'
    record_id = Column(Integer, primary_key=True)
    record_type = Column('record_type', String(32))
    record_status = Column('record_status', String(32))
    last_updated = Column('last_updated', Integer)
    retry_count = Column('retry_count', Integer)
    reason = Column('reason', String(255))

    def __init__(self, data, record_type):
        self.data = data
        self.record_type = record_type
        self.record_status = "new"
        self.last_updated = time()
        self.retry_count = 0


def queue_item(data, record_type):
    item = QueueItem(data, record_type)
    Session.add(item)
    Session.commit()


def fail_item(record_id, reason):
    item = Session.query(record_id=record_id).first()
    item.status = "fail"
    item.reason = reason
    Session.add(item)
    item.last_updated = time()
    Session.commit()


def get_queue_item():
    active_items = or_(
        QueueItem.record_status == "new",
        and_(QueueItem.record_status == "fail", QueueItem.retry_count < 5)
    )
    item = Session.query(QueueItem).filter(active_items).first()
    item.status = "processing"
    item.retry_count += 1
    item.last_updated = time()
    Session.commit()


if __name__ == '__main__':
    pass
