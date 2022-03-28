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

`npm install --save redux react-redux`
O npm install é o comando usado para instalar dependências; seguido por --save para salvar o pacote instalado no package.json; seguido de redux, que é a biblioteca que possui a implementação do Redux; e react-redux, que é a biblioteca que realiza a conexão entre o Redux e o React.

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



#### Checklist react-redux: Passo a passo para guardar no coração e colar na parede

npx create-react-app my-app-redux;
npm install redux react-redux;
npm install.
Criar dentro do diretório src:
diretório actions;
diretório reducers;
diretório store.
Criar dentro do diretório actions:
arquivo index.js.
Criar dentro do diretório reducers:
arquivo index.js.
Criar dentro do diretório store:
arquivo index.js.
Em src/index.js:
definir o Provider, <Provider store={ store }> , para fornecer os estados à todos os componentes encapsulados em <App /> .
Se a sua aplicação não terá outras páginas, não é necessário configurar as rotas. Caso contrário:
npm install react-router-dom@v5;
Em src/index.js:
definir o BrowserRouter, <BrowserRouter> .
No arquivo App.js:
definir o Switch, <Switch> ;
definir a Route, <Route> .
O BrowserRouter, o Switch e a Route são três componentes essenciais para trabalhar rotas em React.
Caso necessário:
criar o diretório components;
criar o diretório pages.
No arquivo store/index.js:
importar o rootReducer e criar a store;
configurar o Redux DevTools.
Na pasta reducers:
criar os reducers necessários;
configurar os exports do arquivo index.js.
Na pasta actions:
criar os actionTypes;
criar as actions necessárias.
Nos componentes:
criar a função mapStateToProps se necessário;
criar a função mapDispatchToProps se necessário;
fazer o connect se necessário.
#theend


[exercicio para fixar no repositório fork](https://github.com/davidrogger/exercises-redux-step-by-step)

[exercico para fixar no repositório fork](https://github.com/davidrogger/exercise-react-with-redux-intro)

# [Bloco 15.3](https://github.com/davidrogger/exercise-forms-redux)

# Redux Thunk

Pacote para suporte assícrono, ja que o redux trabalha somente com funcionalidades síncronas.

instalação do redux-thunk: `npm install redux-thunk`

àra habilitar o uso na aplicação é preciso fazer o uso da função applayMiddleware() do Redux:

```
// arquivo onde a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

...

const store = createStore(reducer, applyMiddleware(thunk));
...
```

Para usar junto com o composeWithDevTools, o apply deve ser passado como parametro dentro do compose.

`const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));`

Thunk é uma função que encapsula uma operação para que ela seja feita posteriormente, é uma função que vai ser retornada por outra função com mais lógica adicionada.

Para o uso devido do redux-thunk a action creator precisa retornar uma função, que pode fazer uso de dispatch e getState da store como parâmetro.

exemplo:
```
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

// action creator que retorna um objeto, que você tem feito até então
const requestMovies = () => ({
  type: REQUEST_MOVIES});

// outro action creator que retorna um objeto, que você tem feito até então
const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies});

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchMovies() {
  return (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    return fetch('alguma-api-qualquer.com')
      .then((response) => response.json())
      .then((movies) => dispatch(receiveMovies(movies)));
  };
}

// componente onde você usaria a action creator fetchMovies assíncrona como uma outra qualquer
...
class MyConectedAppToRedux extends Component {
  ...
  componentDidMount() {
    const { dispatch, fetchMovies } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }
  ...
}
...

```

[Mais Exercicio do bloco 15.4] (https://github.com/davidrogger/exercise-redux-thunk)
