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
    add_category_map(old_id, created_category)
    if cat.get('childCategories') and len(cat['childCategories']):
        for child_category in cat['childCategories']:
            process_category(child_category, created_category)  # created_category == parent_id
