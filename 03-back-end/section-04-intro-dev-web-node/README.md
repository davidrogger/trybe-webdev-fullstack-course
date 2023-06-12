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
# 22.1

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


# 22.2

- [Asynchrony: Under the Hood - Shelley Vohr - JSConf EU](https://www.youtube.com/watch?v=SrNQS8J67zc)
- [Entendendo Promises de uma vez por todas](https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2)
- [Using Promises | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promises | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Entenda tudo sobre Async/Await](https://showmethecode.com.br/async-await/)
- [Entendendo funções callback em JavaScript](https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22)
- [ECMAScript proposal: Top-level await](https://github.com/tc39/proposal-top-level-await)

# 22.3

- [Artigo Test Doubles](https://medium.com/rd-shipit/test-doubles-mocks-stubs-fakes-spies-e-dummies-a5cdafcd0daf)
- [Vídeo: TDD Test Driven Development](https://www.youtube.com/watch?v=bLdEypr2e-8)

# 22.4

- [Documentação Express - Rotas](https://expressjs.com/pt-br/guide/routing.html)
- [Documentação Express - Middleware](https://expressjs.com/pt-br/guide/writing-middleware.html)
- [Página do MDN sobre Node + Express](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Rest with Node and Express](https://www.robinwieruch.de/node-express-server-rest-api)
- [Middleware [Node js Design Patterns]](https://www.youtube.com/watch?v=lI2MiMEn9HQ)