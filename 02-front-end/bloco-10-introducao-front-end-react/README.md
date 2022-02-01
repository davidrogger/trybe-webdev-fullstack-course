anotações pessoas do bloco

# Bloco 10.1

## React

É uma das bibliotecas de criação de interfaces mais usadas no mundo, ela foi criada e mantida pelo facebook.
Ele surgiu atraveś de uma necessidade do Facebook, onde o código era grande e de difícil manutenção. Então foi desenvolvido uma solução escalável e eficiente. Com o tempo ela se tornou open-source. [História do react](https://medium.com/@ppternunes/a-hist%C3%B3ria-do-react-ba346c416fe1)
A principal ideia no React é tornar possível dividir a aplicação em pequenos blocos, reutilizáveis ou não, qque fazem a gestão das suas prórpias informações através do seu estado, reagindo a eventos, interações, dados, etc. Toda ve que houver uma mudança em um componente, o React atua especificamente na renderização dele, sem que seja necessário atualizar os outros blocos.

### NPM e NPX

NPM Node Package Manager, é um gerenciador de pacotes, usado para instalar pacotes em aplicações, NPX diferente do NPM, ele é usado apenas para executar o pacote, sem instalar ele.

#### create-react-app

Como é um pacote que a única coisa que ele faz é criar todos os arquivos necessários para termos um app React, não rodamos ele mais de um vez por projeto, nem precisamos do pacote instalado, por isso sempre executamos ele como NPX e não como NPM.

`npx create-react-app folder-name`

### JSx

Javascript Syntax Extension, é uma extensão de sintaxe para Javascript ele é recomendado na documentação do React, pois demonstra como a interface deverá se comportar de forma lógica e descritiva.

### ReactDOM.render

É responsável por renderizar e atualizar seu código dentro do HTML, exibindo seus elementos React.
Toda vez que fizermos uma alteração no código, seja por meio de função ou interação de quem usa, o ReactDOM, compara o elemento novo e seus elementos filhos com os anteriores e aplica mudanças somente onde é necessário.

Diferente dos elementos DOM do navegador, os elementos React são objetos simples e utilizam menos recursos.

### Classes

Em React os componentes podem ser divididos em Componentes de classe e Componentes funcionais. Quando um componente precisa ser alterado, utilizamos componentes de classe, para que possamos utilizar seus estados para realizar essas alterações. É importante lembrar que um componente de classe, no React, sempre estende o Component.

### Componentes

Compoentes são a base de toda aplicação React, nós permitem segmentar uma página web em blocos de códigos independentes e reutilizáveis, além de tornar o ambiente de desenvolvimento um local mais organizado.
Conceitualmente, compoentes React são funções ou classes JavaScript, que podem aceitar parâmetros, chamados de props(do inglês properties), e retornam elementos React responsáveis por determinarem o que será renderizado na tela.

Existem duas madeira de definirmos um componente:

Exemplos:

1. Via função JavaScript:
```
  function Greeting(props) {
    return (<h1>Hello, {props.name}</h1>);
  }

  export default Greeting;
```

2. Via classe :
```
  import React from 'react';

  class Greeting extends React.Component {
    render() {
      return (<h1>Hello, {this.props.name}</h1>);
    }
  }

  export default Greeting;
```
### Props

São umas das partes mais importantes de um componente, elas que passam os valores para o componentem, assim como os parâmetros de uma função.

### Keys

São importantes para que o React consiga indentificar com precisão, quais itens foram adicionados, removidos ou atualizados dentro de um array.

### PropTypes

Checagem de tipos, é importante para quando em um componente reutilizavel é usado uma determinada props de tipos especificos, fazendo a ausencia deles, quebrar o uso do componente. Usando PropTypes, caso seja notado a ausencia deles, é levantado um warning para constatar.
Para o uso do PropTypes é necessário importa-lo para o componente.

Exemplo:
```
import React from 'react';
import PropTypes from 'prop-types'; <<<<<<<<<<<<

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

export default Greeting;
```
Caso não tenha usado o `create-react-app` para preparar o aplicativo React, é necessário realizar a instalação da depedência `npm install --save-dev proptypes`.

E para checagem de tipos no componente Greeting, é adicionado a estrutura antes do export default:
```
Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

export default Greeting;
```

nessa estrutura indicamos os nomes que precisamos checar/tipar.
Em casos que seja obrigatório o uso de determinada informação, deve ser usado o isRequired para indicar que o uso é obrigatório.
```
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
```
Sempre que o componente for renderizado sem uma das props ou com alguma do tipo errado, um aviso será disparado.

Tipos de checagem:
```
MeuComponente.propTypes = {
  // Todos os validadores aqui são, por padrão, validadores opcionais.
  // Para torná-los obrigatórios basta adicionar .isRequired
  numeroObrigatório: PropTypes.number.isRequired,

  // Tipos básico do JS.
  stringOpcional: PropTypes.string,
  numeroOpcional: PropTypes.number,
  booleanoOpcional: PropTypes.bool,
  funcaoOpcional: PropTypes.func,
  objetoOpcional: PropTypes.object,
  arrayOpcional: PropTypes.array,

  // Um array de determinado tipo básico
  arrayDe: PropTypes.arrayOf(PropTypes.number),

  // Um objeto de determinado tipo básico
  objetoDe: PropTypes.objectOf(PropTypes.number),

  // Um objeto com forma específica
  objetoComForma: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // Um objeto que não permite props extras
  objetoComFormatoRigoroso: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
    avaibility: PropTypes.bool,
  }),
};
```
react System limit for number of file watchers reached

npm cache clear 

npm cache verify 

Ubuntu

sudo gedit /etc/sysctl.conf

Add a line at the bottom

fs.inotify.max_user_watches=524288

Then save and exit!

sudo sysctl -p

https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached