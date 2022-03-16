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