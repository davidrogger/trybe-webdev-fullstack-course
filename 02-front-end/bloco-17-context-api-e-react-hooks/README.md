anotações pessoais...

# Context API do React

É uma funcionalidade nativa do React, usado para compartilhar para todos os filhos do componente sem a necessidade de se passar props e callbacks manualmente.

[Exercício do bloco 17.1](https://github.com/davidrogger/exercise-contextAPI-refactoring)
[Exercício do bloco 17.2](https://github.com/davidrogger/exercise-react-hooks-refactoring)

# React Hooks

Existem duas maneiras de criar um componente React, usando classes, ela te dá muitas ferramentas, mas é mais complicada de se criar, nela vocẽ pode definir estados, acessar contextos, usar métodos de ciclos de vida de componente, mas você precisa também fazer bind nas funções que não forem arrow, e que deseja passar como callbacks, além de ser necessário definir um construtor, caso utilize estado ou métodos de ciclos de vida. E isso tudo acaba aumentando a complexidade da aplicação.
A segunda forma de criar um componente é com o componente funcional, que utilizar das mesmas ferramentas que a classe de forma mais simples, por intermédio do React Hooks.

## useState

O useState é o hook mais comum e ele permite o uso do state e outros recursos do React sem escrever uma classe.

```
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default App;
```
## useContext

Ele funciona como um Consumer, mas de uma forma menos complexa tornando o código bem mais legível.

Precisamos primeiro importar dele do react;

```
import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;
```

e configurarmos um provider;


```
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
```

Com o context e o provider criados, adicionamos à aplicação;

```
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Provider from '../utils/Provider'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
