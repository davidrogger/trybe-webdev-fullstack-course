anotações pessoais...

# [React testing Library](https://testing-library.com/docs/react-testing-library/cheatsheet/)

Para garantir estabilidade e qualidade da sua aplicação no react.
Testa não como o código foi escrito, mais qual foi seu comportamento.

Vantagens de usar o react testing library comparando com enzyme que é outro framework com grande adoção no mercado:

- É muito mais simpels de usar;
- Tem muito menos caveats, situações que podem causar problemas e dores de cabeça inesperadas.
- Reforça o bom uso das melhores práticas de testes ao incentivar e facilitar o teste de comportamentos e não de implementação;
- Permiti a refatoração da sua arquitetura de compoentes - com Enzyme qualquer mudança nela quebra parte dos testes.

## Cobertura de testes

Evidencia quais linhas do código foram testadas e quais não estão sendo exploradas nos testes. Um projeto com cobertura de código alta não significa que os testes não podem melhorar, em uma cobertura de testes podemos evidenciar:

- a proporção de linhas do seu código que são exercutadas;
- se há linhas que "nunca" serão executadas - problemas com if else

Se o resultado mostra que há uma cobertura alta, podemos dizer que o código foi bastante testado e tem uma chance menor de conter erros, mas não diz nada sobre qualidade do código, o que só pode ser medido pela **Cobertura dos casos de Uso**.

Casos de uso são possibilidades de usos do sistema. Exemplo: quais passos a pessoa usuária precisa seguir para fazer um login no sistema e o que é esperado ao final do login tanto no sucesso quanto na falha? E se a pessoa não digitar o user? ou a senha? E se a senha estiver incorreta? Cada uma dessas situações é um caso de uso diferente. Mais importante do que garantir a cobertura do código, algo que ja é crucial, é garantir que seus testes abordam todos os casos de uso da sua aplicação. Para isto é preciso criar testes automatizados que simulam uma pessoal acessando a página fazendo um sequência de ações que resulta naquele caso de uso.

# [Jest-dom](https://github.com/testing-library/jest-dom)

## Testando

para testar é necessário usarmos a biblioteca do RTL, que ja vem junto ao react, importamos ele no arquivo de teste:

`import { render, screen } from '@testing-library/react' `

Dentro da desestruturação iremos trazer as funções que queremos usar da RLT, na maioria dos casos(ou todos) usamos o render e screen.

- `render()`: tem a finalidade de simular a renderização de um componente dentro do ambiente de testes.
```
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
Para usar o seletor/query getByText, precisamos usar o screen.getByText, ele é muito parecido com os seletores, do DOM, como o document.getElementById() ou document.querySelector(). Ao usar o screen.getByText(), será retornado um elemento html. A vantagem de usar o screen é que não será necessário atualizar e desestruturar a chamada do render para todo teste que você fizer, pois é possível consultar e utilizar todos os elementos do DOM através do próprio screen. Ele receberá um objeto com os elementos contidos no DOM e poderá acessar as propriedades desse objeto atráves dele.

[Exercicio do dia 01](https://github.com/davidrogger/exercise-todo-list)

# Mocks

Simualação de funções.

**jest.fn();** - usado para definir que aquela função será uma simulação

Exemplo:
`funcao() = jest.fn()`

Apartir do momento que definimos que aquela função é uma simulação seu retorno é undefine, devemos definir uma returno para ela usando o mockReturn

Exemplo
  `funcao() = jest.fn()mockReturnValue(true);`

  Acima foi definido que o retorno dela seria true, podendo ser uma string, ou qualquer outro tipo de retorno.

`.toHaveBeenCalled()` - usado para verificar se determinada função foi chamada, lembrando que ao usar o jest, ele apenas determina que é uma simulação, sendo necessário a chamada da função na seguida.
Exemplo:

```
test("#divisivelPorDois", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Apenas queremos saber se ela foi chamada.
  divisivelPorDois = jest.fn();

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});
```

Exemplo:
```
test("#divisivelPorDois", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});
```

# "Mockando" modulos

**jest.mock()** - Diferente do jest.fn, que simula apenas uma função, o jest.mock, simula todo um pacote de dependências ou módulo de uma vez.

```
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };
```
```
const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});
```
# Trabalhando com mock e funções originais

**jest.spyOn()** - espia a chamada da função simulada, enquanto deixa a implementação original ativa.

```
const math = require('./math');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});
```

Há também como limpar, resetar ou restaurar mocks:

mock.mockClear() - limpa os dados de uso de uma simulação entre dois expect

mock.mockReset() - faz o mesmo que o mockClear + remove qualquer retorno estipulado ou implementação, + é util quando é necessário resetar uma simulação para seu estado inicial.

mock.mockRestore() - Faz tudo que o mockReset() faz + Restaura a implementação original, útil para simular funções em certos casos de teste e resturar a implementação original em outros.

const math = require('./math');
```
test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});
```

[Respositório para treinar mais mocks]()