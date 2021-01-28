from shoper_auth import login_to_session


def get_shoper_session():
    session = login_to_session(
            shop_url=shop_url,
            client_id=client_id,
            client_secret=client_secret
        )

    return session


try:
    from local_settings import *
except ImportError:
    print("Please create local file 'local_settings.py'\n")