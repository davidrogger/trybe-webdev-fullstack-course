
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

