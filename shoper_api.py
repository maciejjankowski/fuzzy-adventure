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

from shoper_dicts import create_image_data

try:
    from local_settings import *
except ImportError:
    print("Please create local file 'local_settings.py'\n")


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
    try:
        result = response.json()
    except:
        print('response', response.text)
        raise LoginException('error logging')
    print(result)
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
    def __init__(self, status_code=-1, body="API Error"):
        self.status_code = status_code
        self.body = body
        super().__init__(self.body)

    def __str__(self):
        return f'{self.status_code} -> {self.body}'


class AddingRecordFailedException(Exception):
    pass


def request(data, url, session, method='POST', record_id=None):
    """
    :param method: POST or GET
    :param session: shoper api session
    :param data: wat we want send to endpoint
    :param url: url for endpoint is shoper api
    :param record_id: id used for updating record
    :return:  new_id - ID of the new item in the shoper database
    """
    retry_request = MAX_RETRIES
    response = None
    while retry_request >= 0:
        try:
            if method == "POST":
                response = session.post(
                    url,
                    data=json.dumps(data)
                )
            elif method == "GET":
                response = session.get(
                    url,
                    params=data
                )
            elif record_id is not None:
                response = session.put(
                    url + "/" + record_id,
                    params=data
                )
            else:
                raise GenericApiException

            if response.status_code == 401:
                raise LoginException
            if response.status_code == 400:
                raise GenericApiException(response.status_code, response.text)
            if response.status_code == 429:
                # if response_json.get("error") == 'temporarily_unavailable':
                raise ThrottlingException

            if response.status_code == 200:
                try:
                    if response.text[0] == '[' or response.text[0] == '{':
                        response_json = json.loads(response.text)
                        if response_json.get("error") == 'temporarily_unavailable':
                            print("to nie powinno działać")
                            raise ThrottlingException
                        return response_json
                    else:
                        return response.text

                except ValueError:
                    print("nope")

            return response_json  # todo nie ma takiej zmiennej w tej funkcji ->112

        except GenericApiException:
            print("Generic API Error", response.status_code, response.text)
            print("\nurl", url, "data:", data)
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

    # retry_request = MAX_RETRIES
    # response = None
    # while retry_request >= 0:
    #     try:
    #         response = session.get(
    #             url,
    #             params=json.dumps(data)
    #         )
    #
    #         if response.status_code == 401:
    #             raise LoginException
    #         if response.status_code == 400:
    #             raise GenericApiException(response.status_code, response.text)
    #         try:
    #             response_json = json.loads(response.text)
    #             if response_json["error"] == 'temporarily_unavailable':
    #                 raise ThrottlingException
    #
    #         except ValueError:  
    #             print("nope")
    #
    #         return response.text
    #
    #     except GenericApiException:
    #         print("Generic API Error", response.status_code, response.text)
    #         print("\nurl", url, "data:", data)
    #         raise GenericApiException(response.status_code, response.text)
    #
    #     except LoginException:
    #         login_to_session()
    #         print("login expired, logging again")
    #         retry_request -= 1
    #
    #     except ThrottlingException:
    #         sleep(1 * (MAX_RETRIES - retry_request + 1))
    #         retry_request -= 1
    #
    # new_id = response.text
    # return new_id


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


def create_product_api(data, session, record_id=None):
    """
    :param session: shoper api session
    :param data: dict
    :param record_id
    :return: new_id: ID of the new product in the shoper database
    :raises GenericApiException:
    """
    global urs_err
    url = shop_url + '/webapi/rest/products'
    urs_err = 0
    if type(data['parent_id']) is not int:
        data['parent_id'] = 0

    try:
        new_id = request(data, url, session=session, record_id=record_id)
        print("creating product:", data["name"], "\n")
        return new_id
    except GenericApiException():
        print("creating product failed")


def find_product_api(data, session):
    """
    :param session: shoper api session
    :param data: dict
    :return: new_id: ID of the new product in the shoper database
    :raises GenericApiException:
    """
    url = shop_url + '/webapi/rest/products'

    try:
        products = request(data, url, session=session, method="GET")
        # print("finding product:", data["name"], "\n")
        return products
    except GenericApiException as exception:
        print("finding products failed", exception)
        raise exception



if __name__ == '__main__':
    session = login_to_session()
    image_url = 'https://cdn.eso.org/images/screen/eso1907a.jpg'
    data = create_image_data(30, 'name', image_url)
    print(data)
    # url = 'https://shop.url/webapi/rest/product-images'
    # request(data, url, session)
    # print(data)
    # print('hello')