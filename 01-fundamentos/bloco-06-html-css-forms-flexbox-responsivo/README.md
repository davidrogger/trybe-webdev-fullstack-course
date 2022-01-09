anotações pessoais...

# BLOCO 06 - HTML e CSS: Forms, flexbox e responsivo

## HTML & CSS - Forms

Formulários HTML, são usados para enviar informações para outra página do seu site, para um servidor.

### Estrutura

```
<forms action'' method="GET ou POST">

</forms>
```

Por padrão o forma ja vem com a propriedade action, que é onde colocamos para onde o formulário seré enviado.

### Method = POST & GET

#### POST

Envia informação ocultamente.

#### GET

Dados são enviados atraves da URL.

## Bibliotecas Javascript e Frameworks CSS

### CDN

Content Delivery Network(Rede de distribuição de conteúdo). São redes de servidores com replicas de conteúdo que ajudam no tempo de resposta de aplicações e sua segurança.

### Flexbox

Tem como finalidade facilitar o conoortamento de itens dentro de um container, de forma mais responsiva, devido a grande variedades de tipos e telas que existem hoje, celulares, tablets e computadores.

#### Display: Flex

Define aquele container como um container flex, fazendo os itens dentro dele se tornarem itens flex.
flex-direction: define a direção dos itens, row, row-reverese, column, column-reverse.
wrap: quando ativo, proporciona o ajuste dos itens dentro do container, conforme o espaço livre de largura.
justify-content
align-items
align-content

# Media Query

Técnica adicionada no CSS 3, que permite adicionar uma mídia no CSS, para adicionar um bloco se a condição for verdadeira.

AT-RULE, indica como ele deve se comportar em uma determinada condição.

Tipo de media, onde pode ser espificado que tipo de media, por padrão é definido como todas as medias.(all, print, screen, speech).

Operador Lógico, and, ',' e not.

Media Features:
1 - Viewport min-width, max-width
2- Display quality, resolution, scan, grid
3 - Color: inverted-corlos, monochrome
4 - Interaction: any-pointer, any-hover

aplicando condção no CSS
`@media screen and (max-width: 768px) {}`

aplicando condições que determinal qual arquivo CSS vai ser chamado em determinada condição.
`link rel='stylesheet' href='' media='screen and (max-width: 768px) and (min-width: 460px)'>`

`backgroun-color: white !important;` forma de ignorar a regra cascata do CSS, definindo que determinada linha tem prioridade, mesmo vindo antes da proximas regra no CSS.