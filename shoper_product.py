from shoper_api import create_product_api, find_product_api, GenericApiException
from shoper_dicts import create_product_data
from shoper_category import category_exists, MissingCategoryException # category_exists jest z lokalnej bazy + fallback do API?

import json

from sqlalchemy import Column, String, Integer, and_, or_

from alchemy.base import Base, session_factory
from time import time


class ProductMap(Base):
    __tablename__ = 'product_map'
    record_id = Column(Integer, primary_key=True)
    kramp_id = Column('kramp_id', String(32))
    shoper_id = Column('shoper_id', String(32))
    last_updated = Column('last_updated', Integer)

    def __init__(self, kramp_id, shoper_id):
        self.kramp_id = kramp_id
        self.shoper_id = shoper_id
        self.last_updated = time()


urs_err = 0
MAX_RETRIES = 6


def create_product(data, session=None):
    """
    :param data: graphql data
    :param session: session
    :return:
    """
    if not category_exists(data["category_id"]):
        raise MissingCategoryException(message=data['category_id'])

    global urs_err

    end_product = create_product_data(data)

    retry_request = MAX_RETRIES
    while retry_request >= 0:
        try:
            new_id = create_product_api(end_product, session=session)
            # add_product_map(data.get('id'), new_id)
            return new_id  # zwraca new_category_id, żeby podłączać podrzędne kategorie
        except GenericApiException as exception:
            print(exception)
            data['translations']['pl_PL']['seo_url'] += str("_" + str(urs_err))
            urs_err += 1
            print("creating product:", "\n")
            retry_request -= 1


def find_shoper_product(name, session=None):
    """
    limit   	integer 	count of fetched objects, default: 10, max: 50
    order 	    string 	    collection sort field
    page 	    integer 	index of requested page, default: 1
    offset 	    integer 	starting record index (used instead of page)
    filters 	string 	    JSON-ified string with filtering criteria
    """
    if session is None:
        raise GenericApiException("session not created")

    try:
        filter_obj = {
            "translations.pl_PL.name": name,
        }
        data = {
            "limit": 5,
            "order": "category.category_id",
            "page": 1,
            "filters": 
            json.dumps(filter_obj) 
        }
        found_products = find_product_api(data, session=session)
        return found_products  # zwraca new_category_id, żeby podłączać podrzędne kategorie
    except GenericApiException as exception:
        print(exception)
        raise exception


Session = session_factory()


def add_product_map(kramp_id, shoper_id):
    cat_map = ProductMap(kramp_id, shoper_id)
    Session.add(cat_map)
    Session.commit()
