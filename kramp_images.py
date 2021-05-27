
from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

transport = AIOHTTPTransport(url="https://www.kramp.com/graphql/checkout-app",
                             headers={"ctx-locale": "pl_PL",
                                      "ctx-corporate-identity": "kramp",
                                      "Accept-Language": "pl-PL,pl;q=0.5"})

client = Client(transport=transport, fetch_schema_from_transport=True)


query = """
query getVariantImages($id: ID!) {
  variant(id: $id) {
    id
    groupedAssets {
      images {
        id
        usage
        description
        customSizes {
          key
          value
          __typename
        }
        attributeMappings {
          symbol
          attributeIds
          __typename
        }
        __typename
      }
      videos {
        id
        usage
        resourceLocation
        description
        usage
        __typename
      }
      __typename
    }
    defining_attributes {
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
    displayableAttributes {
      ...AttributeValue
      __typename
    }
    descriptive_attribute_values {
      ...AttributeValue
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


# {"operationName":"getVariantImages","variables":{"id":"ticItemGroup-47787112"}, "query"


def get_graphql_images(q_query=query, category_id=""):
    variables = {"id": category_id}

    gql_query = gql(q_query)

    result = client.execute(
        gql_query,
        variable_values=variables
    )
    return result