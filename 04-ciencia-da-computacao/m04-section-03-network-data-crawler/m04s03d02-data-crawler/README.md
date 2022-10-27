# O que é raspagem de dados?

É uma técnica computacional para extrair dados provenientes de um serviço ou aplicação, estruturando-os em bancos de dados, planilha ou outros formatos. Essa técnica consiste em extrair dados de sites e transportá-los para um formato mais simples e maleável para que possam ser analisados e cruzados com mais facilidade.

Passo aplicados nessa técnica:

- Realização de requisições
- Análise das respostas
- Estração dos dados
- Navegação do conteúdo
- Limpeza
- Armazenamento dos dados

# Requisições web


A comunicação com servidores HTTP e HTTPS se dá através de requisições, nas quais utilizamos o verbo para indicar que tipo de ação deve ser tomada para um dado recurso.
Devemos informar na requisição em qual recurso estamos atuando e no cabeçalho passamos algumas informações que podem ser importantes, como o tipo de resposta aceita ou o tipo de conteúdo sendo enviado.

O Python possui um pacote para lidar com o protocolo HTTP o `urllib`, porém seu uso é mais verboso, por isso será usado o `requests`, que possui uma interface mais amigável e é bem difundida na comunidade.

Ferramenta usada: `python3 -m pip install requests`

```
import requests


# Requisição do tipo GET
response = requests.get("https://www.betrybe.com/")
print(response.status_code)  # código de status
print(response.headers["Content-Type"])  # conteúdo no formato html

# Conteúdo recebido da requisição
print(response.text)

# Bytes recebidos como resposta
print(response.content)

# Requisição do tipo post
response = requests.post("http://httpbin.org/post", data="some content")
print(response.text)

# Requisição enviando cabeçalho (header)
response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
print(response.text)

# Requisição a recurso binário
response = requests.get("http://httpbin.org/image/png")
print(response.content)

# Recurso JSON
response = requests.get("http://httpbin.org/get")
# Equivalente ao json.loads(response.content)
print(response.json())

# Podemos também pedir que a resposta lance uma exceção caso o status não seja OK
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()
```

# Rate Limit

Para evitarmos ataques de negação de serviço, quando estivermos raspando conteúdo, uma boa prática é sempre fazermos uma pausa entre as requisições, ou lote delas, mesmo que o website onde a informação está não faça o bloqueio. Assim evitamos tirar o site do ar.

```
import requests
import time


# Coloca uma pausa de 6 segundos a cada requisição
# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response)
    time.sleep(6)
```
