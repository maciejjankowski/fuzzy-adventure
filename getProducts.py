false = False

# todo check for classifications

# GET categories

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
query = """

query GetCategoryProducts($categoryId: ID!, $pageSize: Int!, $page: Int!, $facetValues: FacetValuesInput) {
  category(id: $categoryId) {
    id
    name
    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) {
      pagination {
        page
        totalPages
        totalResults
        __typename
      }
      items {
        id
        name
        description
        brand {
          id
          name
          __typename
        }
        image {
          src
          alt
          __typename
        }
        groupedAssets {
          images {
            attributeMappings {
              symbol
              attributeIds
              __typename
            }
            customSizes{
              key
              value
            }
            __typename
          }
          __typename
        }
        quantity
        roundingQuantity
        minimumQuantity
        customAttributes {
        ...AttributeValue
        __typename
      }
      variant {
        id
        displayableAttributes {
          ...AttributeValue
          __typename
        }
        groupedAssets {
          images {
            attributeMappings {
              symbol
              attributeIds
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      displayableAttributes {
        ...AttributeValue
        __typename
      }
      groupedAssets {
        images {
          attributeMappings {
            symbol
            attributeIds
            __typename
          }
          __typename
        }
        __typename
      }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment AttributeValue on AttributeValue {
  id
  attribute {
    id
    dataType
    description
    unit {
      id
      content
      symbol
      __typename
    }
    __typename
  }
  values
  __typename
}"""

vars = {"categoryId":"web2-4045755","pageSize":5,"page":1,"facetValues":{"multi":[],"range":[],"single":[]},"componentId":"","hasComponentId":false}

'''




# jakieś rzeczy:
query = """query GetChildCategories($id: ID!) {\n  category(id: $id) {\n    id\n    name\n    childCategories {\n      id\n      name\n      image {\n        src\n        alt\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n """

# variables = {"id": "web1-4045064"}

# query CategoryPagination($id: ID!, $page: Int!, $pageSize: Int!, $hasItems: Boolean!, $hasEntries: Boolean!, $facetValues: FacetValuesInput) {  category(id: $id) {    id    name    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasEntries) {      pagination {        page        totalPages        totalResults        __typename}      __typename}    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasItems) {      pagination {        page        totalPages        totalResults        __typename}      __typename}    __typename}}
