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

Fazendo a ligação do this há função:
```
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState({
      numeroDeCliques: 1
    })
  }

  render() {
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
```

O Estado é atualizado de forma assíncrona pelo React, para garntir performance, logo o React não garante a ordem em que as atualizações ocorrerão. Se não for feita a atribuição corretamente podem ocorrer problemas.
Para garantir que siga a ordem correta, devemos aplicar o código seguindo a ideia de promises, para garantir que somente após o retorno da promise.
```
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
```

State vs Props

Props é uma forma de passar dados de pai para filho.

State é reservado para dados que seu componente controla.



