from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

import json

from kramp_category import get_category_by_id
from shoper_api import login_to_session, create_product_api, create_category_api, GenericApiException
from shoper_dicts import create_category_data, create_product_data
from csv_operation import append_dict_as_row
from local_settings import shop_url
from shoper_category import create_category
from shoper_product import create_product, find_shoper_product

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
    :param parent: parent category, if haven't parent category
    :return:
    """
    old_id = cat['id']  # original category reference (KRAMP)
    name = cat['name']
    created_category = create_category(old_id, name, parent, session=session)
    if cat.get('childCategories') and len(cat['childCategories']):
        for child_category in cat['childCategories']:
            process_category(child_category, created_category)  # created_category == parent_id


def process_product(downloaded_product):
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


def update_product_by_id(param, session):
    return -1


def create_or_update_product(data, session):
    if len(find_shoper_product(data['name'],
                               session=session)) > 0:  # todo zobaczyć co zwraca czy pusta lista? assert equal
        new_id = update_product_by_id(data, session=session)
        return new_id
    else:
        create_product(data, session=session)
        pass  # todo czy to koniec?


def start_scraping():
    add_categories_to_queue()
    product_remaining_count = get_products_count()

    while product_remaining_count > 0:
        products_list = get_graphql_products()
        add_products_to_upload_queue(products_list)

    while category_remaining_count > 0:
        category_list = fetch_categories()
        add_categories_to_upload_queue(category_list)


def queue_product_category_pages(category_id, total_pages, total_results):  # todo dokończyć
    for page in total_pages:

        queue_product_query()


def process_products_response(products_response):
    category = products_response['category']
    category_id = category['id']
    queue_product_category_pages(category_id,
                                 category["items"]["pagination"]["totalPages"], category["items"]["pagination"]["totalResults"])
    return category_id, products_response['items']['items']


if __name__ == '__main__':
    # start_scraping()
    session = login_to_session()
    # products = find_product(name="kluski", session=session)
    products_response = get_graphql_products()
    category_id, downloaded_products = process_products_response(products_response)

    for product in downloaded_products:  # strasznie to brzydkie ale inaczej nie wiem jak xd
        product['category_id'] = category_id # category_id jest tym z shopera
        product_id = create_product(product, session=session)
        # jakie dane gdzie wstawić do tego produktu bo jest strasznie zawiły ten słownik


