from sqlalchemy import Column, String, Integer, and_, or_

from alchemy.base import Base, session_factory
from time import time

Session = session_factory()

class QueueItem(Base):
    """
    record_type = ['product_item', 'category_item', 'product_query', 'category_query', 'image']
    record_status = ['new', 'processing', 'finished', 'fail']
    reason = 'error description'
    """
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
    """
    record_type : ['category_query', 'product_query', 'product_data', 'category_data']
    """
    item = QueueItem(data, record_type)
    Session.add(item)
    Session.commit()
    return item


def set_queue_fail(record_id, reason):
    item = Session.query(QueueItem).filter(QueueItem.record_id == record_id).first()
    item.status = "fail"
    item.reason = reason
    item.last_updated = time()
    Session.add(item)
    Session.commit()
    return item


def get_queue_item():
    active_items = or_(
        QueueItem.record_status == "new",
        and_(QueueItem.record_status == "fail", QueueItem.retry_count < 5)
    )
    item = Session.query(QueueItem).filter(active_items).first()
    item.status = "processing"
    item.retry_count += 1
    item.last_updated = time()
    Session.add(item)
    Session.commit()
    return item


def set_queue_success(record_id):
    item = Session.query(QueueItem).filter(QueueItem.record_id == record_id).first()
    item.status = "success"
    item.last_updated = time()
    Session.add(item)
    Session.commit()
    return item


def get_products_count():
    # todo
    return Session.query(QueueItem).filter(QueueItem.record_type == "product_query").count()


def get_queued_product():
    # todo
    item = Session.query(QueueItem).filter(QueueItem.record_type == "product_query").first()
    item.status = "processing"
    item.retry_count += 1
    item.last_updated = time()
    Session.add(item)
    Session.commit()
    return item


if __name__ == '__main__':

    item = queue_item("blarg", "test")
    print(item)
    item2 = get_queue_item()
    print(item2)
    item3 = set_queue_fail(item.record_id, "whatever")
    print(item3)

    pass
