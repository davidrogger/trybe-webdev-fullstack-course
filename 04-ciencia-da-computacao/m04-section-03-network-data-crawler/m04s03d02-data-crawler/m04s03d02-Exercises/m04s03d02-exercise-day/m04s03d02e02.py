# Exercício 2: Faça uma requisição ao recurso usuários da
# API do Github (https://api.github.com/users), exibindo o
# username e url de todos os usuários retornados.

# Exemplo:
# mojombo https://api.github.com/users/mojombo
# defunkt https://api.github.com/users/defunkt
# pjhyett https://api.github.com/users/pjhyett
# wycats https://api.github.com/users/wycats
# ...

# import json
import requests

RESPONSE = requests.get("https://api.github.com/users")
# USERS = json.loads(RESPONSE.text)
USERS = RESPONSE.json()

for user in USERS:
    print(user["login"], user["url"])
