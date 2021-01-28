false = False

from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

transport = AIOHTTPTransport(url="https://www.kramp.com/graphql/checkout-app",
                             headers={"ctx-locale": "pl_PL"})

client = Client(transport=transport, fetch_schema_from_transport=True)

def get_category_by_id(cat_id:str):
    query_text = """query GetChildCategories($id: ID!) {\n  category(id: $id) {\n    id\n    name\n    childCategories {\n      id\n      name\n      image {\n        src\n        alt\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n """
    query = gql(query_text)
    vars = {
        "categoryId": cat_id,
        "isAuthenticated": false,
        "pageSize": 60,
        "page": 1,
        "facetValues": {
            "multi": [],
            "range": [],
            "single": []
        }
    }

    result = client.execute(query, variable_values=var)  #, variable_values=variables
    print("graphql return type: ", type(result))
    return result



class Kolejka:
    status = ['new', "in progress", "done", "error"]
    url = ""
    item_type = ['category', 'product', 'image']


def start_scraping():
    add_categories_to_queue()
    product_remaining_count = get_products_count()

    while product_remaining_count > 0:
        products_list = fetch_products()
        add_products_to_upload_queue(products_list)

    while category_remaining_count > 0:
        categoty_list = fetch_categories()
        add_categories_to_upload_queue(categoty_list)

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
       category = get_category_by_id(cat_id)
       process_category(category)

def process_category(category:str):
    pass



if __name__ == '__main__':
    start_scraping()





'''
query = """query GetCategoryProducts($categoryId: ID!, $isAuthenticated: Boolean!, $pageSize: Int!, $page: Int!, $facetValues: FacetValuesInput) {  category(id: $categoryId) {    id    name    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) {      pagination {        page        totalPages        totalResults        __typename      }      items {        id        name        description        brand {          id          name          logo {            src            alt            __typename          }          __typename        }        classifications {          code          values {            key            value            __typename          }          __typename        }        image {          src          alt          __typename        }        quantity        roundingQuantity        minimumQuantity        variant {          id          name          __typename        }        hasVolumeDiscount @include(if: $isAuthenticated)        grossPrice @include(if: $isAuthenticated) {          value          currency          __typename        }        __typename      }      __typename    }
  __typename  }}"""


'''

# query CategoryPagination($id: ID!, $page: Int!, $pageSize: Int!, $hasItems: Boolean!, $hasEntries: Boolean!, $facetValues: FacetValuesInput) {  category(id: $id) {    id    name    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasEntries) {      pagination {        page        totalPages        totalResults        __typename}      __typename}    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasItems) {      pagination {        page        totalPages        totalResults        __typename}      __typename}    __typename}}
