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


