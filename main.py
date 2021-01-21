
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
    main()