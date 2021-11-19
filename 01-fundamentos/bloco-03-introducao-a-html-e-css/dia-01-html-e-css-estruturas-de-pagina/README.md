anotações do Bloco 3.1
# Desenvolvimento Web - HTML

HTML não é uma linguagem de programação e sim uma linguagem de marcação.
HTML pode ser considerado como o esqueleto/músculos do corpo, dando a estrutura e forma ao corpo.

### Surgimento

Comunidade científica com objeito de ajudar a compartilhar informação.
Desenvolvido por Tim Bernes-Lee e Robert Cailliau em 1989.

#### Principais versões do HTML foram

2.0 - 1995
3.2 - 1997
4.01 - 1999
HTML 5 - 2014 (trouxa diversos recursos, como colocar audio e video na página).

# Estrutura básica HTML

### TAGs

```
<nomeTag atributo="valor">
conteúdo da tag
</nomeTag>
```

Exemplo:

```
<p id="texto">
Olá Mundo
</p>
```

### TAG Estrutura HTML

```
**<!DOCTYPE html>** > Tag para identificar ao navegador que é um conteudo HTML, antigamente haviam mais informações.
**<html lang="pt-br">** > Representa todo conteúdo dentro da página HTML, "raíz" de tudo. dentro dela há um indicador de idioma, no caso português brasileiro.
  **<head>** > Parte de configurações da página, nem todo conteúdo é visivel no conteúdo da página, dentro deles possuimos as configurações a seguir.
    **<meta charset="UTF-8">** > Dentro do head, charset representa qual tipo de caracteres é usado na página, UTF-8, representa caracteres usados no idioma pt-br, casos como idiomas como chines, que possuem diferentes caracteres isso se alteraria.
    **<title>HTML</title>** > Como o proprio nome diz, seria a parte do título da página, seria o conteúdo apresentando na aba da página.
    > Também dentro da parte do head, possuimos o caminho para configurações CSS.
    > Também o caminho para o script das funções do JavaScript
  **</head>** > Fecha o Tag de configurações e conteudos do Head.
  **<body>** > É a tag onde mais iremos trabalhar dentro da página tudo dentro desse bloco, representa o conteúdo apresentando na página.
  </body>
</html>
```

### TAGs body

```<h1> </h1>```
Essa tag representa títulos no texto com a máxima prioridade 1, temos 2, 3, 4, 5 e 6. Usado normalmente para organizar melhor tópicos.

```<br>```
Tag adicionar uma quebra de texto, ela não precisa ser fechada com /, pois tem a função apenas de quebrar a linha(descer uma linha).

```<p> </p>```
Tag para definir um bloco de um paragrafo.

```<strong> </strong>```
Tag deixa o contéudo dela em negrito.

```<ul> </ul>```
ag para criar uma lista não ordenada(sem númeração), cada item da lista deve ficar dentro da tag `<li> </li>`.

```<ol> </ol>```
Tag para lista ordenada, seguindo o mesmo padrão do ul.

```<img src="">```
Tag para inserir uma imagem, entras aspas deve conter o endereço de onde a imagem está hospedada ou caminho se localmente existem algumas configurações extras nesse comando como o alt="", onde você pode adicionar algumas descrição na imagem.

```<a href="caminho-do-link" target=""> container </a>```

Tag para redirecionamento de endereços(links), dentro de seu "container" podemos inseruir o conteudo que queremos mostrar ao inves do link, podemos também adicioanr variações de ação no target, ao inves de atualizarmos na mesma página, podemos adicionar _blank, para abrimos a página em uma nova aba.
Também ao atribuir um ID em uma TAG, é possivel criar um link que posiciona a página em determinada posição da página, onde se encontra esse tag ID. `<a href="#css"> CSS</a>` ao clicar em CSS, seria direcionado a parte com ID CSS, `<p id="css"> </p>`