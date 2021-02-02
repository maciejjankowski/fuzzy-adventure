from csv import DictWriter
import csv


def append_dict_as_row(file_name, dict_of_elem, field_names):
    # Open file in append mode
    with open(file_name, 'a+', encoding="utf-8", newline='') as write_obj:
        # Create a writer object from csv module
        dict_writer = DictWriter(write_obj, fieldnames=field_names)
        # Add dictionary as wor in the csv
        dict_writer.writerow(dict_of_elem)


def read_csv_to_dict(file_name):
    with open(file_name, 'r', newline='') as data:
        return
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
from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

import json
from shoper_api import get_shoper_session, create_product_api, create_category_api, GenericApiException
from shoper_dicts import get_end_category, get_end_product
from csv_operation import append_dict_as_row
from local_settings import shop_url

false = False
urs_err = 0

transport = AIOHTTPTransport(url="https://www.kramp.com/graphql/checkout-app",
                             headers={"ctx-locale": "pl_PL"})

client = Client(transport=transport, fetch_schema_from_transport=True)

session = get_shoper_session()

def get_category_by_id(cat_id: str):
    query_text = """query GetChildCategories($id: ID!) {\n  category(id: $id) {\n    id\n    name\n    childCategories {\n      id\n      name\n      image {\n        src\n        alt\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n """
    query = gql(query_text)
    print(cat_id)
    params = {
        "id": cat_id,
        "isAuthenticated": false,
        "pageSize": 60,
        "page": 1,
        "facetValues": {
            "multi": [],
            "range": [],
            "single": []
        }
    }

    result = client.execute(query, variable_values=params)  # , variable_values=variables
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
        category = get_category_by_id(cat_id["id"])
        process_category(category['category'])


def process_category(cat: dict, parent=0):
    old_id = cat['id']  # original category reference (KRAMP)
    name = cat['name']

    created_category = create_category(old_id, name, parent)

    if cat.get('childCategories') and len(cat['childCategories']):
        for child_category in cat['childCategories']:
            process_category(child_category, created_category)  # created_category == parent_id


def create_category(old_id, name, parent_id):
    # TODO @Kennedy -
    global urs_err

    if type(parent_id) is not int:
        parent_id = 0

    end_cat = get_end_category(parent_id=parent_id, name=name, old_shop_id=old_id)


    new_old_id_dict = {"old_id": old_id, "new_id": new_id}

    append_dict_as_row(file_name="odl_new_category_id.csv",
                       dict_of_elem=new_old_id_dict,
                       field_names=["old_id", "new_id"]
                       )

    return new_id  # zwraca new_category_id, żeby podłączać podrzędne kategorie


MAX_RETRIES = 6


def create_product(data, parent_id):
    global urs_err
    end_product = get_end_product(data)
    retry_request = MAX_RETRIES
    while retry_request >= 0:
        try:
            new_id = create_product_api(end_product)
            return new_id  # zwraca new_category_id, żeby podłączać podrzędne kategorie
        except GenericApiException:
            print(response.text)
            data['translations']['pl_PL']['seo_url'] += str("_" + str(urs_err))
            urs_err += 1
            print("creating product:", "\n")
            retry_request -= 1






if __name__ == '__main__':
    start_scraping()

'''
query = """query GetCategoryProducts($categoryId: ID!, $isAuthenticated: Boolean!, $pageSize: Int!, $page: Int!, $facetValues: FacetValuesInput) {  category(id: $categoryId) {    id    name    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) {      pagination {        page        totalPages        totalResults        __typename      }      items {        id        name        description        brand {          id          name          logo {            src            alt            __typename          }          __typename        }        classifications {          code          values {            key            value            __typename          }          __typename        }        image {          src          alt          __typename        }        quantity        roundingQuantity        minimumQuantity        variant {          id          name          __typename        }        hasVolumeDiscount @include(if: $isAuthenticated)        grossPrice @include(if: $isAuthenticated) {          value          currency          __typename        }        __typename      }      __typename    }
  __typename  }}"""


'''

# query CategoryPagination($id: ID!, $page: Int!, $pageSize: Int!, $hasItems: Boolean!, $hasEntries: Boolean!, $facetValues: FacetValuesInput) {  category(id: $id) {    id    name    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasEntries) {      pagination {        page        totalPages        totalResults        __typename}      __typename}    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasItems) {      pagination {        page        totalPages        totalResults        __typename}      __typename}    __typename}}


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
        create_product(...)
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
shop_url = 'https://sklep004948.shoparena.pl'
client_id = 'ubb25245@zwoho.com'
client_secret = 'yA2dojHW8L'

from shoper_auth import login_to_session
import json


def main():

    session = login_to_session(
        shop_url=shop_url,
        client_id=client_id,
        client_secret=client_secret
    )

    # print(session.headers)
    # for i in range(len(list_of_categories)):
    #     response = session.post(
    #         url=shop_url + '/webapi/rest/categories',
    #         data=json.dumps(list_of_categories[i])
    #     )
    #     print(response.status_code)
    #     print(response.text, "\n")



try:
    from local_settings import *
except ImportError:
    print("Please create local file 'local_settings.py'\n")


if __name__ == '__main__':
    main()import requests

url = "https://sklep004948.shoparena.pl/webapi/rest/auth"
pwd = ''
user = 'admin'

payload = {'client_id': user, 'client_secret': pwd}

r = requests.post(url, data=payload)

print(r.text)
# HTTP code	OAUTH2 code	Description
# 200	-	OK
# 400   -	invalid_request
# 400   -	invalid_scope	        Invalid request - insufficient permissions
# 400	-   invalid_grant	        Invalid request - invalid authentication method
# 401   -   unauthorized_client 	Authentication error
# 402	-   access_denied	        Payment required
# 403   -	insufficient_scope	    Accessioned
# 404	-   server_error	        An object doesn't exist
# 405	-   invalid_request	        Invalid request method
# 409   -   server_error	        Conflict - another administrator has locked an access to the object
# 429	-   temporarily_unavailable	Calls limit exceeded
# 500	-   server_error	        Application error
# 501	-   server_error	        Method not implemented
# 503   -   temporarily_unavailable	System is temporarily unavailable

import requests
from time import sleep
import json

MAX_RETRIES = 5
urs_err = 0


def login_to_session():
    """
    :return: session to shoper api
    """
    session = requests.Session()
    my_obj = {
        'client_id': client_id,
        'client_secret': client_secret,
    }
    response = session.post(url=shop_url + '/webapi/rest/auth', data=my_obj)
    result = response.json()

    token = result['access_token']
    session.headers.update({'Authorization': 'Bearer %s' % token})

    return session


class ApiException(Exception):
    pass


class LoginException(Exception):
    pass


class ThrottlingException(Exception):
    pass


class GenericApiException(Exception):

    def __init__(self, status_code, body="API Error"):
        self.status_code = status_code
        self.body = body
        super().__init__(self.body)

    def __str__(self):
        return f'{self.status_code} -> {self.body}'


class AddingRecordFailedException(Exception):
    pass


def request(data, url, session, ):
    """
    :param session: shoper api session
    :param data: wat we want send to endpoint
    :param url: url for endpoint is shoper api
    :return:  new_id - ID of the new item in the shoper database
    """
    retry_request = MAX_RETRIES
    response = None
    while retry_request >= 0:
        try:
            response = session.post(
                url,
                data=json.dumps(data)
            )
            if response.status_code == 401:
                raise LoginException
            if response.status_code == 400:
                raise GenericApiException(response.status_code, response.text)
            try:
                response_json = json.loads(response.text)
                if response_json["error"] == 'temporarily_unavailable':
                    raise ThrottlingException

            except ValueError:  # todo:
                print("nope")

            return response.text

        except GenericApiException:
            print("Generic API Error", response.status_code, response.text)
            print("url", url, "data:", data)
            raise GenericApiException(response.status_code, response.text)

        except LoginException:
            login_to_session()
            print("login expired, logging again")
            retry_request -= 1

        except ThrottlingException:
            sleep(1 * (MAX_RETRIES - retry_request + 1))
            retry_request -= 1

    new_id = response.text
    return new_id


def create_category_api(data, session):
    """

    :param data: dict - should have parent_id, old_shop_id, name
    :param session: shoper api session
    :return: category ID in shoper database (need if its parent/main category)
    :raises GenericApiException:
    """
    url = shop_url + '/webapi/rest/categories'
    try:
        new_id = request(data, url, session=session)
        return new_id
    except GenericApiException:
        print("creating category failed")
        raise AddingRecordFailedException


def create_product_api(data, session):  # todo
    """
    :param session: shoper api session
    :param data: dict
    :return: new_id: ID of the new product in the shoper database
    :raises GenericApiException:
    """
    global urs_err
    url = ""
    urs_err = 0
    if type(data['parent_id']) is not int:
        data['parent_id'] = 0

    try:
        new_id = request(data, url, session=session)
        print("creating product:", data["name"], "\n")
        return new_id
    except GenericApiException():
        print("creating product failed")


try:
    from local_settings import *
except ImportError:
    print("Please create local file 'local_settings.py'\n")
# tagi produktów - https://developers.shoper.pl/developers/api/resources/news-tags
# kategorie - https://developers.shoper.pl/developers/api/resources/categories
# produkty - https://developers.shoper.pl/developers/api/resources/products
# zdjęcia - ?





def remove_accents(input_text):
    strange = 'ŮôῡΒძěἊἦëĐᾇόἶἧзвŅῑἼźἓŉἐÿἈΌἢὶЁϋυŕŽŎŃğûλВὦėἜŤŨîᾪĝžἙâᾣÚκὔჯᾏᾢĠфĞὝŲŊŁČῐЙῤŌὭŏყἀхῦЧĎὍОуνἱῺèᾒῘᾘὨШūლἚύсÁóĒἍŷöὄ' \
              'ЗὤἥბĔõὅῥŋБщἝξĢюᾫაπჟῸდΓÕűřἅгἰშΨńģὌΥÒᾬÏἴქὀῖὣᾙῶŠὟὁἵÖἕΕῨčᾈķЭτἻůᾕἫжΩᾶŇᾁἣჩαἄἹΖеУŹἃἠᾞåᾄГΠКíōĪὮϊὂᾱიżŦИὙἮὖÛĮἳφ' \
              'ᾖἋΎΰῩŚἷРῈĲἁéὃσňİΙῠΚĸὛΪᾝᾯψÄᾭêὠÀღЫĩĈμΆᾌἨÑἑïოĵÃŒŸζჭᾼőΣŻçųøΤΑËņĭῙŘАдὗპŰἤცᾓήἯΐÎეὊὼΘЖᾜὢĚἩħĂыῳὧďТΗἺĬὰὡὬὫÇЩᾧñ' \
              'ῢĻᾅÆßшδòÂчῌᾃΉᾑΦÍīМƒÜἒĴἿťᾴĶÊΊȘῃΟúχΔὋŴćŔῴῆЦЮΝΛῪŢὯнῬũãáἽĕᾗნᾳἆᾥйᾡὒსᾎĆрĀüСὕÅýფᾺῲšŵкἎἇὑЛვёἂΏθĘэᾋΧĉᾐĤὐὴιăąäὺ' \
              'ÈФĺῇἘſგŜæῼῄĊἏØÉПяწДĿᾮἭĜХῂᾦωთĦлðὩზკίᾂᾆἪпἸиᾠώᾀŪāоÙἉἾρаđἌΞļÔβĖÝᾔĨНŀęᾤÓцЕĽŞὈÞუтΈέıàᾍἛśìŶŬȚĳῧῊᾟάεŖᾨᾉςΡმᾊᾸį' \
              'ᾚὥηᾛġÐὓłγľмþᾹἲἔбċῗჰხοἬŗŐἡὲῷῚΫŭᾩὸùᾷĹēრЯĄὉὪῒᾲΜᾰÌœĥტ&-'

    ascii_replacements = 'UoyBdeAieDaoiiZVNiIzeneyAOiiEyyrZONgulVoeETUiOgzEaoUkyjAoGFGYUNLCiIrOOoqaKyCDOOUniOeiIIOSul' \
                         'EySAoEAyooZoibEoornBSEkGYOapzOdGOuraGisPngOYOOIikoioIoSYoiOeEYcAkEtIuiIZOaNaicaaIZEUZaiIaaG' \
                         'PKioIOioaizTIYIyUIifiAYyYSiREIaeosnIIyKkYIIOpAOeoAgYiCmAAINeiojAOYzcAoSZcuoTAEniIRADypUitii' \
                         'IiIeOoTZIoEIhAYoodTIIIaoOOCSonyKaAsSdoACIaIiFIiMfUeJItaKEISiOuxDOWcRoiTYNLYTONRuaaIeinaaoIo' \
                         'ysACRAuSyAypAoswKAayLvEaOtEEAXciHyiiaaayEFliEsgSaOiCAOEPYtDKOIGKiootHLdOzkiaaIPIIooaUaOUAIr' \
                         'AdAKlObEYiINleoOTEKSOTuTEeiaAEsiYUTiyIIaeROAsRmAAiIoiIgDylglMtAieBcihkoIrOieoIYuOouaKerYAOOi' \
                         'iaMaIoht_'
    translator = str.maketrans(strange, ascii_replacements)
    return input_text.translate(translator)


def get_end_category(parent_id, old_shop_id, name):
    no_accents_name = remove_accents(name)
    category = {
        'parent_id': parent_id,  # int
        'order': 0,  # int
        'translations': {
            'pl_PL': {
                'name': name,
                'description': old_shop_id,
                'description_bottom': "",
                'seo_title': name,
                'seo_description': name,
                'seo_keywords': name,
                'seo_url': no_accents_name.replace(' ', '_'),
                'active': True
            }
        }
    }
    return category


def get_end_product(data,):
    product = {
        'product_id': int,
        'type': int,
        'producer_id': 'null | integer',
        'group_id': int,
        'tax_id': int,
        'category_id': 'integer',
        'unit_id': 'integer',
        'add_date': 'string',
        'edit_date': 'string',
        'other_price': 'float',
        'promo_price': 'float',
        'code': 'string',
        'dimension_w': 'float',
        'dimension_h': 'float',
        'dimension_l': 'float',
        'ean': 'string',
        'pkwiu': 'string',
        'is_product_of_day': 'boolean',
        'loyalty_score': 'null | integer',
        'loyalty_price': 'null | integer',
        'in_loyalty': 'boolean',
        'bestseller': 'boolean',
        'newproduct': 'boolean',
        'vol_weight': float,
        'gauge_id': 'null | integer',
        'currency_id': 'integer',
        'additional_isbn': 'string',
        'additional_kgo': string,
        'additional_bloz7': integer,
        'additional_bloz12': integer,
        'additional_producer': string,
        'related': [
            integer
        ],
        'options': [
            integer
        ],
        'main_image': null | {
            'gfx_id': integer,
            'order': integer,
            'name': string,
            'unic_name': string,
            'hidden': boolean
        },
        'stock': {
            'stock_id': integer,
            'product_id': integer,
            'extended': boolean,
            'price': float,
            'active': boolean,
            'default': boolean,
            'stock': float,
            'warn_level': null | float,
            'sold': float,
            'code': string,
            'ean': string,
            'weight': float,
            'weight_type': integer,
            'availability_id': integer,
            'delivery_id': integer,
            'gfx_id': null | integer,
            'package': float,
            'price_wholesale': float,
            'price_special': float,
            'calculation_unit_id': integer,
            'calculation_unit_ratio': float
        },
        'translations': {
            '(locale)': {
                'translation_id': integer,
                'product_id': integer,
                'name': string,
                'short_description': string,
                'description': string,
                'active': boolean,
                'isdefault': boolean,
                'lang_id': integer,
                'seo_title': string,
                'seo_description': string,
                'seo_keywords': string,
                'seo_url': string | null,
                'permalink': string,
                'order': integer,
                'main_page': boolean,
                'main_page_order': integer
            }
        },
        'attributes': {
            '(key)':
                {
                    '(key)': str
                }
        },
        'categories': [
            int
        ],
        'special_offer': {
            'promo_id': int,
            'date_from': str,
            'date_to': str,
            'discount': float,
            'discount_wholesale': float,
            'discount_special': float
        },
        'unit_price_calculation': boolean,
        'children': {
            'id': int,
            'bundle_id': int,
            'stock_id': int,
            'product_id': int,
            'stock': float,
            'order': int
        },
        'feeds_exludes': [
            int
        ]
    }
    return product