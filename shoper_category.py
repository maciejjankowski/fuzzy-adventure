from sqlalchemy.sql.functions import random
from shoper_api import create_category_api, GenericApiException
from shoper_dicts import create_category_data
from csv_operation import append_dict_as_row

urs_err = 0
MAX_RETRIES = 6

from random import randint

from sqlalchemy import Column, String, Integer, and_, or_

from alchemy.base import Base, session_factory
from time import time


class CategoryMap(Base):
    __tablename__ = 'category_map'
    record_id = Column(Integer, primary_key=True)
    kramp_id = Column('kramp_id', String(32))
    shoper_id = Column('shoper_id', String(32))
    last_updated = Column('last_updated', Integer)
    seo_url = Column('seo_url',String(128) )

    def __init__(self, kramp_id, shoper_id, seo_url):
        self.kramp_id = kramp_id
        self.shoper_id = shoper_id
        self.last_updated = time()
        self.seo_url = seo_url




class MissingCategoryException(Exception):

    def __init__(self, message, status_code=-1, body="Missing category:"):
        self.message = message
        self.status_code = status_code
        self.body = body
        super().__init__(self.body + message)

    def __str__(self):
        return f'{self.status_code} -> {self.body} {self.message}'


def category_exists(data):
    if data["category_id"] == 1:
        return True
    else:
        raise MissingCategoryException(data["category_id"])



def create_category(old_id, name, parent_id, session=None):
    global urs_err
    retry_request = MAX_RETRIES

    if type(parent_id) is not int:
        parent_id = 0

    end_cat = create_category_data(parent_id=parent_id, name=name, old_shop_id=old_id)



    # dodajemy losowy numer żęby nie było duplikatów
    while get_category_seo_url(end_cat['translations']['pl_PL']['seo_url']) is not None:
        end_cat['translations']['pl_PL']['seo_url']  += '_' + str(randint(1, 1000))
        pass


    while retry_request >= 0:
        try:
            new_id = create_category_api(end_cat, session=session)
            return new_id, end_cat['translations']['pl_PL']['seo_url']  # zwraca new_category_id, żeby podłączać podrzędne kategorie

        except GenericApiException as exception:
            print(exception)
            print("TODO: refactor") # TODO refactor
            end_cat['translations']['pl_PL']['seo_url'] += str("_" + str(urs_err))
            urs_err += 1
            print("creating category:", "\n")
            retry_request -= 1
        # except Exception as e:
        #     print("coś innego", e)


Session = session_factory()


def add_category_map(kramp_id, shoper_id, seo_url=None):
    cat_map = CategoryMap(kramp_id, shoper_id, seo_url)
    Session.add(cat_map)
    Session.commit()


def get_shoper_category(kramp_id):
    return Session.query(CategoryMap).filter(CategoryMap.kramp_id == kramp_id).first()

def get_category_seo_url(kramp_id):
    return Session.query(CategoryMap).filter(CategoryMap.kramp_id == kramp_id).first()