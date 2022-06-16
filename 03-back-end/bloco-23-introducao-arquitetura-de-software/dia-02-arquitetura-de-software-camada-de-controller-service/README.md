anotações pessoais do dia...

# Camadas de controller e Service

## Camada dos controllers

A camada dos controllers é a primeira em uma API. É por meio dela que os dados da requisição do cliente serão recebidos e tratados, para depois serem passados para as próximas camadas.

O controller recebe as requisições feitas à API e então consulta o service, enviando na resposta aquilo que o service deve ternar: uma mensagem de erro ou as informações pedidas. Ao comunicar-se com o service, o controller não deve passar toda a request, ou seja, as informações devem ser extraídas e apenas  o que for necessário para determinada ação deve ser transferido.

