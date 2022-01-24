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

