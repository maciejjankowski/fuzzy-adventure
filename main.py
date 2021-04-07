from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

import json

from kramp_category import get_category_by_id
from queue_ops import get_queue_item, queue_item, get_products_count, get_queued_product
from shoper_api import login_to_session, create_product_api, create_category_api, GenericApiException
from shoper_dicts import create_category_data, create_product_data
from csv_operation import append_dict_as_row

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
        queue_item(category['category'], "category_response")
        # process_category_response(category['category'])


def process_category_response(cat: dict, parent=0):
    """
    :param cat: dict
    :param parent: parent category - old_id = KRAMP ID - IMPORTANT!!!
    :return:
    """
    old_id = cat['id']  # original category reference (KRAMP)
    name = cat['name']
    # created_category = queue_create_category(old_id, name, parent, session=session)  # TODO: queue, not create
    data = {"old_id" : old_id, 'name' : name, 'parent': parent}
    queue_item(data, 'create_category')
    # add_category_map(old_id, created_category) # TODO: move inside create category
    if cat.get('childCategories') and len(cat['childCategories']):
        for child_category in cat['childCategories']:
            process_category_response(child_category, old_id)  # created_category == parent_id


def process_products_response(products_response):
    category = products_response['category']
    kramp_category_id = category['id']
    queue_product_pages(kramp_category_id,
                        category["items"]["pagination"]["totalPages"],
                        category["items"]["pagination"]["totalResults"])
    downloaded_products = category['items']['items']
    for product in downloaded_products:
        queue_item(product, "create_product", session=session) 


def queue_product_pages(category_id, total_pages, total_results):
    for page in total_pages:
        data = {"category_id": category_id, "page": page}
        raise "to test"
        queue_item(data, "category_query")


def create_or_update_product(downloaded_product : dict):
    """
    :param downloaded_product:
    :return:
    """
    product_data = create_product_data(downloaded_product)
    try:
        # new_id = create_or_update_product(product_data, session)
        if len(find_shoper_product(product_data['name'],
                               session=session)) > 0:  # todo zobaczyć co zwraca czy pusta lista? assert equal
            shoper_id = update_product_by_id(product_data, session=session)
            return shoper_id
        else:
            shoper_id = create_product(product_data, session=session)
            add_product_map(product_data.get("id"), shoper_id)
        return shoper_id
    except GenericApiException:
        print("product failed: ", product_data)


def product_exists_in_shoper(data, session):
    found_product = find_shoper_product(data['name'],
                                        session=session)
    return int(found_product.get('count')) > 0


def update_product_by_id(data, session):
    raise('not implemented')
    pass

def process_queue_item(item):
# fetch_product_response -> add_to_queue
# fetch_category_response -> add_to_queue

# process_category_response -> add_to_queue
# process_product_response -> add_to_queue

# queue -> add_product_to_shoper
# queue -> add_category_to_shoper
    function_map = {
        'create_product' : create_or_update_product,
        'create_category' : None,
        'category_response' : process_category_response,
        'product_response' : process_products_response,
        
    }
    if (item.record_type in function_map):
        data = json.loads(item.record_data)
        print('processing', item.record_type, item.record_id)
        function_map[item.record_type](data)
    else:
        print('unhandled item', item.record_type, item.record_data)



def start_scraping():
    # add_categories_to_queue()

    # while get_products_count() > 0:
    #     page, category_id = get_queued_products()
    #     products_list = get_graphql_products(page=page, category_id=category_id)
    #     process_products_response(products_list)

    while item := get_queue_item():
        process_queue_item(item)


print(__name__)


if __name__ == '__main__':
    session = login_to_session()
    start_scraping()
    # products_response = get_graphql_products()
    # process_products_response(products_response)





