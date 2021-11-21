anotações do bloco 2.3
## Como Funciona a internet

A internet conecta bilhões de dispositivos e teve inicio no anos de 1969 nos estados unidos e se chama ARPAnet com o objetivo de interligar labolatórios de pesquisa durante a guerra fria.
Em 1982 a ARPAnet começou a ser usada em vários paises e começou a ser chama de internet.
E em 1987 foi liberado seu uso comercial nos estados unidos.
Em 1992 começaram a aparecer diversas empresas provedoras de internet então o CERN inventou a World Wide Web, que foi usado para colocar informações ao alcance de qualquer usuário da internet.

#### Toda estrutura é divida entre;

##### Software

Eles são responsaveis por gerenciar os dados e garantir que eles cheguem de forma segura.

##### Hardware

Gerenciam o envio e recebimento das informações e fazem as ligações físicas entre o equipamento, atrás de cabos de fibra óptica e sinais de satélite interligando o mundo todo.

Pra que isso funcione, é necessário transformar essa informação em um sinal gerenciavel.
Em nossas casas o responsavel por isso é nosso modem (modulador), ja o roteador cria rotas e distribui a conexão e garante que os dados cheguem em seus destinos.
Exemplo:
Para enviar uma mensagem do meu celular para alguém, ao eu enviar essa mensagem, ela é enviada para o servidor onde é hospedado o servidor que eu usei para enviar a mensagem, para então ele ir para a pessoa que eu enviei
Para que essa comunicação seja realizada cada dispositivo possui um IP, que seria a forma como ele se identifica para saber qual é a origem e qual é o destino de terminada ação.
E para facilitação de memorização de determinados endereço, pois seria bem confuso usarmos os números para acessarmos algo, foi criado o DNS, que é um servidor de tabela de nomes, onde ele possui uma listagem que referencia determinado IP para um determinado nome, seria como uma mascara/apelido para ele ficar mais fácil de memórizar, pois é muito mais fácil lembrar de digitar, amazon.com do que digitar 72.21.211.176 ou pior ainda com IPv6 ... e por ai vai...

##### Conceitos básicos

##### Protocolo

É um conjunto de regras que permite a comunicação entre todas as máquinas conectadas à internet.

##### Cliente

Conhecido como navegador ou browser ele é o principal responsavel pela navegação pelo internet, famosa surfada, ele tem a função de receber a interação do usuário e traduzi-la em uma requisição para outro computador chamado servidor Web.


##### Servidor

o Servidor é responsavel por hospedar conteudo, para pessoas acessarem ela, seja uma página da internet, aplicação um jogo.

##### Endereço IP

A Sigla, refere-se a Internet protocol, é um protocolo de identidade na internet, como se fosse um RG ou CPF, para saber quem é você e de onde você vem na internet, todo dispositivo em uma rede precisa ter um IP para conseguir se comunicar.

##### TCP/IP

Sigla refe-se à Transmission Control Protocol/Internet protocol. É um protocolo de transmissão de dados na rede. Base de envio e recebimento de dados de toda internet.

##### ISP

Internet Service Provider é o seu provador de internet (NET, VIVO, etc), é a empresa que fornece acesso a internet.

##### DNS

Domain Name System é responsavel por gerencia os nomes de serviços, de forma que fique mais fácil nossa navegação, usando apelidos ou mascaras ao invés de um IP.

##### Port Number

Port number é uma forma de identificar um processo especifico encaminhado para um servidor.

##### Host

É qualquer disposivito conectado a rede, cada host tem um IP.

##### HTTP

Hyper-text Transfer protocol é o mais usado para comunicação entre navegadores e servidores na internet.

##### URL

Uniform Resource Locators, é a localização/endereço de um determinado caminho para acessar um determinado conteudo.

### Esrutura de uma aplicação web

O cliente(navegador) é responsável por interagir com o usuário, e uma aplicação web o cliente é responsável por definir a estrutura, que é composta por 3 linguagens:

##### HTML

Hyper-text markup language, é a forma abstrata que padroniza a comunicação entre os hosts, responsavel pela parte de conteudo, como textos, imagens, e links.

##### CSS

Cascate Style Sheets, responsavel pela aparencia de todo texto e suas formatações.

##### JS

JavaScript, é a linguagem de programação, responsavel pela interação, açao/reação do usuário com página, como cliques, envio de dados, oferencendo um comportamento dinâmico.

##### Banco de Dados

É a aplicação responsavel por armazenar toda a informação, de forma acessivel e gerenciavel com constantes atualizações.

#### Escalonamento de aplicação web

Para melhor desempenho durante um acesso web com grande volume de dados é necessário dsitribuir o tráfego de informação, entre servidores no backend e o responsavel por gerencia esse trânsito é o Blanceador de carga.
É um termo generico para um séries de algotimos que distrubuem as requisições para o servidor, para evitarmos algum tipo de gargalo. sistema bem populares são o Round Robin e Least Connections.
Balanceador resolve o problema de tráfego mas ainda assim conforme a aplicação cresce e adicionamos mais funcionalidades ele ainda pode sobrecarrega-lo, para resolver esse problema é necessário separar o servidor por funciondades usando atrás dos serviços.

#### Serviço

Serviço é apenas outro servidor capaz de integir com servidores, diferente do servidor Web, que interage apenas com o cliente. Cada serviço tem uma funcionalidade, como autenticação de usuário ou busca. Sendo possivel quebrar um servidor web em multiplocas serviços, cada um com uma funcionalidade especifica. Uma vantagem grande dos serviçoes é que você pode escoloná-lo de forma independente, fazendo os times das empresas trabalhar de forma mais independente também, facilitando na gestão de projto.

#### CDN

Mesmo fazendo toda essa escalonagem, fazendo serviços mais independente, ainda assim fazem o servidor ser centralizado, em um lugar unico, fazendo um usuário da china levar mais tempo para acessar uma aplicação que se encontra no estados unidos, por isso é usado o CDN Content Delivery Network, é um sistema de distribuição de servidores, fazendo pessoas de diversas localidades acessar a aplicação com um tempo de resposta menor, um exemplo citado no curso é a empresa Akamai que possui diversas sedes espalhadas em pontos estratégicos no mundo para garantir uma melhor experiencia ao usuário.

## Aprofundamento no HTTP

Como grande volume de dados envilvidos na operação de comunicação entre servidor em cliente, é aderido uma linguagem comum, com regras que alinham as epectativas de ambas partes, essa linguagem é o HTTP.
Cada requisição e resposta trocada entre Cliente e servidor é uma única transção HTTP. Pelo HTTP ser uma linguagem de texto, suas mensagens são quantificadas em bits, cada mensagem é dividida em duas partes: o header e o body.
É importante ter em mente que o HTTP por si só não consegue transmitir dados, ele ainda depende do TCP/IP para pegar as requisições e resposta entre duas máquinas.
O HTTP por si é vulnerável a vários tipos de ataques, mas aderindo um mecânismo de segurança chamado SSL, para a se chamar HTTPS, adicionando segurança no conteudo, sendo encriptado.

##### HTTP Headers

Protocolo HTTP é composto por Header e Body.
O header contem a informação metadata(os dados sobre os dados), que incluem o tipo de requisição(GET, POST, PUT, DELETE), o caminho URL, o endereço IP, algumas dessas informaçoes, são do content-type, que mostra como os dados são representados, como HTML, server, status, host, cookie, e algumas outras informações.

##### HTTP Body

Contem todo o corpo da mensagem, que está sendo transmitida, basicamente todo conteudo como textos e links, ficam na parte do corpo.

##### Métodos HTTP

Os métodos HTTP são os verbos que dizem ao servidor o que fazer com os dados.

#### GET

Tem a função apenas de leitura. Operação segura e idempotente. requisições GET são respondidas com status 200(OK) se com sucesso e 404 (NOT FOUND) se a página não for encontrada.

#### POST

Tem a função de criar novos recursos. Não é seguro, e nem idempotente, pois retorna resultados diferentes. Requisiçoes POST são retornadascom status code 201 (CREATED).

#### PUT

Tem a função de atualizar recursos e também pode ser usada para criar novos recursos, suas requisições não são consideradas seguras porém é idempotente, pois suas multiplas requisições têm o mesmo efeito que uma única requisição.

#### DELETE

É utilizado para deltar um recurso, é considerado idempotente, pois quando deletamo um recurso ele será deletado, você pode fazer milhares de requisições no fim o resultado será o mesmo, do recurso deletado.

# Dinâmica do dia 2.3

#### Descrever o que ocorre quando alguém digita no navegador um site, como o google.com

Dinâmica em grupo Trybe tribo B, Sala 4, grupo 4EVER:

![Fluxo-internet](https://github.com/davidrogger/trybe-exercicios/blob/day-2.3/01-fundamentos/bloco-02-git-github-e-internet/day-2.3/fluxo_4ever.png?raw=true)

Ao usuário digitar o endereço google.com, esse endereço deve ser identificado por meio do DNS, qual o IP é representado pelo nome google.com ao indentifica-lo, toda informação é anexada ao pacote gerado por essa requisição, que segue todo percurso até encontrar o destinatário, passando pelo load lanacer caso o servidor destino tenha o tenha, responsavel por criar mais fluidez em caso de um grande fluxo de pacotes solicitando um mesmo conteudo, ao localizar o conteúdo endereçado para aquele IP, o servidor cria uma cópia do conteúdo, ele quebra esse conteúdo em diversos pacotes, e direciona para o rementente solicitante, gerando na tela o conteúdo solicitado.
E com isso encerramos o bloco 2.