anotações pessoais...

# Bloco 11

### Componentes React

**Estado** é um momento de algo que pode mudar ao longo do tempo(dinâmico). É uma informação que você quer preservar enquanto o componente está interagindo com quem usa.
Estado de um componente é um lugar onde todo componente tem para armazenar informações. Sendo o iltro selecionado, o item da lista, o carrinho de compras.

**Eventos** são como os eventListeners do Javascript, você associa aos elementos que exibirá na tela e eles nortearão como cada componente reage a uma ação de quem usa.

Toda classe em JavaScript tem acesso a um método chamado constructor() , quando uma página é renderiza no navegador a primeira coisa que é executada é a função constructor. Toda a lógica interna que o React adiciona aos seus componentes começa a ser inclusa neles nesse momemnto.
**Constructor** é uma função dentro do react que podemos estender para adicionar uma lógica nossa interna a ela, que normalmente usamos para fazer uma ligação de uma função há classe que queremos adicionar um evento.
No JavaScript o super(), refere-se ao construtor da classe pai, é importante lembrar que não se pode usar o this em um construtor até que você tenha chamado o construtor da classe pai, o JS não vai deixar, então precisamos chamar o super() antes de aplicar o this dentro do constructor.

Normalmente se utilizarmos o this dentro de uma função que está dentro de uma classe, ele não consegue ter acesso, pois o javascript não possui essa lógica de implementação de classes, então é necessário atrelarmos dentro do contructor uma ligação da função dentro do contructor entre eles, que é feito da seguinte maneira:

`this.NossaFuncao = this.NossaFuncao.bind(this)`
"Está função está ligada(bind) ao this"

```
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;
```

O **this** acessa nos compoentes React, um objeto que guarda tudo que importa àquele compoente.
```
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;
```
```
App {
  context: {}
  props: {}
  refs: {}
  state: null
  updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
  _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
  _reactInternalInstance: {_processChildContext: ƒ}
  isMounted: (...)
  replaceState: (...)
  __proto__: Component
    constructor: class App
    isMounted: (...)
    render: ƒ render()
    replaceState: (...)
    __proto__: {...}
  // ... Continua
  }
```

É um objeto enorme que contém basicamente, tudo que concerne aquele componente dentro da aplicação. Quando fazemos this, props, estamos acessando a chave props, dentro do objeto this, que irá conter as propriedades passadas àquele componente.


