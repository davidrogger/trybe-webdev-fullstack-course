anotações pessoais do bloco 3.2

# CSS
Cascading Style Sheets
Linguagem usada para estilizar o site, definindo padrão de cores, tamanhos tudo relaciona a aparencia do site.

### Como aplicar os estilos

Existem três formas para aplicar os estilo:
<ol>
<li>Primeiro seria o inline não é algo que não é indicado se usar na maioria dos casos, que seria adicionando o estilo do texto dentro da propria TAG. </li>
<li>Segundo criando a tag `<style> </style>` dentro do campo head </li>
<li>Terceiro e mais indicado e usado, é usando o código `<link rel="stylesheet" type="text/css" href="caminho/nome_do_arquivo">. </li>
</ol>

### Explicações do dia

#### Como aplicar/indicar o estilo:

A aplicação dos estilos pode ser feita, por meio da TAG, você pode definir o h1, body, p, ul etc... o tag em si, para definir que ele terá determinada cor de fonte ou fundo, também por ID ou classe.

#### Fonte de letra

Por meio da `font-family` é possivel indicar tipos de estilo de fonte, usando estilos como **serif**, **sans-serif**(existem diversas outras fontes gênericas, fontes citadas, *cursive, fantasy, monospace*), são estilos de fonte genericas, que usando o padrão do computador da pessoal que está usando, por isso, muitas vezes a fonte que você vê pode ser diferente de outra pessoal, mas você pode definitr alguma fonte especifica, para ter certeza que a pessoa está visualizando a mesma fonte que você, mas ela só funciona se a pessoa tiver a fonte especificada, caso não, o navegador ignora a propriedade, nesse caso há a possibilidade de adiconar uma fonte reserva na ausência da principal não existir, basta adicionar uma virgula após a principal e adicionar outro estilo de fonte.

##### Tamanho da Fonte

Usando o comando `font-size` é possivel aumentar o tamanho da fonte da tag ou referencia utilizada para definir o tamanho de uma fonte, por meio de diversos tipo de tamanho, é apresentando na aula o pixel(px) e o **em** que seria uma indicação de proporção, é indicado sem muitos detalhas que existe uma hierarquia para aplicação do estilo, então se usarmos esse **em** dentro de um h2 que está dentro de um body, usando a definição de 2em, o tamanho do h2, seria 2 vezes o tamanho da fonte usada no body.

##### Negrito, Itálico

Também é possivel definir atrás do comando, `font-weight` strong ou bold para negrito e `font-style` italic, para itálico.

##### Espaçamento entre linhas

Comando `line-height` você pode definir o tamanho da linha, aumento o espaçemtento entre elas.

#### Alinhamento do texto

Usando o comando `text-align` é possivel definir, o alinhamento do texto, como centralizado, direito, esquerdo, justificado.

<br>
<br>

Site csszengarde.com apresentando para demonstrar o poder do CSS, usando o mesmo contéudo.

