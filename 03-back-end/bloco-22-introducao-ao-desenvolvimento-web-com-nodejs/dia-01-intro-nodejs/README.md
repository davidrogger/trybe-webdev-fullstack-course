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

