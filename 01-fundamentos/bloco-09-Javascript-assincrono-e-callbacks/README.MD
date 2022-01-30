anotações pessoais...

# Bloco 9.1

Para contornar o problema de um serviço sendo usado pela nossa página estar fora do ar ou lento, é usado operações *assíncronas*, fazendo com que determinado elemento fique carregando, enquanto os demais seguem o fluxo normalmente.

## Operações assíncronas

As operações no Javascript tradicionalmente são sincrónas, para realizar uma operação é necessário que a operação anterior termine.

### [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

Syntax
`setTimeout(function, milliseconds, param1, param2,...)`
função: Obrigatório
milisegundos: opcional e por padrão seu valor é 0.
param: Parametros para a função.

SetTimeout é usado para determinar que uma função/bloco será executada depois de um determinado tempo estimado.

Exemplo:
```
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]
```
Nesse exemplo foi determinado para a adição do elemento 1 ao array, ocorrece depois de 3000ms(3s), como o console.log é apresentado antes da adição o retorno não consta ainda o 1 no array.
```
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);
```

Adicionando um tempo para apresentação do console, agora o 1 aparece no array, porém por ultimo, pois ele foi adicionado por ultimo usando o setTimeout().

## Callbacks

É uma função passada como parametro para outra função.

## Testes com callbacks utilizando o Jest 

Quando realizando testes no Jest usando códigos assícronos existem uma grande possibilidade de obtermos resultados falso-positivos, pois se não apontarmos para o jest que é necessário esperar para finalizar ele considera o padrão que é sem tempo de espera, exemplo abordado no bloco foi o seguinte.
```
test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});
```
Código acima retorna como "passed" sendo que deveria retornar uma falha.

Para "apontarmos" para o jest que o código é assícrono, devemos usar a callback done, é reescrito o código chamando a callback ao final para o jest realizar a verificação se o valor atende alguma condição.
```
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});
```
Não fica claro porque ele ocorre o erro, aparentemente o jest tem algum tempo limite de teste, e para contornar isso é necessário coloca-lo em bloco try/catch.
```
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done();
    }
  }, 500);
});
```
Com esse próximo código geramos outro falso-positivo, pois não é indicado no catch, o erro ocorrido, devemos adicionar no parametro done, o retorno do erro;
```
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});
```
Agora indicando o erro no parametro done, do bloco catch, o teste acontece como deveria ser.

## Setup and Teardown

Jest possui 3 ambientes, que são conciderados ciclos, eles são usados para ajudar a configurar a realização dos testes.

O primeiro é o ciclo de "setup" configurações, é onde realizamos configurações antes dos testes, segundo ciclo é o de testes, onde realizamos os testes ao código e o terceiro é o teardown, que é uma fase que ocorre depois dos testes.

É usada a função beforEach para realizar o ciclo de setup, para determinarmos como cada teste será inicializado, acontece antes do teste.
Ja para realizar o ciclo de teardown, é usada a função afterEach, que faz a limpeza/tratamento do código para o proximo teste, acontece depois do teste.

Exemplo:
```
beforeEach(() => {
  cities = ['Pindamonhangaba'];
});

afterEach(() => {
  cities = [];
});

test('Testa a função addCity utilizando o beforeEach', () => {
  expect.assertions(3);
  addCity('Piraporinha');
  expect(cities).toHaveLength(2);
  expect(cities).toContain('Pindamonhangaba');
  expect(cities).toContain('Piraporinha');
});

test('Testa a função removeCity utilizando o beforeEach', () => {
  expect.assertions(2);
  removeCity('Pindamonhangaba');
  expect(cities).not.toContain('Pindamonhangaba');
  expect(cities).toHaveLength(0);
});
```
Nesse exemplo, a cada inicio de teste o array recebe o nome piraporinha, e depois do teste é criado um array vazio novo no lugar.
Lembrando que o before e after, caso os testes estejam divididos em describes, eles funcionam apenas dentro daquele describe.

# Application Programming Interface (API)

API permite que aplicações se comuniquem umas com as outras, servindo de ponte para elas. API não é um banco de dados ou um servidor, mas ela é responsavel pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.

### Por que precisamos de API's?

Caso você esteja montando uma página, e queira que nessa página seja exibida alguma informação de algum outro site, como twitter, discord, coisas do tipo, se você fosse depender de entrar em contato com eles para tentar coletar essas informações seria bem complicado, logo existe API, que mantem essa comunicação direta.
Normalmente as API's são desenvolvidas e aprimoradas constamente por grandes empresas de técnologia ou pessoas que precisem coletar dados e disponibilizados de alguma forma.

### Como uma API se diferencia de um back-end padrão de um site

"Toda API é um back-end, mas nem todo back-end é uma API"

Um back-end padrão de um site retornar tempaltes (um arquivo HTML pronto, exemplo) para o front-end de uma única aplicação, através de rotas definidas. Por exemplo, quando você acessa uma página da nossa plataforma, está fazendo um request ao servidor, que te retorna um template como response.
As APIs também possuem rotas de acesso que permitem a comunicação com o servidor, mas não precisam retornar templates. Geralmente, retornam dados no formato JSON.

O que é JSON e por que usamos?

Java Script Object Notation é basicamente uma forma de representar dados como objetos.
```
{
  "trybers": [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}
```
JSON está sempre presente em aplicações web modernas, pois é simples, interpretável e ainda funciona muito bem em aplicações JavaScript e é compatível com diversas outras linguagens, que coseguem interpretá-lo e gerar códigos no formato, como Python, java, PHP, Ruby, entre outras.APIs retornam os dados no formato JSON, a fim de manter uma alta escabilidade e independência.
Apesar do nome, ele não é um objeto JavaScript, apenas é uma estrutura de forma que faz uso de chaves e valores, por não ser um objeto nativo do JS, precisamos traduzir usando JSON.parse() e JSON.stringify().

## Promises

Promises se comprotam de forma muito parecida com as funções que já conhecemos, mas existem 3 pontos de destaque das Promises em relação à outras funções.

1. Elas são assíncronas, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções.
2. Elas tem "superpoderes", elas tem funções extras que facilitam o controle do fluxo assíncrono.
3. Elas são contruidas de uma forma distinta, para criar uma nova promise, é usado um Construtor.

E também possuem 3 estados:

1. Pending, estado inicial, ela está em execução;
2. Fulfilled, estado de sucesso, significa que tudo deu certo e foi retornado o valor de sucesso.
3. Rejected, estado de rejeição, significa que algo deu errado e foi retornado o erro que gerou essa rejeição.

Quando utilizamos fetch, recebemos uma promise, com fetch temos dois possiveis retornos, em caso de sucesso, recebemos a response, e caso algo dê errado com a nossa requisição, recebemos as informações sobre o erro. Mas toda promise é assíncrona e para termos o retorno dela, devemos esperar um tempo até essa promessa ser resolvida.
É usado then() catch() e async/await com try/catch, para garantir que o código que estamos desenvolvendo aguarde o retorno de uma promise, antes de executar os próximos passos.

## [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

Contém uma série de recursos desenvolvidos para lidar com requisições http no Javascript. Sua função primária é a fetch(), utilizada para fazer chamadas às URL's das APIs. Trata-se de uma função assíncrona, baseada em uma promise.
A função fetch pode receber dois parâmetros:
1. URL do serviço alvo da requisição:
2. E opcionalmente, pode ser passado um objeto contendo algumas informações sobre requisição de API. Esse objeto, contém chaves como informações específicas para aquela chamada. Essas especificações estão sempre presentes na documentação de uso daquele API específica.
O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também formato.
A função fetch é responsável por enviar requisições a API's. Mas não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.
Existem dois principais ferramentas que são usadas para gerir o fluxo assíncrono, o then() e o catch().

#### endpoint

Em APIs é o caminho que retorna de alguma informação específica da API. (pode ser uma URL).

instalando node-fetch

`npm init -y`
`npm i node-fetch@^2`

Foi utilizado o @^2 ao final do nome do pacote para especificar que deve ser instalado a versão mais atual, mas que não seja maior que versão 2. Essa especificação ocorre visto que a versão 3 do note-fetch foi alterada para ser usada atráves de módulos do JS, podendo ser importada apenas através do import e não mais do require.


### then()

É usado em cadeira, um conceito chamado de chaining. Podemos colocar vários then, em sequencia, e o argumento da função interna de um será o retorno do anterior, o mais importnante é que o then, espera a resposta do fech ou then anterior, para começar a sua execução. assim o fluxo fica controlado.

### catch()

Recebe o erro gerado caso a requisição não seja bem sucedida, que é passado para ele como argumento de sua função interna, assim quando o fetch retorna algum erro, todos os then, são pulados, e é executado o primeiro fetch encontrado, o catch também pega qualquer erro que acontece dentro de qualquer then no fluxo anterior a ele, por isso ele é geralmente usado no final.

### async

async é declaro antes da definição de uma função;
Mas ela sozinha não resolve possiveis problemas, por isso ela é usada em conjunto com await.
Await só pode ser usado dentro de fuma função com async, e ela faz o que o nome propoem, espera, por uma resposta para continuar sua execução.

## Para fixar sobre o bloco do dia

1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

Um código executado de forma assíncrono é um código independente que não "bloqueia" o caminho dos demais códigos, que teriam que esperar ele concluir a função dele, para dar continuidade, ja o código síncrono, segue uma sequencia, que um depende do outro na sequencia para seu funcionamento.

2. Quando você tem que enfileirar várias callbacks , que problema surge?

Fora a falta de legibilidade do código, dificuldade em realizar manutenção na função.

3. Por que as Promises são uma forma de resolver esse problema?

Por elas serem assíncronas e serem independentes.

4. Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

Assíncrono, para evitar a quebra do fluxo.

5. Dada a resposta anterior, o que é fetch e para que ele serve?

fetch é uma forma de criar um fluxo dentro da assíncronidade, garantindo que temos um fluxo, interno aquela função, idependente do fluxo "global".

### [Testando códigos assíncronos](https://jestjs.io/docs/asynchronous)

Jest fornece algumas soluções com o objetivo de que os testes guardem o momento certo para testar a função isso evita falsos positivos usando async/await.
**Nunca** se deve testar requisições reais para um API, pois elas apresentam diversas variações, se o teste você realizou hoje numa API de previsão do tempo e ela apresenta sol, e no dia seguinte chuva, ela provavel muda o retorno, tendo uma resposta diferente resultando em um erro, e também existe possibilidade URL da API estar incorreta, falha de conexão e instabilidade no servidor que gerencia a API.
Por isso normalmente é usado uma simulação na execução da função, para poder definir o retorno que ela terá, dessa forma, é possivel controlar diversos cenários, como sucesso e falha.

[Exercícios do bloco](https://github.com/davidrogger/9.3-content-async-test)