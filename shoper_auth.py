# tagi produktów - https://developers.shoper.pl/developers/api/resources/news-tags
# kategorie - https://developers.shoper.pl/developers/api/resources/categories
# produkty - https://developers.shoper.pl/developers/api/resources/products
# zdjęcia - ?

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


def login_to_session(shop_url, client_id, client_secret):
    session = requests.Session()
    my_obj = {
        'client_id': client_id,
        'client_secret': client_secret,
    }
    response = session.post(url=shop_url + '/webapi/rest/auth', data=my_obj)
    # print(response.status_code)
    result = response.json()
    # print(response.text)
    token = result['access_token']
    session.headers.update({'Authorization': 'Bearer %s' % token})

    return session


