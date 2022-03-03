anotações pessoais...

# [Ciclo de vida de componentes](https://pt-br.reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods)

[Diagrama de ciclos](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Os componentes no React, possuem ciclos de vida, que são dividiso em 3 etapas:

Montagem - quando o componente é inicializado e inserido no DOM.

Atualização - quando o props ou estado do componente são alterados.

Desmontagem - quando o componente mrre, sumindo do DOM.

Principais métodos funcionam da seguinte maneira:

## Montagem:

**constructor** - recebe as props e define o estado;
**render** - renderiza o componente, inserindo-o no DOM;
**componentDidMount(prevProps, prevState, snapshot)** - dispara uma ou mais ações após o componente ser inserido no DOM.

## Atualização:

**shouldComponentUpdate((nextProps, nextState))** - possibilita autorizar ou não o componente a atualizar;
**componentDidUpdate** - dispara uma ou mais ações após o componente ser atualizado;

## Desmontagem:

**componentWillUnmount** - dispara uma ou mais ações antes de o componente ser desmontado.

fork - ricky and morty
fork - dog image

## Single Pages Application (SPA)

São páginas web, que não recarregam.

## props.children


## BrowserRouter e route

Não é nativo do React, é necessário instalar por npm install react-router-dom@v5 (@v5 seria a versao que será instalada).
É um componente que encapsula sua aplicação, de forma a te possibilitar fazer uso de navegação.

Route é o componente fundamental em React Router, que estabelece o mapeamento entre o caminho de URL declarado com o componente.

Atividade para fixar:
[fork - comprehension-exercises-router](https://github.com/davidrogger/comprehension-exercises-router)

## BrowserRouter e Route

Browserouter é usado para encapsular determinados componentes, e definir neles suas rotas para serem renderizados ele deve ser importado do react-router-dom, segue a seguinte sintaxe:
```
<BrowserRouter>
  <Header />
  <Route exact path="/" component={ Home }/>
  <Route path="/users/:id" render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> }/>
  <Route path="/about" component={ About }/>
</BrowserRouter>
```

Com o auxilio do route, foi determinado que o conteudo Header seria apresentado sem rotas, ou seja, não depende de nenhum caminho na URL, para ser apresentado, sendo estando sempre a mostra, ele vai ser responsavel pelos links para as rotas de Home, Users e About, nota ele tem que estar dentro do BrowserRouter para usarmos os Links nele, para direcionar os caminhos, dentro do Header foi importado o Link desestruturando do react-router-dom:
```
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>            
          </li>
          <li>
          <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
```
Foi determinado que ao clicar em Home, o caminho seria atualizado com o mesmo caminho da raiz, sendo a página inicial, e foi determinado o metodo exact, para que ela não apareça quando for acessado os demais caminhos, pois todos possuem o caminho inicial com /.

O segundo component no browser, foi usado uma forma de enviar para o component as props do route, que normalmente possui dados como history, location, e match, para mostrar a possibilidade de enviar os props para os componentes via route, caso necessário(ainda não foi exemplificado, quando seria usado, apensa demostrado que é possivel passar parametros via endereço caso necessário).

