import requests

url = "https://sklep004948.shoparena.pl/webapi/rest/auth"
pwd = ''
user = 'admin'

payload = {'client_id': user, 'client_secret': pwd}

r = requests.post(url, data=payload)

print(r.text)
