anotações pessoais do dia...

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

