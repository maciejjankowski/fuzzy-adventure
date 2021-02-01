from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

import json
from shoper_api import login_to_session, create_product_api, create_category_api, GenericApiException
from shoper_dicts import create_category_data, create_product_data
from csv_operation import append_dict_as_row
from local_settings import shop_url
from shoper_category import create_category
from shoper_product import create_product, find_product


false = False
urs_err = 0

transport = AIOHTTPTransport(url="https://www.kramp.com/graphql/checkout-app",
                             headers={"ctx-locale": "pl_PL"})

client = Client(transport=transport, fetch_schema_from_transport=True)






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
    old_id = cat['id']  # original category reference (KRAMP)
    name = cat['name']
    created_category = create_category(old_id, name, parent, session=session)
    if cat.get('childCategories') and len(cat['childCategories']):
        for child_category in cat['childCategories']:
            process_category(child_category, created_category)  # created_category == parent_id



def process_product(downloaded_product):
    product = prepare_product_data(downloaded_product)
    try:
        create_or_update(product)
    except:
        log_error("product failed", product)


def create_or_update_product():
    if find_product_by_id("Kcostam1"):
        update_product_by_id(...)
    else:
        # create_product(..., session=session)
        pass




def start_scraping():
    add_categories_to_queue()
    product_remaining_count = get_products_count()

    while product_remaining_count > 0:
        products_list = fetch_products()
        add_products_to_upload_queue(products_list)

    while category_remaining_count > 0:
        category_list = fetch_categories()
        add_categories_to_upload_queue(category_list)



if __name__ == '__main__':
    # start_scraping()
    session = login_to_session()
    find_product(name="kluski", session=session)
    