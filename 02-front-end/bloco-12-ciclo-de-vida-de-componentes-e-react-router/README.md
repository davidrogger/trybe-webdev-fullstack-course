anotações pessoais...

# Ciclo de vida de componentes

[Diagrama de ciclos](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Os componentes no React, possuem ciclos de vida, que são dividiso em 3 etapas:

Montagem - quando o componente é inicializado e inserido no DOM.

Atualização - quando o props ou estado do componente são alterados.

Desmontagem - quando o componente mrre, sumindo do DOM.

Principais métodos funcionam da seguinte maneira:

## Montagem:

**constructor** - recebe as props e define o estado;
**render** - renderiza o componente, inserindo-o no DOM;
**componentDidMount** - dispara uma ou mais ações após o componente ser inserido no DOM.

## Atualização:

**shouldComponentUpdate** - possibilita autorizar ou não o componente a atualizar;
**componentDidUpdate** - dispara uma ou mais ações após o componente ser atualizado;

## Desmontagem:

**componentWillUnmount** - dispara uma ou mais ações antes de o componente ser desmontado.

fork - ricky and morty
fork - dog image