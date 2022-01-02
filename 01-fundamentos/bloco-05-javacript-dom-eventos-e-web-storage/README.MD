anotações pessoais...
# DOM - Document Object Model

Pode ser dizer que é uma representação orientada a objetos da página web, que pode ser modificada pela linguagem script, no caso javascript.

![Estrutura DOM](./dom-estrutura.jpg)

**Window:** representa um elemento que comtem o dom, sendo possivel acessar o documento que a janela possui pelo window;

**location:** é a localização ao qual o objeto está associado;

**document:** representa qualquer página web carregada no navegador, contém todos documentos HTML;

**history:** permite manipulação do histórico da sessão do navegador, páginas acessadas ou página atual carregada.

**element:** são todas tags do HTML transformadas em um elemento da árvore DOM.

**text:** fica entre os elements é todo conteúdo das tags

**atribute:** são todos atributos que um nó especifico possui como class ou id.

## Seletores de elemento

### document.ElementById()

Usado para coletar a informação HTML, de uma determinada TAG, por meio de sua ID, porém ela retorna toda informação HTML.
Exemplo:
```
document.getElementByID('paragraph');
<p id='paragraph'> texto <strong> texto negrito </strong> </p>
```
Existem propriedades para alterar a forma como é coletado esse tag.

#### innerHTML
`document.getElementByID('').innerHTML;`
Coleta a informação HTML interna da TAG, no caso do exemplo acima, não apareceria o tag P, somente o negrito strong.
```
document.getElementByID('paragraph').innerHTML;
texto <strong> texto negrito </strong>
```

#### innerText
`document.getElementByID('').innerText;`
Coleta somente o texto, sem nenhuma tag que esteja interna aquela tag ID apontada.

Existem outras propriedades inner, que serão apresentadas.


### document.ElementsByClassName()

Seria a coleta de varios elementos definidos por classe e eles são organizadas em lista (array), mesmo que tenha apenas 1 TAG com a classe, ele organiza em forma de lista, por indices.

Exemplo de acesso de informação:
coletei a informação e coloquei ela dentra de uma variavel.
`let classArray = document.getElementsByClassName('nomeDaClasse');`
Para acessar a primeira informação coletada, seria por meio do seu indice.
`classeArray[0]`

### document.ElementsByTagName()

Sempre retornada em forma de lista de elementos mesmo sendo um TAG.

### document.querySelector()

Ela puxa apenas um elemento, e esse é o primeiro elemento da "chamada", ela trabalha com seletores do CSS.
Com os seletores como Class e ID, apenas indicamentos o nome do ID ou classe, no apontamento, usando query, precisamos apontar qual tipo que ele é, assim como no CSS, usando ponto para .classes e # para #ID.

### document.querySelectorAll()

Segue os mesmos padrões do querySelector, mas coletando dados em lista (vários itens).

#### querySelector

Abrange muito mais que apenas classes e ID, temos todos seletores disponiveis CSS para usar como referencia.

### Buscando elementos

#### .parentNode

Usado para visualizar (ele funciona somente para leitura), o elemento pai de um determinado document, apontado `document.querySelectior('.ingredient-item li').parentNode`, essa classe foi atribuida há um item da lista acessando o primeiro item da lista, adicionando o parentNode, seria mostrado quem é o "pai" desse item da lista, e sempre que for adicionado .parent, vai escalando para o pai do pai, existem outras formas de chamar as propriedades.

01. parentNode = retorna o **nó** pai.
02. parentElement = retorna o **elemento** pai.
03. childNodes = retorna um NodeList com todos os **elementos** filhos.
04. children = retorna um HTMLCollection com todos os **elementos** filhos.
05. firstChild = retorna o primeiro **nó** filho.
06. firstElementChild = retorna o primeiro **elemento** filho.
07. lastChild = retorna o último **nó** filho.
08. lastElementChild = retorna o último **elemento** filho.
09. nextSibling = retorna o próximo **nó**.
10. nextElementSibling = retorna o próximo **elemento**.
11. previousElementSibling = retorna o **elemento** anterior.

### Criando elementos

#### createElement()

`document.createElement()` Usado para criar o elemento que queremos, entre parenteses fica o tag desajado exemplo para criar uma TAG li, para inserir em uma TAG de lista, seja ul ou ol:
`let listHTML = document.querySelector('.ingredients')` coletando a info da ul que está na classe ingredients.
`let listItem = document.createElement('li')` cria o li
`listItem.innexText = textItem` adiciona o conteudo da variavel no li.
`listHTML.appendChild(listItem);` insere o conteudo li no pai listHTML.

removeChild() = remove a tag desejada
variavel.innerText.inclusdes('palavra_desejada') = busca dentro do innerText uma palavra, é usado no video uma if, para se for verdadeira a condiçẽso dentro do parentezes, ele remover o item da lista com removeChild.

### Eventos

[Link com lista de eventos](https://www.w3schools.com/jsref/dom_obj_event.asp)

`variavel.addEventListener('evento desejado', função será realizada)`

parametro.target = mostra quem foi que acionou a função.
parametro.type = mostra qual tipo de evento.

## Web Storage

Mecânismo que permite aplicações web salvar dados no navegador da pessoa. Antes do HTML 5, as aplicações tinham que salvar os dados locais em cookies, para serem enviados para o servidor a cada requisição do navegador.

### Cookies

Quando o servidor envia a página para o navegador, a conexão é desligada e o servidor não tem mais acesso às informações da requisição, como os itens que a pessoa uadicionou ao carrinho de compras ou e-mail que lhe dará acesso a sua conta. Os **Cookies** foram inventados para salvar dados das pessoas usuária no prórpio navegador, dessa forma a página consegue acessar e executar parametros personalizados por pessoa.
Cookies são salvos no formato chave-valor. Quando o navegador faz uma requisição ao servidor, para acessar uma página, os cookies dessa página são adicionados à requisição, assim o servidor tem acesso aos dados da pessoa.
É psossivel criar, ler ou deletar cookie, pela propriedade `document.cookie`.

`document.cookie = "email=isabella@email.com";`
armazena o e-mail, porém quando fechado o navegador esse cookie será apagado por padrão, há possibilidade de determinar uma data para manter o dado.

`document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2021 12:00:00 UTC";`

É possivel definir um parâmetro path, para dizer ao navegador qual caminho o cookie que você criou pertence, por padrão ele pertence à página atual:

`document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2021 12:00:00 UTC; path=/";`

É possivel também armazenar um cookie em uma variável;
```
const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com
```

Também é possivel alterar o valor do cookie, atribuindo um novo valor;
`document.cookie = "email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";`

E para apagalo, não é necessário atribuir um valor, basta adicionar uma data de validade, que ja passou;
`document.cookie = "email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;"`

## Local e Session Storage

#### LocalStorage

Salva os dados sem data de expiração, os dados não serão removidos, quando o navegador foe fechado, ficarão disponveis até serem removidos manualmente.

**sessionStorage** salva os dados apenas na sessão atual, os dados são removidos assim que a pessoa fecha a aba ou o navegador.
```
console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
sessionStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(sessionStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(sessionStorage.length) // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(sessionStorage.length) // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
```

função para adicionar o item ao localStorage;
`localStorage.setItem('chave', 'Valor');`

função para acessar um item;
`localSorage.getItem(nomeDachave);`

função para deletar um item:
`localStorage.removeItem('chave');`

função para limpar toda informação no local.
`localStorage.clear();`

#### sessionStorage

Possui as mesmas funções do localStorage, porém somente durante a sessão, após fecharmos a aba ou o navegador, será apagado.