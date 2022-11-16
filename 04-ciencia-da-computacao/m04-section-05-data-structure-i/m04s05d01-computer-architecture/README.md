# Ada Lovelace e o primeiro programa de computador

A matemática, escritora e condessa Augusta Ada Byron King - mais conhecida como Ada Lovelace -, que nasceu em Londres no ano de 1815, foi a primeira programadora do mundo. Ela é responsável pelo primeiro algoritmo que foi usado por uma calculadora chamada de máquina analítica, o mais próximo do que seria um computador no começo do século XIV.

Ela sugeriu uma plano de como a máquina poderia calcular os números de Bernoulli, sequência matemática de números racionais profundamente relacionada com a teoria dos números. Este plano é considerado o primeiro programa de computador do mundo.

Em 1979, o deparamento de desafesa dos estados unidos desenvolveu uma linguagem de programação, e em homenagem à autora do primeiro programa que foi rodado em uma máquina, chamou a linguagem de Ada.

# Alan Turing e os primeiros computadores

Morreu um pouco antes de completar 42 anos de vida, cientista da computação, matemático, lógico, cripto analista, filosofo e biologo.
Um dos maiores feitos dele foi na realização da quebra de criptografia utilizada na guerra pela alemanha nazista na segunda guerra mundial.
A principal contribuição para parte de desenvolvimento, foram as máquinas de turing, o estudo dessas máquinas deu base para tudo que temos hoje com relação a processamento.
Máquinas de turing são dispositivos teoricos e hipotético, que não possuem limite de memória, permitindo com a entrada de qualquer tamanho, e sempre nos darão uma saida, diferente dos nossos computadores atuais que possuem uma memória ram limitada, elas são compostas por estados e transições.

# Máquinas de turing reconhecedoras

Uma classe que tem como caracteristica de uma determinada entrada, reconhece-la ou rejeita-la, isso pode ser abstraido para linguagem de programação, onde digitarmos nosso codigo no editor, ele poderá ser reconhecido ou não, ele poderá compilado ou não e as máquinas de turing fazem isso reconhecem a palavra, se elas fazem parte ou não do vocabulario de uma linguagem, podendo nos indicar problemas lexus ou de sintáticos e semânticos no código. Muito similar ao que acontece, quando executamos um código.

Turing definiu o conceito de algoritmo, que na época não era definido. Por meio dos estudos de Turing, podemos criar novas linguagens de programação, novos compiladores, novos frameworks entre outras coisas.

# Computadores Modernos

## Modelo de Von Neumann

Celulares, tables, video-games, smartwatches entre outros, funciona com base no modelo inventando em 1945 pelo matemático John Von Neumann, esse modelo define um computador como uma máquina que possui dois elementos principais: uma memória principal (como a memória RAM), onde podemos registrar e ler instruções e dados e um processador (CPU), responsável por buscar tais informações, realizar os cálculos e armazenar os resultados novamente na memória.

![Modelo de Von Neumann](./img/Modelo%20de%20Von%20Neumann.png)

# Lógica binária

O sistema binário foi inventando pelo matemático alemão Gottfried Leibniz, no século 18. Os computadores processam informações baseando-se no sistema binário com o que chamamos de bits. Um bit é a menor unidade em um sistema digital e pode assumir o valor 0 ou 1. Eletronicamente esse valor pode ser representado pela prsença ou ausência de tensão ou corrente elétrica.

O bit é representado por um "b" (minúsculo) é o agrupamento de 8 bits correspondem à 1 byte, representado por um "B" (maiúsculo). 1 byte é capaz de armazenar um valor decimal de 0 e 255 (000 000 e 111 1111).

Relembre também as unidades de medidas com a tabela abaixo:

![Unidades de medidas](./img/unidades%20de%20medidas.png)

- Convencionalmente, a presença de tensão ou corrente elétrica pode ser considerada como verdadeiro, 1, e a ausência como false, 0;

- Os dispositivos que podem se comportar como chaves eletrônicas são os transistores, onde a tensão ou corrente na entrada resulta na presença ou ausência de uma tensão ou corrente na saída;

- Transistores podem ser agrupados de maneira a formarem as portas lógicas NOT, AND, OR, XOR, entre outras. Estas porta slógicas apresentam, para uma mesma combinação de valores de entrada (conjunto de fios com ou sem tensão/corrente elétrica 0s e 1s), a mesma saída. As portas lógicas seguem a mesma ideia das condicionais utilizadas nas linguagens de programação, como podemos ver na tabela:

![Tabel verdade](./img/true_table.png)

- Portas lógicas podem formar circuitos de soma de bits. Daí temos adição, subtração, multiplicação, divisão, e assim sucessivamente, sempre seguindo a lógica binária.

# Memória Principal - RAM

É um dispositivo ou sistema usado para armazenar informações para uso imediato em um computador ou hardware de computador, ou, ainda, dispostivos eletrônicos digitais. o Termo memória é muitas vezes sinônimo do termo armazenamento primário ou memória principal. De maneira simples, pode-se dizer que memória é um conjunto de blocos endereçáveis que guardam dados.

# Memória principal: uma grande biblioteca

A memória principal pode ser vista como uma grande biblioteca, possuindo diversas prateleiras, cada uma com a capacidade de armazenar alguns livros. Para organizar e tornar fácil a localização de um livro entre os corredores e seções, cada prateleira possui um identificador único, um endereço, que permite que um livro específico seja facilmente localizado.

# Células

Essas diversas "prateleiras" são as células da memória principal, cada uma sendo capaz de armazenar uma informação (ou um fragmento de uma) e, para localizá-las, são utilizados seus endereços, os chamados ADDRESSES ou ADDR.

Cada célula pode armazenar diversas informações como dados para serem processados, incluindo endereço de outras células, instruções e resultados de processamentos. Essas informações são armazenadas em bits e as células possuem uma capacidade limitada de armazenamento: por exemplo, 8 bits (1 byte) por célula.

A capacidade total da memória é dada pela quantidade de suas células multiplicada pela capacidade de armazenamento de cada uma. Por exemplo, uma memória com 1024 células de 8 bits (1 byte) tem a capacidade de armazenar 1024 bytes (8192 bits), ou 1KB.

# Endereços

Cada célula possui um endereço único, que é chamado de address ou ADDR, e estes são um conjunto de números que, para o computador, é representado por um número binário como todo o resto, ou seja, utilizando somente os dígitos 0 ou 1.

A quantidade de dígitos utilizados para representar um endereço varia e, com ela, a quantidade de células endereçáveis. Se utilizarmos apenas 1 dígito, só poderemos localizar duas células, uma com endereço #0 e outra com o endereço #1. Se tivermos 2 dígitos, poderemos ter os endereços #00, #01, #10 e #11 e assim por diante. Normalmente a memória principal de um computador possui milares de endereços possíveis e mesmo computadores de pequeno porte possuem algumas centenas de células na memória.

O conceito de computador vai além dos computadores pessoais. Seguindo o modelo de Van Neumann, portanto essas características são válidas para diversos dispositivos, como seu smartphone, tablet, alguns computador de bordo de veículos, entre outros que usam essa arquitetura. As "máquinas de Turing" estão por toda parte.

# Processador - CPU

A unidade central de processamento, funciona em conjunto com a memória principal, lendo e executando as instruções e dados armazenados nela e gravando o resultado de tais processamentos.

# ULA (unidade lógico-aritmética)

É o componente responsável por realizar operações lógicas (como as realizadas pelas portas lógicas AND, OR, etc, entre outras operações lógicas) e aritméticas (como somas, subtrações, multiplicações, etc).

# Unidade de Controle

A unidade de controle é responsável por extrair dados da memória, decodificá-los e executá-los, consultando a ULA quando necessário.

# Registradores

O processador possui células internas de memória, chamadas de registradores. Neles, o processador vai armazenar os dados lidos da memória que está usando no processamento. As operações a serem realizadas também são representadas como números na memória, e um conjunto delas forma o que chamamos de uma instrução.

Exemplo: Ao realizar uma soma. A CPU funciona executando um loop desde sua inicialização, onde ela realiza a leitura de algumas instruções pré-definidas, executa elas e então passa a buscar e consequentemente a executar as instruções na memória.

A CPU pode ler da memória uma instrução, por exemplo, indicando para definir o valor do endereço #1000 0000 para 1000 1010. A partir disso, ela enviará um comando para a memória principal para atribuir o valor 1000 1010 para a célula de endereço #1000 0000. Da mesma forma, o processador consegue realizar outras operações matemáticas básicas buscando os dados de entrada e as instruções na memória e, então, salvando os resultados também na memória principal.

Dessa forma, tudo no computador é tratado como dados e instruções, sempre utilizando números através da representação binária.

Pense no que é um monitor de computador: uma matriz de pequenas luzes que chamamos de pixels.  Cada pixel é composto por três luzes: Uma vermelha (R) uma verde (G) e uma azul (B). Um byte codifica, em oito bits, o quão intensamente cada uma dessas três luzinhas deve se acender. Se quisermos exbir uma imagem em um monitor com resolução de 1280 pixels horizonstais por 720 pixels verticais (HD), são necessários 1280 x 720 x 3 = 2.764.800 bytes (quase 3MB) em memórias para armazenar a intensidade luminosa de cada luzinha presente no monitor. Realizando operações lógicas ou aritméticas nos valores armazenados na memória, mudamos a imagem que é exibida.
