def update_product_by_id(data, session, product_id):
    create_product(data, session=session, product_id=product_id)
    return -1

def product_exists_in_shoper(data, session):
    found_product = find_shoper_product(data['name'],
                                        session=session)
    return int(found_product.get('count')) > 0

def create_or_update_product(data, session):
    if get_product_shoper_id(kramp_id) or product_exists_in_shoper(data, session):
        shoper_id = update_product_by_id(data,  session=session, product_id=found_product.get("list")[0].get("product_id"))
        return shoper_id
    else:
        shoper_id = create_product(data, session=session)
        add_product_map(data.get("id"), shoper_id)


def process_products_response(products_response):
    category = products_response['category']
    kramp_category_id = category['id']
    queue_product_pages(kramp_category_id,
                        category["items"]["pagination"]["totalPages"],
                        category["items"]["pagination"]["totalResults"])
    downloaded_products = category['items']['items']
    for product in downloaded_products:
        product['category_id'] = get_shoper_category(kramp_category_id)
        shoper_id = create_or_update_product(product, session=session)


def process_product_data(downloaded_product):
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