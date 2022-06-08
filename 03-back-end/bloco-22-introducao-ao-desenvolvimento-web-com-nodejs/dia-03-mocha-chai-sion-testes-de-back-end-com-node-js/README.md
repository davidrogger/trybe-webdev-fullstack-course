anotações pessoais do dia...

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

