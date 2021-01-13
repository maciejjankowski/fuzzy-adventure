false = False

# todo check for classifications

# GET categories
query = """query GetChildCategories($id: ID!) {\n  category(id: $id) {\n    id\n    name\n    childCategories {\n      id\n      name\n      image {\n        src\n        alt\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n """
"""

  """
vars = [{
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
# variables = {"id": "web1-4045064"}

# query CategoryPagination($id: ID!, $page: Int!, $pageSize: Int!, $hasItems: Boolean!, $hasEntries: Boolean!, $facetValues: FacetValuesInput) {  category(id: $id) {    id    name    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasEntries) {      pagination {        page        totalPages        totalResults        __typename}      __typename}    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasItems) {      pagination {        page        totalPages        totalResults        __typename}      __typename}    __typename}}

from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

transport = AIOHTTPTransport(url="https://www.kramp.com/graphql/checkout-app",
                             headers={"ctx-locale": "pl_PL"})

client = Client(transport=transport, fetch_schema_from_transport=True)
query = gql(query)

for var in vars:
    result = client.execute(query,
                            variable_values=var)  #, variable_values=variables
    print(result)
    print("\n\n\n")
'''
query = """query GetCategoryProducts($categoryId: ID!, $isAuthenticated: Boolean!, $pageSize: Int!, $page: Int!, $facetValues: FacetValuesInput) {  category(id: $categoryId) {    id    name    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) {      pagination {        page        totalPages        totalResults        __typename      }      items {        id        name        description        brand {          id          name          logo {            src            alt            __typename          }          __typename        }        classifications {          code          values {            key            value            __typename          }          __typename        }        image {          src          alt          __typename        }        quantity        roundingQuantity        minimumQuantity        variant {          id          name          __typename        }        hasVolumeDiscount @include(if: $isAuthenticated)        grossPrice @include(if: $isAuthenticated) {          value          currency          __typename        }        __typename      }      __typename    }
  __typename  }}"""

vars = {
    "categoryId": "web2-4045755",
    "isAuthenticated": false,
    "pageSize": 60,
    "page": 1,
    "facetValues": {
        "multi": [],
        "range": [],
        "single": []
    }
}

'''