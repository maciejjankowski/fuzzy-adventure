
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


def get_graphql_images(q_query=query, product_id=""):
    variables = {"id": product_id}

    gql_query = gql(q_query)

    result = client.execute(
        gql_query,
        variable_values=variables
    )

    return result

def extract_images(image_response):
    """
    wyciaga urle i skraca je zeby pominac znak wodny
    """
    images = []
    for image in image_response['variant']['groupedAssets']['images']:
      url = image['customSizes'][-1]['value'].split('?')[0]
      images.append(url)
    
    return images


if __name__ == '__main__':
    print(extract_images(get_graphql_images(product_id='ticItemGroup-47787112')))


    #response = {'variant': {'id': 'ticItemGroup-47787112', 'groupedAssets': {'images': [{'id': 'M38B0377C_WI', 'usage': 'asrPrimaryImage', 'description': 'M38B0377C_WI', 'customSizes': [{'key': 'tiny', 'value': 'https://images.kramp.com/images/13/7b/m38b0377c_wi.jpg?profile=small_thumb', '__typename': 'KeyValue'}, {'key': 'small', 'value': 'https://images.kramp.com/images/13/7b/m38b0377c_wi.jpg?profile=thumb', '__typename': 'KeyValue'}, {'key': 'normal', 'value': 'https://images.kramp.com/images/13/7b/m38b0377c_wi.jpg?profile=kramps', '__typename': 'KeyValue'}, {'key': 'large', 'value': 'https://images.kramp.com/images/13/7b/m38b0377c_wi.jpg?profile=krampd_rd', '__typename': 'KeyValue'}], 'attributeMappings': [], '__typename': 'MediaAsset'}, {'id': 'M38B0377C_2_WI', 'usage': 'asrAlternativeImage', 'description': 'M38B0377C_2_WI', 'customSizes': [{'key': 'tiny', 'value': 'https://images.kramp.com/images/d5/2a/m38b0377c_2_wi.jpg?profile=small_thumb', '__typename': 'KeyValue'}, {'key': 'small', 'value': 'https://images.kramp.com/images/d5/2a/m38b0377c_2_wi.jpg?profile=thumb', '__typename': 'KeyValue'}, {'key': 'normal', 'value': 'https://images.kramp.com/images/d5/2a/m38b0377c_2_wi.jpg?profile=kramps', '__typename': 'KeyValue'}, {'key': 'large', 'value': 'https://images.kramp.com/images/d5/2a/m38b0377c_2_wi.jpg?profile=krampd_rd', '__typename': 'KeyValue'}], 'attributeMappings': [], '__typename': 'MediaAsset'}, {'id': 'TOYS_ICON_AGE_6PLUS_TD', 'usage': 'asrPictogram', 'description': 'TOYS_ICON_AGE_6PLUS', 'customSizes': [{'key': 'large', 'value': 'https://images.kramp.com/images/89/72/toys_icon_age_6plus_td.jpg?profile=krampd_rd', '__typename': 'KeyValue'}, {'key': 'tiny', 'value': 'https://images.kramp.com/images/89/72/toys_icon_age_6plus_td.jpg?profile=small_thumb', '__typename': 'KeyValue'}, {'key': 'small', 'value': 'https://images.kramp.com/images/89/72/toys_icon_age_6plus_td.jpg?profile=thumb', '__typename': 'KeyValue'}, {'key': 'normal', 'value': 'https://images.kramp.com/images/89/72/toys_icon_age_6plus_td.jpg?profile=kramps', '__typename': 'KeyValue'}], 'attributeMappings': [], '__typename': 'MediaAsset'}], 'videos': [], '__typename': 'GroupedAssets'}, 'defining_attributes': [], 'displayableAttributes': [], 'descriptive_attribute_values': [], '__typename': 'Variant'}}
    