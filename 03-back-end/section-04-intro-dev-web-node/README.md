anotações pessoais do bloco...

#


# O que é o Node.js

Surgiu do V8, que é um ferramenta do Google Chrome responsável por ler e executar as instruções JavaScript, processo comumente chamado de interpretar o código. O software responsável por interpretar o código é chamado de interpretador, engine e, por vezes, de runtime. Por isso, é comum dizer que o Node.js é um runtime JavaScript.

# Por que usar o Node.js

Com coletas de dados, ele é o repositório com mais pacotes quando comparado a repositórios de outras grandes linguagens.
Ter muitos pacotes publicados no repositório atual, dá a ideia de duas grandes vantagens que o Node.js tem sobre tecnologicas concorrentes de uma comunidade extremamente ativa e uma grande quantidade de ferramentas para resolver os mais diversos tipos de problemas.

# Performance

Comparando com outras grandes tecnologias o Node.js nos permite escrever softwares servidores de requisições HTTP de forma muito mais eficiente. Por ter uma forma mais livre de realizar a leitura e escrita tanto de disco quanto rede. Devido que ao servidor receber uma requisição, ele não precisa esperar que a primeira termine para que as demais possam ser atentidas, o node.js realiza todas as suas operações de entrada e saída de dados de forma assíncrona, utilizando processamento concorrente.

# Aplicações em tempo real

Permite que alguns recursos sejam implementados na plataforma para facilitar o trabalho com operações em tempo real.
Bibliotecas como [socket.io](https://socket.io/) permitem que, com poucas linhas de código, aplicações em tempo real relativamente complexas sejam criadas por completo.
Em um mundo em que a técnologica está cada vez mais inserida em diversas áreas, ter suporte nativo da plataforma que tuilizamos para aplicações em tempo real com certeza é muito bem0vindo e nisso node.js oferece uma grande vantagem.

# Node.js Javascript

Muitas das vantagens do Node.js vêm do fato de que a linuagem executada por ele é o JavaScript.
Por ser uma linageum extramente versátil, estando presente em diversos ambientes, sua versatilidade e baixa curva de aprendizado conferem ao Node um poder incrível para resolver as mais diversas situações.

# Node Melhor técnologia para tudo?

Não existe solução para todos os problemas, quando o assunto é tecnologia. A melhor ferramenta sempre depende do caso de uso e dos recursos disponíveis para desempenhar uma determinada tarefa.

# Sistema de módulos

Um módulo é um "pedaço de código" que pode ser organizado em um ou mais arquivos, e que possui escopo próprio, ou seja, suas variáveis, funções classes e afins só estão disponíveis nos arquivos que fazem parte daquele módulo.
Resumidamente é é uma funcionalidade, ou um conjunto delas, que se encontram isoladas do restante do código, o node.js possui três tipos de módulos: internos, locais e de terceiros.

## Módulos internos

Os módulos internos (ou core modules) são inclusos no Node.js e instalados junto com ele quando baixamos o runtime. Alguns exemplos de core modules são:

- [fs](https://nodejs.org/api/fs.html): Fornece uma API para interagir com o sistema de arquivos de forma geral;
- [url](https://nodejs.org/api/url.html): Provê utilitários para ler e manipular URLs;
- [querystring](https://nodejs.org/api/querystring.html): disponibiliza ferramentas para leitura e manipulação de parâmetros de URLs;
- [util](https://nodejs.org/api/util.html): oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.
- [os](https://nodejs.org/api/os.html): Oferece ferramentas e funcionalidades relacionadas ao sistema operacional.

## Módulos locais

São definidos juntamente à aplicação. Representam funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes. Eles podem ser publicados no NPM para que outras pessoas possam baixá-los e utilizá-los.

## Módulos de terceiros

São aqueles ciados por outras pessoas e disponibilizados para uso atráves do npm. Conforme mencionado, nós também podemos criar e publicar nossos próprios móduols, seja para utilizarmos em diversas aplicações diferentes, seja para permitir que outras pessoas os utilizem.

# Maneiras de importar e exportar módulos

Quando queremos utilizar o conteúdo de um módulo ou pacote de outro arquivo no Node.js, precisamos importar esse módulo/pacote para o contexto atual no qual estamos.
Existem dois sistemas de módulos difundidos na comunidade Javascript
- Módulos ES6;
- Módulos CommonJS

# ES6

O nome ES6 vem de ECMAScript 6, que é a especificação seguida pelo JavaScript.
Na especificação do ES6, os módulos são importandos utilizando a palavra-chave import, tendo como contrapartida a palavra-chave export para exportá-los.
O node.js não possui suporte a módulos ES6 por padrão, sendo necessário o uso de transpiladores para que esse recurso esteja disponível, como o Babel, ou supersets da linguagem, como o TypeScript.

- Transpiladores são ferramentas que leem o código-fonte escrito em uma linageum como o Node.js e produzem o código equivalente em outra linagem.
- Supersets são linguagens que tuilizam um transpilador para adicionar novas funcionlidades ao JavaScript.

# CommonJS

É o sistema de módulos implementados pelo Node.js nativamente.

# Exportando módulos

Para exportar no CommoJS é usado a seguinte sintaxe;
```
const brl = 5.37

module.exports = brl;
```

# Imprortando módulos

## Módulos locais

Quando queremos importar um módulo local, precisamos passar para o require o caminho do módulo, seguindo a mesma assinatura. Por exemplo, require('./meuModulo'), não é necessária usar a extensão js, por padrão pois ele ja procura por extensões js e json.
Além de importamos um arquivo como módulo, podemos importar uma pasta. Isso é útil, pois muitas vezes um módulo está dividido em vários arquivos, mas desejamos importar todas as suas funcionlidades de uma vez só. Nesse caso, a psta precisa conter um arquivo chamado index.js, que importa cada um dos arquivos do módulo e os exporta da forma mais conveniente.

Exemplo:
```
// meuModulo/funcionalidade-1.js

module.exports = function () {
  console.log('funcionalidade1');
}
```
```
// meuModulo/funcionalidade-2.js

module.exports = function () {
  console.log('funcionalidade2');
}
```
```
// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };
```

Quando importamos o módulo meuModulo, teremos um objeto contendo duas propriedades, que são as funcionalidades que exportamos dentro de meuModulo/index.js

Para importarmos e utilizarmos o módulo meuModulo, basta passar o caminho da pasta como argumento para a função require;
```
// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();
```

# Módulos internos

Para utilizarmos um módulo interno, devemos passar onome do pacote como parâmetro para função require. Por exmeplo, require('fs') importa o pacote fs, responsável pelo sistema de arquivos.
Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável da seguinte forma:
```
const fs = requires('fs'):

fs.readFileSync('/.meuArquivo.txt'):
```

# Módulos de terceiros

São importados da mesma forma que o módulos internos: passando seu nome como parâmetro para a função require. A diferença é que, como esses módulos não são nativos do Node.js, precisamos primeiro instalá-los na pasta do projeto em que queremos utilizá-los.
O registro oficial do Node.js, em que milhares de pacotes estão disponíveis para serem instalados, é o npm. Além disso, npm também é o ome da ferramenta de linha de comando (CLI, command line interface) responsável por baixar e instalar esses pacotes. O CLI npm é instalado juntamente com o Node.js.
Quando importamos um módulo que não é nativo do Node.js e que não aponta para um arquivo local, o Node inicia uma busca por esse módulo. Essa busca acontece na pasta node_modules. Caso o módulo não seja encontrado na node_modules mais proxima do arquivo que o chamou, o Node procura por uma pasta node_modules na pasta que contém a pasta atual. Caso encontrado, o módulo é carregado. Caso contrário, o processo é repetido em um nível de pasta acima. Isso acontece até que o módulo seja encontrado ou até que uma pasta node_modules não exista no local em que o Node está procurando.

# NPM

Node package manager é o repositório oficial para publicação de pacotes Node.js. É para ele que realizamos upload dos arquivos de nosso pacote quando queremos disponibilizá-lo para uso de outras pessoas ou em diversos projetos.
Atualmente, uma média de 659 pacotes são publicados no NPM todos os dias, segundo o site [modulesCounts](http://www.modulecounts.com/).
Um pacote é um conjunto de arquivos que exportam um ou mais módulos Node. Nem todo pacote Node é uma biblioteca, visto que uma API desenvolvida em Node também tem um pacote.

# Utilizando o CLI npm

É uma ferramenta oficial que nos auxilia no gerenciamento de pacotes, sejam eles dependências da nossa aplicação ou nossos próprios pacotes. É através dele que criamos um projeto, instalamos e removemos pacotes, publicamos e gerenciamos versões dos nosso próprios pacotes. Publicar um pacote público no npm é gratuito e não há um limite de pacotes que se pode publicar. No entanto, existem taxas de assinaturas caso desejemos hospedar pacotes de forma privada, ou seja, pacotes sob os quais só nós temos o controle de acesso.

[Comandos NPM](https://github.com/tryber/Trybe-CheatSheets/blob/master/backend/nodejs/npm/README.md)

## NPM INIT

Permite criar de forma rápida e simplificada um novo pacote Node.js na pasta onde é executado.
Ao executar o comando `npm init` é solicitada algumas informações para realizar a criação da configuração do package.json, para criação do arquivo com consigurações padrões é usado p `npm init -y`.

## NPM RUN

O comando run faz com que o npm execute um determinado script configurado no package.json. Scripts são "atalhos" que podemos definir para executar determinadas tarefas relacionadas ao pacote atual.
Para criar um script, precisamos alterar o package.json e adicionar uma nova chave ao objeto scripts. O valor dessa chave deve ser o comando que desejamos que seja executado quando chamarmos aquele script.
Um exemplo o script chamado lint, que executa a ferramenta do linter:
```
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Para executa-lo é usado o comando `npm run lint`, podem ser criados quantos scripts forem necessários, para realizar tarefas até mesmo scripst que chamam outros scripts criando assim "pipelines" issto é muito útil, quando trabalhamos com supersets do JavaScript como o TypeScript, ou transpiladores como o Babel, pois ambos exigem que executemos comandos adicionais antes de iniciar nossos pacotes.

## NPM START

Age como um atalho para o comando npm run start, um vez que sua função é executar o script start definido no package.json.
Como conveção, todo pacote que pode ser executado pelo terminal (como CLIs, APIs e afins) deve ter um script start como o comando necessário para executar a aplicação principal daquele pacote.

Por exemplo, se tivermos um pacote que calcula o IMC, de uma pessoal cujo código está no arquivo imc.js é comum criarmos o seguinte script:
```
{
  // ...
  "scripts": {
    "start": "node imc.js"
  }
  // ...
}
```

Dessa forma, qualquer pessoa que for utilizar seu script vai ter certeza de como inicializar, pois só vai precisar executar o `npm start`.

## NPM INSTALL

Responsável pro baixar e instalar pacotes Node.js do NPM para o nosso pacote. Vamos descobrir algumas formas de usá-lo:

- npm install <nome do pacote>: baixa o pacote do registro do NPM e o adiciona ao objeto dependencies do package.json
- npm install -D <nome do pacote>: baixa o pacote do registro do NPM, porém o adiciona ao objeto devDependencies do pacoage.json, indicando que o pacote em questão não é necessário para executar a aplicação. Ele é necessário para desenvolvimento, ou seja, para alterar o código daquela aplicação. Isso é muito útil ao colocar a aplicação no ar, pois pacotes marcados como devDependencies podem ser ignorados, já que vamos apenas executar a aplicação, e não modificá-la.
- npm install: baixa e instala todos os pacotes listados no objetos de dependencies e devDependencies do package.json. Ele sempre deve ser executado ao clonar o repositório de um pacote para garantir que todas as dependências desse pacote estão instaladas.

#

# Callbacks

É um termo usado para funcionalidades que não bloqueam a execução do código enquanto outra atividade é executada. Quando precisamos que algo seja precessado em segundo plano, devemos registrar uma callback. Ela será executada quando a operação que solicitamos for concluída.

Exemplo:
```
const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
```

Realiza a leitura de um arquivo e após o término chama uma função de callback. Essa função recebe dois parâmetros.

1. Chamamos de **err**, é um erro que pode ter ocorrido durante a leitura do arquivo.
2. É o contéudo do arquivo, que está em forma de uma sequência de bytes, chamados de content.

Entendendo o código:

1. Pedimos que o Node.js leia o arquivo e passamos uma função callback;
2. Quando a leitura do arquivo é concluida ou um erro acontece, a função callback é chamada;
3. Dentro dela, a primeira coisa que fazemos é verificar se existe um erro. Caso exista, escrevemos ele no console e encerramos a execução com o return;

- Formatos de Callback que recebem dois parâmetros: erros e resultado, assim como vimos no exemplo acima, são chamados de node-style callbacks e são, por convenção, a melhor maneira de se estruturar uma calback.
Toda API de módulos nativos do Node.js utiliza esse mesmo formato de callbacks.

# Pontos negativos do uso de Callbacks

A principal desvantagem do uso das callbacks é que o resultado de uma operação só existirá dentro daquela callback, ou seja, se precisarmos executar um comando depois de outro teremos que colocar uma callback dentro de outro, aumentando o nível de indentiação, resultando na dificuldade de ler e fazer a manutenção no código.

# Promises

As promises foram introduzidas à especificação do JavaScript em 2015, como ferramenta de melhoramento da legibilidade do código, basicamente uma forma de resolver a bagunça que as callbacks causavam. Quando usamos Promises, ainda estamos utilizando um tipo de callback, mas que possui uma API mais legível e intuitiva.

Em JavaScript, as Promises funcionam do mesmo jeito que uma promessa na vida real, uma pessoal pede algo, e outra promete a realização, no cumprimento dela, ela é resolvida, ou caso aconteça algum impedimento a promessa pode ser rejeitada.

# [Status Code](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

- 100: Rseponsta de informação
- 200: Resposta de sucesso
- 300: Redirecionamento
- 400: Erro do cliente
- 500: Erro do servidor

# Envio de requisições

## Query String

Usando o método get por meio de query na rota:
```
/rota?variavel1=valor&variavel2=valor
```
## Params Route

Usando método get por parametros na rota:
```
/rota/:paremtro
```

## Body

Usando método post enviando um corpo seja json, texto ou demais tipos de cotneudo de corpos.\
Os dados são viados via corpo, por questões de segurança e também pelo tamanho de conteudo enviado, ser muito extenso para ser enviado via linha.\

#

# REST

Rest Representational State Transfer, tradução transferência de estado representacional, é um conjunto de boas práticas utilizada sdurante a construção de uma API. Ao usarmos REST estamos transferindo uma representação do estado de algum recurso.
É um estilo de arquitetura controlado pelo W3C, que define um conunto de restrições que podem ter seu estado representado de alguma forma. Ao consumir esses recursos, estamos transferindo as informações sobre esse estado para o cliente (um exemplo seria uma requisição GET) ou fazendo uma alteração nele (um POST, PUT ou DELETE).

Podemos definir recurso como abstração da informação, como Usuários, produtos, compras e etc...

Consumindo a API [SWAPI](https://swapi.dev/), podemos chamar um endpoint para listar todos os planetas ou apenas um. Nesse caso, se chamarmos, os planetas teremos uma coletação de recursos, se chamarmos apenas um teremos um recurso.

# RESTfull

É um serviço web que segue as regras definidas pelo REST.

# Restrições para ser RESTful

A arquitetura REST define SEIS restrições, chamadas constraints, que devem ser respeitadas para que sua API seja RESTful. Vamos entender detalhamente cada uma delas a seguir:

# 1 - Interface uniforme (Uniform Interface)

A interface de comunicação entre seu servidor e seu cliente deve ser definida e seguida à risca por meio de um padrão, para que assim ela se mantenha consistente. Quando respeitando essa constraint, ela simplifica ae desacopla a nossa arquitetura.
Essa interface inclui: endpoint, tipo de retorno e o uso dos verbos HTTP.

## Recursos e coleções

O recurso a ser acessado/alterado deve ser identificado pelo endpoint da requisição.

Exemplo: `https://swapi.dev/api/planets/:id`

Nessa URl o recuso que queremos acessar (planet) é facilmente identificado. Não importa se for plural ou singular a forma que é representada o importante é manter o padrão da restrição.

## Tipo de retorno

No header há o Content-type para dizer qual o tipo de conteudo estamos retornando.
Exemplo:
- Se estamos retornando um JSON, enviamos o header como Content-type: application/json.
- Se nosso retorno fosse HTML, seria Content-type text-html.

Formatos comuns de Content-type são: JSON, XML e JavaScript.
Em síntese, devemos manter nosso retornos consistentes.

- Se o cliente pede ou envia informações no formato JSON, devemos processar e retornar o mesmo formato JSON.
- Se um erro em um endpoint retorn os campos code, error e message, todos erros devem retornar, pelo menos, esses mesmos campos.
- Se, por exemplo, quando realizamos uma requisição GET /products, recebemos um array de produtos, ao realizar a requisição GET /sales, não devemos receber um JSON no formato { sales: [{...}] }, já que esse comportamento é inconsistente com o do endpoint GET /products.

Dessa forma, ao consumir um endpoint da sua API, é possível deduzir o comportamento dos demais endpoints, dispensando a ação de "tentativa e erro".

## Ações/Verbos

A ação que vamos realizar no recurso deve ser identificada pelo verbo HTTP da requisição. Para o REST, os principais verbos HTTP são: POST, GET, PUT e DELETE. Cada um realiza um ação específica, que depende do lugar que será enviado, neste caso ou para um endpoint de um recurso ou para um endpoint de uma coleção.

# Respostas

Nunca deixe seu cliente sem resposta. Elas são sempre obrigatórias, mesmo que não tenham uma estrutura satisfátoria.
Existem boas práticas em relação aos status code que nosso servidor envia como resposta. TEmos uma variedade de códigos que devem ser utilizados em situações específicas:

- 1xx: Informação;
- 2xx: Sucesso;
- 3xx: Redirecionamento;
- 4xx: Erro do cliente;
- 5xx: Erro no servidor;

[Lista completa e detalhada sobre os códigos de status HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)


# 2 - Arquitetura cliente-servidor

Não importa quem é nosso cliente: app mobile, web, tv, arduino, entre outros. Nossa API deve conseguir retornar dados para ele, isso é o que chamamos de arquitetura cliente-servidor.

Há uma separação de responsabilidades entre o cliente e o servidor. O cliente se preocupa com a exibição dos dados, experiências da pessoa usuária, etc. O servidor  se preocupa com o armazenamento e acesso dos dados, cache, log e etc.

Essa separação permite que as duas partes se desenvolvam de forma independente, ou seja, você pode trocar o cliente ou adicionar um novo sem mudar nada no servidor. Também pode mover o servidor para outra plataforma, escalá-lo ou até mesmo mudar completamente sua arqutetura interna, desde que a API que você fornece para seus clientes não mude(endpoint, resposta etc.).

# 3 - Sem estado (Stateless)

Esse é um dos conceitos mais importantes do REST, pois é ele que vai tonar possível nossa API responder a múltiplos clientes. Sem estado significa que toda requisição deve conter todas as informações necessárias (ser autossuficiente) para nossa API realizar uma ação. Dessa forma, não podemos reutilizar nenhum contexto que está armazenado no servidor (uma variável, por exemplo).

- Em um app no qual você faz uma requisição para se logar, o servidor inicia sua sessão e te retornar um token.
Na próxima requisição, você precisa enviar o token, novamente, pois o servidor "não se lembra" de você.

Ao criarmos componentes que não tenham estado, temos os seguintes beneficíos.

- Transparência: facilita o trabalho do servidor, pois todas as informações necessárias já estão na requisição;
- Escalabilidade: sem precisar manter estado, nosso servidor pode desalocar recursos que foram alocados para realizar uma ação específica e só voltar a útilizá-los quando necessário.

# - 4 Cacheable

Cache é definido como um "depósito de informações". Quando seu navegador armazena imagens e arquivos para não precisar pedi-los para o servidor toda vez que você revisitar uma página.
Esse cache é feito no lado do cliente, no browser. O princípio aqui é que as respostas dadas pela nossa API devem dizer, explicitamente, se podem ou não ser cacheadas e por quanto tempo. Evita-se que clientes forneçam respostas "velhas ou inapropriadas.
O cache deve ser usado equilibradamente, se usá-lo demais faz sua API perder a confiabilidade; mas, se usá-lo de menos pode sobrecarregar seu servidor desnecessariamente.
Uma camada de cache bem gerenciada pode reduzir ou elimitar iterações do lado do cliente, aumentando a escalabilidade e a performance da API.

No HTTP, o cache é definido pelo header cache-control: max-age=120. O cliente "cacheia" a resposta da requisição por 120 segundos. Durante esse tempo, o cliente fornecerá a resposta cacheada, sem precisar consultar o servidor.

# - 5 Sistema em camadas (layered system)

No caso do REST, essa divisão em camadas é sobre: abstrair do cliente as camadas necessárias para responder a uma requisição.
Para o cliente não importa se você tem uma "API A" que se comunica com a "API B" que se comunica com uma fila ou um arquivo em um "local C", ou até mesmo se sua API consulta um banco de dados local ou se está armazenado em outro lugar.
Em síntese, quem consome a API só precisa receber a resposta esperada e não de qual lugar ela vem.

# - 6 Código sob demanda (Code on demand)

Esse princípio consiste em dar a possibilidade ao nosso servidor de enviar código (JavaScript) ao nosso cliente, onde será executado. Assim, conseguimos customizar o comportamento do cliente.
Exemplo:
- Enviar um "widget" para colocar na página um chat no qual o cliente possa conversar com alguém.

Não é necessário implementar código sob demanda para ser RESTful, logo esse item é considerado opcional.

# REST no Express

De modo geral, os princípios devem ser seguidos independente da tecnologia que utilizamos na implmentação da nossa API. Ela pode ser escrita em Node.js, Python, Perl, entre outros.

Entretanto, uma das vantagens de se usar o Express para construção de APIs é a organização das rotas. Podemos definir N controllers (funções callback que lidam com as requisições) para a mesma rota, separando-as paneas pelo verbo HTTP da requisição.

Além disso, torna-se mais simples retornar um formato específico solicitado pelo cliente e retornar um status HTTP.

#


# API

Application Programing Interface, interface de programação de aplicação, é qualquer coisa que permita a comunicação, de forma programática com uma determinada aplicação.
São extremamente importantes nos dias de hoje, em que temos mútiplos clients se comunicando com o mesmo servidor.

# ENDPOINT

São como o proprio nome diz, o final do endereço que lidam com informações especificas, eles seguem recras;

A-dress vem do endereço de onde ele está hospetadada
B-inding como você vai poder acessar esse dado se é uma regra ou metodo.
C-ontract é algo que você pode ver dado a requisição que foi feita. Exemplo: se você está fazendo uma requisição de produtos, você irá ter acesso aos produtos.

AS API's seguem uma especificação podem ser Open API ou GRPC API.

# Segurança

Quando lidando com endpoint expostos é importante adesão de criptografia para os dados e certificação SSL(HTTPS) a certificação trás mais credibilidade para aplicação.

# Express

É um framework Node.js criado para facilitar a criação de APIs HTTP com Node. Ele foi construído pensando em um padrão de APIS chamado REST.
Existem outras ferrametnas semelhantes no mercado, mas ele é pergamente adotado pela comunidade hoje, e seu lançamento foi no final de 2010 deixando ele mais maduro para o uso, e ele é um framework sem opinião, isso significa que ele não impõe um padrão de desenvolvimento na hora de escrever sua aplicação.

Hoje ele faz parte do [Node.js Foundation](https://openjsf.org/) mostrando o quão relevante ele é para a comunidade.

# Criando uma aplicação com Express
```
mkdir hello-express
cd hello-express
npm init -y
```

instalando: `npm i express`

Criando um arquivo js na sequencia.

# Nodemon

Para facilitar o fluxo de desenvolvimento usamos o Nodemon, que reinicia a aplicação toda vez que editarmos e salvamos os nossos arquivos. Para utilizar esse pacote, vamos começar instalando ele.

`npm i nodemon -D`

Após instalar devemos adicionar o uso do node no script do package.json
```
//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
		"dev": "nodemon index.js"
//  },
// ...
```

Ele não deve ser utilizado para rodar a aplicação para o usuário final, por reiniciar toda hora que o arquivo sofre alguma alteração, deve-se usar como `node index.js`.

# Roteamento

O aspecto mais básico de uma API HTTP se dá através de suas rotas, também chamadas de endpoints. Uma rota ou endpoint é definida pelo método HTTP e caminho.

No express. uma rota é registrada utilizando a assinatura app.METODO(caminho, callback), onde a função de callback recebe três parâmetros: request, response e next.

- request: geralmetne chamado de req, contém as informações enviadas pelo cliente ao servidor;
- next: função que diz para o Express que aquela callback terminou de ser executada, e que ele deve prosseguir para executar a próxima callback para aquela rota. Este parâmetro é opcional.
```
const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('Hello World!');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
		// Requisições para rota GET `/` são resolvidas aqui!
    res.send('Hello World! Get');
  })
  .post(function (req, res) {
		// Requisições para rota POST `/` são resolvidas aqui!
    res.send('Hello World! post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

# Estruturando uma API

Ao invés de utilizar o método .send, vamos usar o json, ja que o send consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que será retornado, para deixar mais evidente o que vai ser devolvido é usado o .json.
```
const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', (req, res) => {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
```

Para uma aplicação back-end receber requisições de uma aplicação front-end, ou qualquer outra aplicação, é precisa instalar um módulo que libera o acesso da nossa API para outras aplicações. Para isso basta instalar um módulo chamado cors usando npm i cors e adicionar as seguintes linhas no seu arquivo index.js
```
// const express = require('express');
// const app = express();
const cors = require('cors');

app.use(cors());
```

# Parâmetros de rota

Caso precisemos acessar objetos específicos, o Express tem alguns recursos que vaibilizam passar informações para além da rota que você deseja buscar.
Páginas seguindo o mesmo template com informações diferentes são um exemplo de uso de parâmetro de rota, seguindo o padrão http://<site>/noticias/489 ou http://<site>/pedidos/713.
Para facilitar o processo é utilizado parâmetros de rota, que no express, podem ser definidos assim: </rota>/<:parametro> onde :parametro vai servir para qualquer valor que vier na URL com aquele prefixo.

No caso da API de receitas, pode-se montar uma rota que recebe o id como parâmetro:
```
// const express = require('express');
// const app = express();
//
// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];
//
// app.get('/recipes', function (req, res) {
// 	res.json(recipes);
// });

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });
```

No código acima, o que fizemos foi adicionar uma rota /recipes/:id
Qualquer rota que chegar nesse formato, independentemente do id ser um número ou string, vai cair na segunda rota (ao invés de cair na rota /recipes definida no tópico anterior).
Para cessar o valor do parâmetro evniado na URL é feita a desestruturação do atributo id do objeto req.params. Note que o objeto req traz informações a respeito da requisição. É importante que o nome do parâmetro noemado na rota seja igual ao atributo que você está desestruturando. Por exemplo, se na definição da rota estivesse escrito /recipes/:nome teríamos que usar const { nome } = req.params.

# Query String

É usado em funcionalidades de pesquisa, quando se utiliza além da barra de pesquisa, filtros avançados para definir o preço máximo, marca e outras classificações em e-commerces.
```
// ...

app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});


// app.get('/recipes/:id', function (req, res) {
// 	const { id } = req.params;
// 	const recipe = recipes.find((r) => r.id === Number(id));
//  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
//
//  res.status(200).send(recipe);
// });

// ...
```

A rota ficou apenas com o prefixo /recipes/search, já que os parâmetros enviados via query string não dependem desse prefixo e sim das informações que vem após o uso da ? na URL. é importante entender que é possível colocar na URL quantos parâmetros forem necessários, desde que eles sigam o formato <chave>=valor e que entre cada parâmetro exista o & para definir que ali está sendo passado um novo parâmetro.

Quando houver rotas com um mesmo radical e uma dela tuilizar parâmetro de rota, as rotas mais específicas sempre devem ser definidas antes. Isso por que ao resolver uma rota, o Express verifica rota por rota qual corresponde à URL que chegou. Se a rota for /recipessearch depois da rota /recipes/:id, o Express vai entender a palavra search como um id e vai chamar a callback da rota /recipes/:id.

Agora dicionando a possibilidade de filtro pelo preço:
```
// ...

app.get('/recipes/search', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
	res.status(200).json(filteredRecipes);
})

// ...
```

Não foi preciso alterar a definição da rota, apenas foi feita uma alteração no código da callback para desestruturar também o atributo maxPrice do objeto req.query. Além disso, foi adicionado uma condição na chamada da função filter para filtrar os objetos pelo nome e pelo valor do atributo maxPrice enviado na requisição.

# Recebendo dados no body da requisição

Como visto é possível receber dados da URL via query string, porém em casos de dados sensíveis como uma senha ou número de algum documento importante, enviado via URL qualquer pessoa que conseguir espiar o tráfego da rede entre o cliente o servidor vai ter acesso a essa informação. Uma forma que o protocolo HTTP encontrou para resolver isso foi criando o tráfego atraves do corpo da requisição, onde o que acontece é uma compressão dos dados enviados que só serão descomprimidos do lado do back-end. Além de não deixar as informações trafegadas tão exposta, isso deixa a requisição um pouco mais rápida, ja que ocorre um processo de serialização dos dados enviados. Porém para enviar dados no body da requisição, geralmetne você precisa usar algum tipo especifico de requisição, como o verbo HTTP POST.

Para isso é necessário instalar o pacote bodyParse. Para conseguir remontar os dados enviados precisamos parsear as informações para um formato compreensível para o back-end, esse formato é o JSON.
```
npm i body-parser
```

No express, é possível ter rotas com o mesmo caminho desde que o método (ou verbo) HTTP utilizado seja diferente, na outra rota foi definido o que acontece para o método GET.

Por padrão as requisições são feitas no navegador ou no fetch como GET, para modificar o fetch seria necessario um segundo parâmetro de um objeto passando as configurações de method, headers, body.

Exemplo:
```
fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});
```

- method: Método HTTP utilizado. Existem 4 que são mais utilizados (GET, POST, PUT e DELETE);

- headers: Define algumas informações sobre a requisição como o atributo Accept que diz qual o tipo de dado esperado como resposta dessa requisição e o Content-Type que sinaliza que no corpo da requisição está sendo enviado um JSON;

- body: É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que você quer enviar para uma string JSON. Por isso que o lado do back-end é necessário utilizar o body Parser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto Javascript.

Não é possível fazer requisiçoes POST diretamente pelo navegador como foi feito para requisição para rota GET / recipes.
Por isso deve-se usar aplicações como o Insomnia ou Postman para fazer requisições de qualquer tipo diferente do GET.

Usando o HTTPie para exemplificar a inserção de um item ao array da nossa API
```
http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30 // execute apenas essa linha!
> HTTP/1.1 201 Created
> Connection: keep-alive
> Content-Length: 32
> Content-Type: application/json; charset=utf-8
> Date: Sat, 21 Aug 2021 19:26:46 GMT
> ETag: W/"20-bnfMbzwQ0XaOf5RuS+0mkUwjAeU"
> Keep-Alive: timeout=5
> X-Powered-By: Express
>
> {
>     "message": "Recipe created successfully!"
> }
```

Nos campos id e price foi utilizado := enquanto em name apenas =, Isso acontece pois o operador = envia os dados como string, enquanto com := o dado é enviado como número.
Como no exemplo é uma lista de receitas através de um array, sempre que a aplicação é reiniciada, o array volta ao formato original, com os 3 objetos definidos direto no código. Por tanto, caso as receitas que foram inseridas sumam repentinamente da listagem, provavelmente foi por isso, os dados estão armazenados em memória.
```
// ...

app.post('/recipes', function (req, res) {
	const { id, name, price } = req.body;
	recipes.push({ id, name, price});
	res.status(201).json({ message: 'Recipe created successfully!'});
});

// ...
```

Na primeira linha os atributos id, name e price foram desestruturados do objeto req.body para que, na segunda linha, esses valores sejam utilizados para inserir um novo objeto dentro do array receitas.
Na terceira e ultima linha, a resposta foi retornada como status 201, que serve para sinalizar que ocorreu uma operação de persistência de uma informação e um json com o atributo message. Pronto, agora você tem uma rota que permite cadastrar novas receitas no array.

## Headers

Assim como é possível enviar informações no **body** da requisição, também é possível enviar informações no **header** da mesma. Imagine que você precisa ter uma rota que recebe um token para ser validada, a regra de validação é checar se o token possui 16 caracteres:
```
// ...

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})';

  res.status(200).json({message: 'Valid Token!'})'
});

// ...
```

Exemplo usando HTTPie para fazer uma requisição enviando informações no headers:
```
http :3001/validateToken Authorization:abc # vai devolver token inválido
http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido
```

# Atualizando e deletando objetos através da API

Métodos PUT e DELETE ditam e removem objetos. O express tem métodos específicos para definir rotas para esses dois verbos.

## PUT
```
// ...

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});
// ...
```

No frond-end, para fazer requisições do tipo PUT e DELETE através do fetch api:
```
// Requisição do tipo PUT
fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

// Requisição do tipo DELETE
fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});
```

Quando se é feita uma requisição para uma rota que não existe por padrão o Express retorna a seguinte linha:
```
http GET :3001/xablau
> <!DOCTYPE html>
> <html lang="en">
> <head>
> <meta charset="utf-8">
> <title>Error</title>
> </head>
> <body>
> <pre>Cannot GET /xablau</pre>
> </body>
> </html>
```

Porém ela não é intuitiva para identificar que aquela rota não existe, para retornar uma resposta mais intuitiva é interessante usar o médoto app.all:
```
//...
app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);
```
#


# Testes automatizados

Ferramentas que serão usadas: **mocha** e **chai**

Para utilizarmos essas ferramenta sprecisamos começar fazendo a instalação, para isso, utilizaremos a flag -D. Esses módulos só serão utilizados em fase de desenvolvimento e não serão utilizados para executar nossa aplicação quando ela for publicada. Dessa forma, evitamos instalar pacotes desnecessários em nossa versão de produção.

`npm i -D mocha chai`

# Tipos de testes

É importante ter em mente na hora de produzir, o escopo e a interação dos testes.
Existem algumas divisões arbitrárias que nos ajudam a pensar uma ordem de desenvolvimento de testes, sendo as mais comuns:

Testes unitários: Trabalham presumindo um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos. Ex: uma função com um fim específico, como uma função que soma dois números:

Imagine o teste unitário de um carro, o motor precisa ser testado para saber se ele tem potência e torque; já os peneus necessitam de testes para saber se têm boa aderência no asfalto. Também testamos o assento do motorista para saber se é confortável e ergonômico e testamos o volante para saber se é fácil manusear e esterçar.

Testes de integração: trabalham presumindo a junção de múltiplos escopos (que tecnicamente devem possuir, cada um seus próprios testes) com interações entre eles.

Usando o carro como exemplo, no teste de integração, ao aceletar testamos se o motor permanece em uma velocidade constante e se ao esterçar o volante, os pneus dianteiros são orientados corretamente para a direção desejada. Testamos também se ao se acomodar no assento do motorista, é fácil manusear o volante e o câmbio.

Teste de ponta-aponta: Chamados também de Fim-afim (end-to-end; E2E), esses testes pressupõem um fluxo de interação completo com a aplicação, de uma ponta a outra. Aqui poderíamos pensar uma API que utiliza nossa calculadora - assim como diversas outras funções mais complexas - na hora de realizar uma operação de venda de produtos. Esse teste é o mais completo, pois garante que todos os demais testes estão ou serão desenvolvidos.

Voltando ao exemplo do carro, por fim, no teste ponta-aponta(PaP) fazemos um test-drive de impacto para avaliar todos os aspectos, realizando uma corrida com vários carros em um circuíto.

# Estruturando testes com o Mocha

É um framework de testes para JS, isso significa que ele nos ajuda a arquitetar os nosso testes, fornecendo a estrutura e interface para escrevermos os nossos testes.

- describe: nos permite adicionar uma descrição para um teste específico ou um grupo de testes.
- it: nos permite sinalizar exatamente o cenário que estamos testando naquele ponto.

# Aferindo testes com o Chai

Nos ajuda com as asserções, ele fornece maneiras de dizermos o que queremos testar e então ele validará se o resultado condiz com o esperado.

Com as asserções podemos verificar o resultado que uma determinada função retornou, [documentação do chai com seus asserts](https://www.chaijs.com/api/bdd/).

Para tornar nosso teste ainda mais legível, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético como o to e o b, que nos permite escrever nossa assertion da seguinte maneira:
```
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovacao"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovacao');
  });
});
```

[Um pouco mais sobre langueage chains](https://www.chaijs.com/api/bdd/#method_language-chains)

# Executando o teste

Precisamos criar nosso pacote node para incluir os scripts necessários no package.json
```
npm init
```

O mocha é responsável por executar nossos testes. Ele entenderá as palavras reservadas describe e it, assim como a estrutura do nosso teste.
Ele poderia ser intalado de maneira global(npm i -g mocha) e bateria chamalo diretamente no terminal, passando o arquivo de teste (mocha tests/calculaSituacao.js).

Mas uma forma mais recomandad é de utilizarmos o pacote que já temos instalado. Para isso, é adicionado um novo script ao package.json, que chama o mocha e informa um arquivo ou diretório de testes:
```
{
// ...
  "scripts": {
    "start": "node index.js",
    "test": "mocha tests"
  },
// ...
}
```

Não sendo necessario a instalação global, para executar o teste basta rodar no terminal o script test.

`npm run test || npm test`

# TDD - Transformando requisitos em testes

Se antes de tentarmos implementar o código já começarmos traduzindo as espcificações em testes e então já desenvolver pensando neles?

Pensando dessa forma que surgiu o conceito de TDD (Test Driven Development), em tradução livre, Desenvolvimento Orientado a Testes. Essa metodologia é bastante difundida e pode trazer muitos benefícios para o desenvolvimento.
A prática do TDD consiste em começar a escrever os testes que traduzem e validam os comportamentos esperados para aquele código antes de começar a implementação.

A ideia principal é começarmos escrevendo o código pensando em como será testado, ou seja, ter em mente quasi cenários devemos cobrir e também como nosso código precisa estar estruturado para que possamos testá-lo. Códigos menos estruturados normalmente são mais difícies de serem testados.

# Isolando nossos testes

Atenção a um ponto: os testes não devem realizar operações de IO (input / output), eles não devem acessar nem o disco, nem a rede.

Quando criamos aplicações de front-end, estamos na maior parte do tempo manipulando o DOM. Quando falamos de Javascript no back-end com Node.js, constantemente estamos realizando operações com IO, ou seja, nossa aplicação se comunica com o sistema de arquivos ou com a rede. Exemplos dessas comunicações são a leitura e escrita de arquivos, chamadas a APIs ou consultas em um banco de dados.

Para isso existe o conceito de Test Double, que são objetos que figem ser outros objetos para fins de testes.

Para ajudar com esse tipo de coisa, é usado a ferramenta SION.

# Sinon

É uma ferramenta que fornece funções para diversos tipos dos Test Doubles.

## Stubs

É um tipo de test double usado para simular interações com dependências externas ao que estamos testando de fato(é comum referir-se ao sistema sendo testado como SUT, System under test);

Instalando: `npm i --save-dev sinon`

Criando um stub para função de leitura do fs:

const fs = require('fs');
const sinon = require('sinon');
```
sinon.stub(fs, 'readFileSync')
  returns('Valor a ser retornado);
```

É necessario importar o módulo fs e então farmos para o sinon criar um stub para a função readFileSync, que retornará "Valor a ser retornado", conforme especificado no returns.

#

# Middlewares

No express qualquer função passada para uma rota é um middleware, seja de forma direita ou indireta.

Middleware são funções que realizam o tratamento de uma request e que pode encerrar essa request ou chamar o próximo middleware.
Essas funções recebem três parâmetros, req, res e next. Eles podem retornar qualquer coisa, incluindo promises, o express ignora o retorno dos middlewares, visto que o importante é se aquele middleware chamou ou não um método que encerra a request, ou a função next.

# Middlewares globais com app.use

Usado quando precisamos reaproveitar um middleware para todas as rotas da aplicação.
Exemplo, quando vamos criar uma forma de autenticar se um determinado usuário pode ter acesso à nossa API de receitas. Para isso, será necessário enviar as informações de nome de usuário e senha pelo Header da requisição.

## Passando valores entre middlewares com objeto req

Middlewares também podem modificar o objeto req, e essas modificações serão recebidas pelos próximos middlewares caso next seja chamado. Geralmetne utilizamos isso para propagar informações de um middleware para o outro.

# Pacotes que são middlewares

Existem pacotes que nos fornecem ferrametnas necessárias para o desenvolvimento de nossa aplicações. Um exemplo disso é o módulo body-parser. Ele é um middleware que lê o corpo da request, cria nela uma propriedade body e coloca o contúdo do corpo lá. Para utiliza-lo e ter acesso às informações do corpo da request, só precisamos instalá-lo.
A função json() utilizada diz ao body parse que queremos um middleware que processe corpos de requisições escritos em JSON. Se executarmos API e fizermos uma requisição do tipo POST, conseguiremos ter acesso aos valores evnaidos no body da requisição. Porém se tirarmos o uso deste middleware, as requisições do tipo POST não conseguem processar os dados enviados no body da requisição.

# Visualizando o conteúdo das requisições no Console

É comum ter dificuldade para visualizar o que está sendo feito por cada endpoint em cada requisição.
Para resolver esse problema, é possível adicionar um middleware que imprimirá no console as informações recebidas no parâmetro req.
```
app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});
```

Sempre que uma requisição http for executada, o middleware criado imprimirá no console as informações contidas no parâmetro req. Lembrando que isso só afetará as rotas que forem declaradas abaixo da definição do app.use.

# Router middleware

É um middleware que agrupa várias rotas em um mesmo lugar, como se fosse uma versão mini do app do Express. Ele é depois "plugado" no "app principal".

Analise o arquivo index.js na src

O uso de mais de um parâmetro na chamada à função app.use. Isso diz ao Express que queremos que aquele middleware (no caso o router) seja executado para qualquer rota que comece com aquele caminho, evitando a repetição de nomes, por isso é definido router.get('/:id) o caminho acessado seria o "recipes/:id".

Routers suportam que qualquer tipo de middleware seja registrado. Se tivermos vários endpoints com autenticação e vários endpoints abertos, podemos criar um router, e registrar nele nosso middleware de autenticação, bem como todas as rotas que precisam ser autenticadas, registrando as rotas abertas diretamente no app.
```
/* recipesRouter.js */
// const express = require('express');
// const router = express.Router();

const authMiddleware = require('./auth-middleware');
router.use(authMiddleware);

// ...

// module.exports = router;
```
```
/* index.js */
// const express = require('express');
// const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

// const app = express();
// app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
	res.send('open!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/fechado', authMiddleware, function (req, res) {
	res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
// 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });


// app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });
```

# Lidando com erros

A diferença de um middle ware de erro para um middleware comum é que a assinatura dele recebe quatro parâmetros em vez de três, `function (err, req, res, next) {}`

O express utiliza a quantidade de parâmetros que uma função recebe para determinar se ela é um middleware de erro ou um middleware comum. Mesmo não utilizando os parâmetros de req, res ou next, o middleware de erro precisa recebê-los, pode ser adicionado um underline no começo do nome do parâmetro para indicar que ele não recebe nada. Isso é uma boa prática e sinaliza para quem está lendo o código que aquele parâmetro não é utilizado. `function (err, _req, _res, _next)`.

Também é possível encadear middlewares de erro, no mesmo esquema dos outros middlewares, simplesmente colocando-os na sequência em que devem ser executados:
```
app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  /* passa o erro para o próximo middleware */
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.json({ error: err });
});
```

Usando o next(err) indica ao express que ele não deve continuar executando nenhum middleware ou rota que não seja de erro. Quando passamos qualquer parâmetro para o next, o Express entende que é um erro e deixa de executar middlewares comuns, passando a execução para o próximo middleware de erro registrado para aquela rota, router ou aplicação.

Esse detalhe é importante, pois se um erro acontece dentro de um rota ou middleware e nós não o capturamos e o passamos para a função next, os middlewares de erro não serão chamados para tratar aquele erro. Fazendo noss API ficar sem responder aquela requisição.

Sempre realize tratamento de erros nas suas rotas e middlewares, passando o erro para a função next, caso necessário.

Um exemplo onde o erro fica "flutuando" e não existe resposta do servidor é quando utilizamos um middleware async. Como o Express não faz .catch na promise retornada pelo middleware, ele não sabe que ocorreu um erro, a não ser que nós capturemos esse erro e o passemos para a função next.

O parâmetro passado para a função next, sempre é um indicador que ele vai redirecionar para o middleware de erro, e não para passar um objeto qualquer entre dois middlewares.

Esse tipo de erro pode acontecer ao fazer uma query para um banco, e ter várias possíveis falhas, como o banco não estar respondendo, queries escritas erradas, as credenciais estarem erradas.

Para que não seja necessário ter que criar estruturas try/catch sempre que formos utilizar códigos que eventuralmente podem disparar exceções podemos usar um pacote chamado express-rescue.

# Pacotes middlewares de terceiros
## Pacote express-rescue

Está disponível no npm e nos ajuda com a tarefa de garantri que os erros sempre sejam tratados.
Primeiro é necessário fazer a instalação `npm i express-rescue`

Para adicionar o express-rescue, basta passarmos o nosso middleware como parâmetro para a função rescue que foi importada. Essa função vai gerar um novo moddleware que vai fazer o tratamento de erros da middleware sem precisamor escrver o try/catch.

Ele simplesmente executa nosso middleware original dentro de um bloco de try/catch, caso ocorra qualquer erro, dando fluxo ao erro do express.

O uso correto do middleware de erro, possibilita centralizar o tratamento de erros da aplicação em partes específicas dela. Isso facilita a construção dos middlewares de rotas, pois você não precisa ficar tratando erros em todos os middlewares. Se algo der errado em qualquer rota que estiver envelopada pelo express-rescue, esse erro vai ser tratado pelo middleware de erros mais próximo.

É muito comum ter um middleware de erro genérico, e outros middlewares que convertem erros para esse formato genérico:
```
/* errorMiddleware.js */

module.exports = (err, req, res, next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }

  return res.status(500).json({ message: err.message });
}
```

Foi convertido um erro de leitura de arquivo para um erro que o middleware de erros sabe formatar. Nos middlewares comuns precisamos nos preocupar apenas com o minho feliz, ao passo que nos middlewares de erro nos preocupamos apenas com o fluxo de erros.

Também é utilizado um array para passar mais de um middleware para uma mesma rota. Poderia ser passado como parâmetro, mas um array deixa mais explícita a intenção de realmente utilizar vários middlewares em uma mesma rota.

## express.json

Sub dependencia usando o bodyParse, é usado para o uso do body em uma requisição, caso não seja usado esse middleware não é possível acessar o body.

## express.static

É um middle do express, para acessar diretamente um arquivo, que foi definido no caminho do static, um exemplo seria acessar diretamente uma imagem que está localizada em uma pasta na api;

```
const express = require('express');

const app = express();

app.use('/static', express.static('./caminho-da-imagem'));

```

Digamos que existe um arquivo na pasta public, que está relativamente uma pasta atrás do arquivo que está rodando a api e queremos acessar uma imagem chamada, imagem-teste.png;

```
app.use('/static', express.static('../public/imagem-teste.png'));
```

Ao realizar um get para o `endereço/public/imagem-teste.png`, no navegador, ele ja apresentará a imagem no navegador.

## Logs com morgan

Middleware para gerar logs da api. Onde é possivel personagem e gerar diversas forma de logs de acesso, até criar arquivos de log conforma a [documentação](https://www.npmjs.com/package/morgan) orienta.

## Cross Origin RResource Sharing ([CORS](https://www.npmjs.com/package/cors))

Middleware para restrição e permissão de recursos de páginas da web por outro dominio, permite definirmos qual dominio pode acessar a api, e libera esse tipo de acesso, por padrão o express, bloqueia o acesso.

## [Helmet](https://github.com/helmetjs/helmet)

Middlware de segurança, é uma coleção de várias funções menores que definem cabeçalhos de resposta HTTP relacionadas a segurança.

# [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)

Middleware para definir limites de requisiçoes, que ajudam a evitar uso excessivo das requisições, evitando até mesmo um ataque DoS/DDoS, 

# Recursos adicionais
# 4.1

- [NPM Comandos Cheat Sheet](https://github.com/tryber/Trybe-CheatSheets/blob/master/backend/nodejs/npm/README.md)
- [Documentação oficial do Node.js](https://nodejs.org/en/docs/)
- [Documentação oficial do NPM](https://docs.npmjs.com/)
- [Vídeo: Node.js // Dicionário do Programador](https://www.youtube.com/watch?v=vYekSMBCCiM&t=426s)
- [O guia completo do package.json do Node.js](https://www.luiztools.com.br/post/o-guia-completo-do-package-json-do-node-js/)
- [Tudo que você queria saber sobre o package-lock.json, mas estava com vergonha de perguntar](https://medium.com/devzera/tudo-que-voc%C3%AA-queria-saber-sobre-o-package-lock-json-mas-estava-com-vergonha-de-perguntar-e70589f2855f)
- [Entendendo módulos ES6](https://medium.com/trainingcenter/entendendo-m%C3%B3dulos-no-javascript-73bce1d64dbf)
- [Sobre Versionamento Semântico](https://semver.org/lang/pt-BR/)
- [CommonJS vs. ES Modules: Modules and Imports in NodeJS](https://reflectoring.io/nodejs-modules-imports/)
- [Dissertação sobre as principais Licenças de Software](https://www.teses.usp.br/teses/disponiveis/45/45134/tde-14032012-003454/publico/MestradoVanessaSabino.pdf)
- [Como funcionam as licenças open source?](https://medium.com/code-prestige/como-funcionam-as-licen%C3%A7as-open-source-9ff1da677ccd)
- [O lado Legal do Open Source](https://opensource.guide/pt/legal/)
- [Vídeo do canal Código Fonte explicando sobre Licenças de Software](https://www.youtube.com/watch?v=fPfzp6ov2bQ)


# 4.2

[O que é uma API REST?](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api)
[Roteamento no Express - Express](https://expressjs.com/pt-br/guide/routing.html)
[Introdução Express/Node - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)
[Status code - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
[O que é API REST - Red Hat](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api)
[REST no glossário - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Glossary/REST)

# 4.3

- [Artigo Test Doubles](https://medium.com/rd-shipit/test-doubles-mocks-stubs-fakes-spies-e-dummies-a5cdafcd0daf)
- [Vídeo: TDD Test Driven Development](https://www.youtube.com/watch?v=bLdEypr2e-8)

# 4.4

- [Documentação Express - Rotas](https://expressjs.com/pt-br/guide/routing.html)
- [Documentação Express - Middleware](https://expressjs.com/pt-br/guide/writing-middleware.html)
- [Página do MDN sobre Node + Express](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Rest with Node and Express](https://www.robinwieruch.de/node-express-server-rest-api)
- [Middleware [Node js Design Patterns]](https://www.youtube.com/watch?v=lI2MiMEn9HQ)
- [Usando Middlewares](https://expressjs.com/pt-br/guide/using-middleware.html)
- [Escrevendo Middlewares](https://expressjs.com/pt-br/guide/writing-middleware.html)
- [Express - Middlewares](https://reflectoring.io/express-middleware/)
- [Ataque de negação de serviço DoS](https://www.geeksforgeeks.org/middleware-in-express-js/)
- [Segurança em Aplicação WEB](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/First_steps/Website_security)
- [OWASP API Security Project](https://owasp.org/www-project-api-security/)

# 4.5

- [Repositório da biblioteca mysql2](https://github.com/sidorares/node-mysql2)
- [Documentação da biblioteca dotenv](https://www.npmjs.com/package/dotenv)
- [Testes de integração para aplicações Node.js com Mocha e Chai](https://medium.com/desenvolvimento-com-node-js/testes-de-integra%C3%A7%C3%A3o-para-aplica%C3%A7%C3%B5es-node-js-com-mocha-e-chai-610a1ba15e1b)
- [Testes de integração para API com Typescript, mocha, chai e sinon](https://dev.to/matheusg18/testes-de-integracao-para-api-com-typescript-mocha-chai-e-sinon-3np9)