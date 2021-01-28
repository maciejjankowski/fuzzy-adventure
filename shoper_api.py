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


def login_to_session(shop_url, client_id, client_secret):
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


def get_shoper_session():
    session = login_to_session(
            shop_url=shop_url,
            client_id=client_id,
            client_secret=client_secret
        )

    return session


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


MAX_RETRIES = 5


def request(data, url):
    retry_request = MAX_RETRIES
    response = None
    while retry_request >= 0:
        try:
            response = session.post(
                url,
                data=json.dumps(end_cat)
            )
            if response.status_code == 401:
                raise LoginException
            if response.status_code == 400:
                raise GenericApiException(response.status_code, response.text)
            try:
                response_json = json.loads(response.text)
                if response_json["error"] == 'temporarily_unavailable':
                    raise ThrottlingException

            except:
                print("nope")

            return response.text

        except GenericApiException:
            print("Generic API Error", response.status_code, response.text)
            print("url", url, "data:", data)
            raise GenericApiException(response.status_code, response.text)

        except LoginException:
            get_shoper_session()
            print("login expired, logging again")
            retry_request -= 1

        except ThrottlingException:
            sleep(1 * (MAX_RETRIES - retry_request + 1))
            retry_request -= 1

    new_id = response.text



def create_category_api(data):
    url = shop_url + '/webapi/rest/categories'
    try:
        new_id = request(data, url)
        return new_id
    except GenericApiException:
        print("creating category failed")
        raise AddingRecordFailedException


urs_err = 0


def create_product_api(data):
    """
    :param data:
    :return: new_id: str
    :raises GenericApiException:
    """
    global urs_err
    url = ""
    urs_err = 0
    if type(parent_id) is not int:
        parent_id = 0

    try:
        new_id = request(data, url)
        print("creating product:", old_id, name, parent_id, "\n")
        return new_id
    except GenericApiException():
        print("creating product failed")




try:
    from local_settings import *
except ImportError:
    print("Please create local file 'local_settings.py'\n")