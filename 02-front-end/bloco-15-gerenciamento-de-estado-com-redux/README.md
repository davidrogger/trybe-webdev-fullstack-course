anotações pessoais...

# Introdução ao Redux

Para eliminar em grande a escala de componentes a necessidade de e usarmos o prop threading ou drilling, que seria o caso de criarmos uma cascata de props passando de componente para componente desde o pai, somente para darmos acesso aquele estado, é usado o redux, onde ficará centralizada toda informação do estado, para conseguirmos acessar de qualquer componente essa informação, sem precisarmos passar de um componente para outro. Ajudando no problema de fluxo de informação dentro da aplicação.

Redux pode ser usado com qualquer outro framework front-end fora o react, e também com javascript puro.

## Store

Armazena o estado central da aplicação, definido em um lugar separado.
O Estado da aplicação fica no store.

## Action
Objeto que contem a alteração que vai ser feita no estado.

## Reducer
Define como o estado vai ser atualizado no store.

instalação do redux:
```
npm init -y
npm i redux
```

## [Combinação de reducers](https://redux.js.org/api/combinereducers/)

## Usando Redux no React

instalação npm install react-redux

Extensões uteis:
Redux Devtools
pacote adicional redux-devtools-extension = npm install --save redux-devtools-extension
Caso não esteja instalado ela apresentará erros.

para o funcionamento dessa extensão deve-se passar composeWithDevTools como segunro parametro na criação do store:

```
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
```

[exercicio para fixar no repositório fork](https://github.com/davidrogger/exercises-redux-step-by-step)


