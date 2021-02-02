from shoper_api import create_product_api, find_product_api, GenericApiException
from shoper_dicts import create_product_data
import json


MAX_RETRIES = 6


def create_product(data, parent_id, session=None):
    global urs_err
    end_product = create_product_data(data)
    retry_request = MAX_RETRIES
    while retry_request >= 0:
        try:
            new_id = create_product_api(end_product, session=session)
            return new_id  # zwraca new_category_id, żeby podłączać podrzędne kategorie
        except GenericApiException as exception:
            print(exception)
            data['translations']['pl_PL']['seo_url'] += str("_" + str(urs_err))
            urs_err += 1
            print("creating product:", "\n")
            retry_request -= 1


def find_product(name, session=None):
    """
limit   	integer 	count of fetched objects, default: 10, max: 50
order 	    string 	    collection sort field
page 	    integer 	index of requested page, default: 1
offset 	    integer 	starting record index (used instead of page)
filters 	string 	    JSON-ified string with filtering criteria
    """
    if session is None:
        raise "session not created"

    retry_request = MAX_RETRIES
    try:
        filter_obj = {
            "translations.pl_PL.name": name,
        }
        data = {
            "limit" : 5,
            "order" : "category.category_id",
            "page" : 1,
            "filters": 
            json.dumps(filter_obj) 
        }
        found_products = find_product_api(data, session=session)
        return found_products  # zwraca new_category_id, żeby podłączać podrzędne kategorie
    except GenericApiException as exception:
        print(exception)
        raise exception


