anotações pessoais do dia...

# TypeScript

É uma das 3 linguagem mais amadas pela [comunidade stackoverflow](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages)
É uma linguagem de programaçaão de código aberto desenvolvida pela Microsoft. Ela é um superconjunto (superset) do JavaScript, isso significa que pode-se utilizar todo conhecimento adquirido em JavaScript para desenolver em TypeScript.

É um superset do ECMAScript 2015, mais comumente denominado ECMAScript 6 ou ES6.
Sendo assim, todo código JavaScript também é código TypeScript, e um programa desenvolvido em TypeScript pode consumir o Javascript de forma direta.

## Por que a linguagem TypeScript foi criada?

JavaScript é, hoje a linguagem oficial da Web, sendo utilizada para criar aplicações multiplataforma que rodam tanto no navegador quanto em servidores, e até mesmo em dispositivos mobile e IoT (Internet of Things). No Entando, ela tem uma limitação: não foi concebida para a criação de aplicativos envolvendo milhares ou até mesmo milhões de linhas de código, pois ela não possui alguns dos recursos presentes em outras linguagens.

A linguagem TypeScript foi desenvolvida justamente para resolver as limitações do JavaScript, sem prejudicar sua capacidade de executar código em todas as plataformas.

# Tipagem

O grande recurso do TypeScript é o sistema de tipos. Em TypeScript podemos identificar o tipo de dado em variáveis, parâmetros ou retornos de funções utilizando a tipagem.

Tipagem, também conhecida como dicas de tipos, é a forma que utilizamos para descrever de qual tipo será o valor um componente do nosso código - exemplo: variáveis, expressões, funções ou módulos. Isso proporciona uma melhor documentação do código e permite que o TypeScript valide se ele está funcionando da maneira correta.

As tipagens podem ser categorizadas como:

## Tipagem Estática:

Não permite que a pessoa desenvolvedora altera o tipo após ele ser declarado e, geralmente a verificação de tipo é feita em tempo de compilação e essa é uma das caracteristicas do TypeScript.

## Tipagem Dinâmica:

Está ligada à habilidade da linaguagem de programação em "escolher o tipo de dado" de acordo com o valor atribuído à variável em tempo de execução de forma dinâmica não há essa caracterísitca na tipagem do typescript.

## Tipagem Forte:

Linguagens fortemente tipadas não realizam conversões automaticamente. Melhor dizendo, não é possível realizar operações entre valores de diferentes tipos, sendo necessário que a pessoa desenvolvedora faça a conversão para um dos tipos, caso seja possível, também uma caracteristicas do TypeScript.

## Tipagem Fraca:

A tipagem fraca tem a característica de linguagem de realizar conversões automáticas entre tipos diferentes de dados - ou melhor, operações entre valores de tipos diferentes podem ocorrer sem a necessidade de uma conversão explícita de tipo. Porém, o resultado pode não ser o esperado e erros podem ocorrer durante a execução, não é uma característica na tipagem do TypeScript.

## Inferência de tipo:

Algumas linguagens com tipagem estática podem fazer a inferência de tipo na declaração de variáveis, mas sem permitir que o tipo seja alterado após a declaração.
O TypeScript é uma dessas linageuns. Podemos usar a infêrencia de tipo, mas o compilador apresenta um error quando tentamos atribuir um valor de tipo diferente à variável. Isso porque ela penas realiza a inferência do tipo inicial da variável. Depois disso, como a linguagem possui tipagem estática, não é possível alterar o tipo.
TypeScript é uma linguagem fortemente tipada e estaticamente tipada que possui inferência de tipo.

# Diferenteça entre Compilador e Transpilador

Um Compilador é uma programa que traduz o código desenvolvido usando uma linguagem de mais alto nível (mais próxima dos seres humanos) em um código de um programa equivalente de uma linguagem de mais baixo nível (mais próxima do processdor).

Transpilador é um programa de sistema que traduz o código desenvolvido utilizando uma linguagem de mais alto nível em um código de um programa equivalente de uma outra linaguem de alto nível ou em uma versão diferente da mesma linguagem. Temos o J2CL que transpila código na linguagem Java para a linguagem JavaScript ou o Babel que transpila código ECMAScript 6 para ECMAScript 5.

Um transpilador também é considerado por algumas pessoas como um tipo de compilador que atua em um nível mais alto de abstração. Por isso, muitas vezes você verá pessoas dizendo que o TypeScript é uma linguagem transpilada por traduzir código TypeScript em código JavaScript, ambas linguagens de mais alto nível.

No entanto, o TypeScript possui um Compilador denimando TSC (TypeScript Compiler), que é responsável por fazer essa tradução. Além disso, a própria documentação da linguagem trata esse processo de tradução do código feito pelo TSC como compilação.

# TSC - TypeScript Compiler

É responsável por realizar a traduação do nosso código TypeScript para código JavaScript, responsável por realizar a verificação de tipo no código TypeScript.

Para isso precisamos instalar o TSC e o suporte do TypeScript em nossa máquina via npm, e utilizarmos o comando tsc seguido do arquivo que desejamos compilar e realizar a análise de tipo. Caso não deseje instalá-lo, você pode utilizar o comando tsc como um executável npx.

Para instalar globalmente: `npm i -g typescript`

Para executa-lo: `tsc nomeDoArquivo.js`

OU

`npx tsc nomeDoArquivo.ts`

A extensão ts é a extensão padoa para os arquivos TypeScript

Ao rodarmos esse comando, será verificado o conteúdo do arquivo nomeDoArquivo.ts e, caso nenhum problema seja encontrado, um novo arquivo será criado com o nome nomeDoArquivo.js e contendo o código compilado para JavaScript.