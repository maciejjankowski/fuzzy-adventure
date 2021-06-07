from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

import os.path
from random import randint


import json

import requests

from kramp_category import get_category_by_id
from kramp_products import get_graphql_products
from kramp_images import get_graphql_images

from queue_ops import get_queue_item, queue_item, get_products_count, get_queued_product
from shoper_api import login_to_session, create_product_api, create_category_api, GenericApiException, request
from shoper_dicts import create_category_data, create_product_data
from csv_operation import append_dict_as_row

from shoper_category import CategoryMap, create_category, add_category_map, get_shoper_category
from shoper_product import create_product, find_shoper_product, add_product_map

from alchemy.base import Base, session_factory
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



def process_products_response(products_response):
    category = products_response['category']
    # kramp_category_id = category['id']
    downloaded_products = category['items']['items']
    for product in downloaded_products:
        queue_item(product, "create_product")


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
            process_image(product_data.get("id"), shoper_id)
        return shoper_id
    except GenericApiException:
        print("product failed: ", product_data)

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


def create_or_update_category(category_data : dict):
    """
    :param downloaded_product:
    :return:
    """
    try:
        if get_shoper_category(category_data['old_id']):  # todo zobaczyć co zwraca czy pusta lista? assert equal
            shoper_id = update_category(category_data['old_id'], category_data['name'], category_data['parent'], session=session)
            return shoper_id
        else:
            shoper_id, seo_url = create_category(category_data['old_id'], category_data['name'], category_data['parent'], session=session)
            add_category_map(category_data['old_id'], shoper_id, seo_url=seo_url)
        return shoper_id
    except GenericApiException:
        print("product failed: ", category_data)

def product_exists_in_shoper(data, session):
    found_product = find_shoper_product(data['name'], session=session)
    return int(found_product.get('count')) > 0


def update_category(old_id, name, parent, session=None):
    print('Try to update category:', old_id, name, parent, session)
    return -1

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
        'create_category' : create_or_update_category,
        'category_response' : process_category_response,
        'product_response' : process_products_response,
        'product_pagination': process_product_pagination,
        'download_image' : download_image,
        'upload_image': upload_image,
    }
    if (item.record_type in function_map):
        data = json.loads(item.record_data)
        print('processing', item.record_type, item.record_id)
        function_map[item.record_type](data)
    else:
        print('unhandled item', item.record_type, item.record_data)


def download_file(url, file_name):
    # https://stackoverflow.com/a/16696317/678074
    local_filename = file_name or url.split('/')[-1]
    # NOTE the stream=True parameter below
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        # TODO sprawwdzic czy plik juz istnieje
        while os.path.exists('images/' + local_filename):
            local_filename += '_' + str(randint(1, 1000))
        with open('images/' + local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192): 
                # If you have chunk encoded response uncomment if
                # and set chunk_size parameter to None.
                #if chunk: 
                f.write(chunk)
    return local_filename
    

def download_image(data):
    image = data['image']
    shoper_product_id = data['shoper_product_id']
    kramp_product_id = data['kramp_product_id']
    file_name = image.split('/')[-1]
    download_file(image, f'{shoper_product_id}_{file_name}')
    data['file_name'] = file_name
    queue_item(data, 'upload_image')


def upload_image(data):
    pass


def process_product_pagination(data_z_kolejki):
    products_list = get_graphql_products(category_id=data_z_kolejki.category_id, page=data_z_kolejki.page)
    queue_item(products_list, "product_response")


def process_image(kramp_product_id, shoper_product_id):
    images_response = get_graphql_images(product_id=kramp_product_id)
    images = extract_images(images_response)
    for position, image in enumerate(images):
        data = {'image' : image, 'shoper_product_id' : shoper_product_id, 'product_id' : kramp_product_id, 'position' : position}
        queue_item(data, 'download_image')


def extract_images(image_response):
    """
    wyciaga urle i skraca je zeby pominac znak wodny
    """
    images = []
    for image in image_response['variant']['groupedAssets']['images']:
      url = image['customSizes'][-1]['value'].split('?')[0]
      images.append(url)
    return images


def start_scraping():
    # add_categories_to_queue()

    # while get_products_count() > 0:
        # page, category_id = get_queued_products()
    #     products_list = get_graphql_products(page=page, category_id=category_id)
    #     process_products_response(products_list)

    # ściągamy listę kategorii
    scraped_categories = db.query(CategoryMap).all()
    for category in scraped_categories:
        products_list = get_graphql_products(category_id=category.kramp_id)
        # dodajemy strony do kolejki
        for page in category["items"]["pagination"]["totalPages"]:
            data = {"category_id": category.kramp_id, "page": page}
            queue_item(data, "product_pagination")
        queue_item(products_list, "product_response")

    while item := get_queue_item():
        process_queue_item(item)


print(__name__)


if __name__ == '__main__':
    session = login_to_session()
    db = session_factory()
    start_scraping()
    # products_response = get_graphql_products()
    # process_products_response(products_response)





