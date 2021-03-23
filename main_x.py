from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

import json

from kramp_category import get_category_by_id
from queue import queue_item, get_products_count, get_queued_product
from shoper_api import login_to_session, create_product_api, create_category_api, GenericApiException
from shoper_dicts import create_category_data, create_product_data
from csv_operation import append_dict_as_row
from local_settings import shop_url
from shoper_category import create_category, add_category_map, get_shoper_category
from shoper_product import create_product, find_shoper_product, add_product_map

from kramp_products import get_graphql_products

urs_err = 0


def add_categories_to_queue():
    cats = [{
        "id": "web1-4045064"
    }, {
        "id": "web1-4045063"
    }, {
        "id": "web1-4045065"
    }, {
        "id": "web1-4045066"
    }, {
        "id": "web2-4045755"
    }]

    for cat_id in cats:
        category = get_category_by_id(cat_id["id"])
        process_category(category['category'])


def process_category(cat: dict, parent=0):
    """
    :param cat: dict
    :param parent: parent category
    :return:
    """
    old_id = cat['id']  # original category reference (KRAMP)
    name = cat['name']
    created_category = create_category(old_id, name, parent, session=session)  # TODO: queue, not create
    add_category_map(old_id, created_category)
    if cat.get('childCategories') and len(cat['childCategories']):
        for child_category in cat['childCategories']:
            print("child category", child_category)
            process_category(child_category, created_category)  # created_category == parent_id




def process_products_response(products_response):
    category = products_response['category']
    kramp_category_id = category['id']
    queue_product_pages(kramp_category_id,
                        category["items"]["pagination"]["totalPages"],
                        category["items"]["pagination"]["totalResults"])
    product_remaining_count += category["items"]["pagination"]["totalResults"]
    downloaded_products = products_response['items']['items']
    for product in downloaded_products:
        create_or_update_product(product, session=session)  # TODO add to queue


def update_product_by_id(param, session):
    # todo
    raise "not implemented"

def process_product(downloaded_product : dict):
    """
    :param downloaded_product:
    :return:
    """
    product_data = create_product_data(downloaded_product)
    try:
        new_id = create_or_update_product(product_data, session)
        return new_id
    except GenericApiException:
        print("product failed: ", product_data)

def create_or_update_product(data, session):
    if len(find_shoper_product(data['name'],
                               session=session)) > 0:  # todo zobaczyć co zwraca czy pusta lista? assert equal
        shoper_id = update_product_by_id(data, session=session)
        return shoper_id
    else:
        shoper_id = create_product(data, session=session)
        add_product_map(data.get("id"), shoper_id)


def queue_product_pages(category_id, total_pages, total_results):
    for page in total_pages:
        data = {"category_id": category_id, "page": page}
        queue_item(data, "category_query")



def start_scraping():
    add_categories_to_queue()
    product_remaining_count = get_products_count()

    while product_remaining_count > 0:
        page, category_id = get_queued_products()
        products_list = get_graphql_products(page=page, category_id=category_id)
        process_products_response(products_list)

    while category_remaining_count > 0:
        category_list = fetch_categories()
        add_categories_to_upload_queue(category_list)

# fetch_product_response -> add_to_queue
# fetch_category_response -> add_to_queue

# process_category_response -> add_to_queue
# process_product_response -> add_to_queue

# queue -> add_product_to_shoper
# queue -> add_category_to_shoper


if __name__ == '__main__':
    # start_scraping()
    session = login_to_session()
    products_response = get_graphql_products()
    process_products_response(products_response)





