# Hashing

Significa transformar um dado em uma representação númerica única.É atribuir um id para um determinado dado, mas diferente de um id sequencial, a composição do dado influencia diretamente no id gerado. Para isso, precisamos submeter o dado a alguma transformação matemática que considere a sua composição.

Um exemplo do uso de hashing é a verificação da integridade do download. Ao realizar um download, existe a chance desse dado ser corrompido ou até mesmo alterado maliciosamente. Como forma de verificar se a cópia que chegou até você é exatamente a mesma cópia baixada, é possível comparar o resultado do hashing dos dois dados. Se forem iguais, o dado é igual. Se não, significa que algum detalhe desse dado está diferente. A operação matemática se chama hash function e o resultado da operação, no caso da verificação de integridade, é chamado de checksum (soma de verificação).

Por conferir essa segurança, o procedimento de hashing tem uso em criptografia, armazenamento de senhas e compressão de arquivos. Além disso, é usado na estrutura de dados hash map como forma de atribuir um endereço único para cada dado que se deseja armazenar. Nesse caso, vamos chamar o resultado da hash function de address.

# Usando Hashmap

A estratégia de armazenamento de dados da hashmap é submeter o dado a um procedimento matemática (hash function) para obter um endereço único onde ela será guardada(address). Na relação chave-valor, o id numérico da classe Employee é a chave e o objeto Employee inteiro é o valor. A hash function vai ler o valor da chave para definir o endereço do objeto como um todo.

# Colisão

Quando duas chaves diferentes resultam no mesmo address, exemplo, chaves 14 e 24, resultam no address 4, isso é chamado de colisão.

# Soluções:

## Separate Chaining

Caso um elemento recebe o mesmo endereço, basta adicionar na lista, Isso faz com que o cada bucket tenha seu próprio encadeamento de objetos.

## Complexidade

As inserções continuam com complexidade O(1), mas todos os demais métodos agora iteram sobre uma lista de tamanho variado, Caso o item de interesse seja a primeira posição(melhor caso), teremos O(1), mas isso raramente vai acontecer na vida real. No pior caso, será o último, resultando em uma complexidade proprocional ao tamanho da lista que está naquele endereço, o que é uma performance pior do que O(1).

Combinando hash com separate chaining, fez com que o acesso à informação não fosse exatamente O(1). Isso demonstra como a análise de complexidade na vida real é mais complicada do que na teoria. E o mais importante: demonstra como as decisões de implementação de cada estrutura de dados afetam a performance final.

# Open Addressing com Linear Probing

É onde o endereço final não é conhecido e o hashcode é utilizado apenas para iniciar a busca de um bucket vazio dentro da própria lista de buckets. Essa busca por um espaço vazio pode ser feita de diversas maneiras.

Quando a busca por um espaço vazio é feita olhando um índice após o outro, é chamada de Linear probing, mas existem vários outros métodos de busca pelo espaço vazio, incluindo cálculos matemáticos mais complexos para ir "saltando" de índice em índice.

Exercício 3: Descubra qual técnica de tratamento de colisão é utilizada pelo Dict, de Python e o HashMap, do Java. Em inglês, o termo de busca é “collision resolution“.

A classe Dict do python usa Open Addresing e Java utiliza Separate Chaining.

Dict, utiliza a técnica de tratamento de colisão chamada Open Addressing e busca  o próximo espaço vazio em duas fases. Ambas as fases utilizam a representação binária da chave e aplicam formulas matemáticas para definir o próximo índice a ser visitado.

A classe HashMap, de Java, utiliza a técnica de Separate Chaining, mas quando a lista do bucket começa a ficar grande, Java substitui essa lista por uma [Árvore Binária de busca](https://pt.wikipedia.org/wiki/%C3%81rvore_bin%C3%A1ria_de_busca), mais eficiente do que uma lista para operações de busca.

Exercício 4: Como as diferentes implementações afetam a performance? Quais são os prós e contras da implementação de cada linguagem?

A solução do Python determina o próximo índice a ser visitado de maneira relativamente randômica e resulta em uma complexidade assontótica de tempo de O(1). Por outro lado, para evitar que o vetor buckets, fique rapidamente sem espaço, um Dict é inicializado com uma lista de tamanho 2**15 ints. Como em Python cada int ocupada 24 bytes, no mínimo, o uso de memória é consideravel.

Em java, o tamanho inicial é menor, uma vez o que tende a crescer são as chains, de cada bucket e não a lista de buckets. Por outro lado, temos o trade-off com o custo de tempo. Para cada consulta, o tempo de busca é proprocional à quantidade de itens naquela bucket que sendo uma árvore, chega a O(log n).

Python tem complexidade mais baixa, mas gasta muito espaço. Java utiliza bem melhor a memória, porém tem maior complexidade para consultas.

# Dict de Python

São estruturas de dados do tipo chave-valor que são implementados como hashmaps por baixo dos panos. A combinação de hash functions e tratamento de colisões do Dict garantem uma complexidade assintótica de O(1) para inserção de consulta. São estruturas muito eficientes, versáteis e poderosas. O Dict considera verificações importantes como a existência de apenas uma chave, bem como fornece diversos métodos convenientes para acesso e manipulação dos dados.

Apenas objetos imutáveis podem ser utilizados como chave, ou seja, apenas aqueles objetos que depois de instanciados não podem ser alterados. Isso varia de linguagem para linguagem. Em python, os objetos imutáveis são: int, float, string, tuple, range, byte e frozenset.

# Exemplos de aplicações que usam Hashmaps

## Resolução DNS

Ao acessar um website com o endereço [http://adit.io.](http://adit.io.). O computador deve traduzir adit.io para a forma de enreço de IP. Para cada website o endereço deverá ser traduzido para um endereço de IP.

Mapear o endereço de um website para um endereço IP é um caso de utilização de tabelas hash. E as tabelas hash são uma das maneiras pelas quais esta funcionalidade pode ser implementada.

# Cache

A cada pergunta que você não sabe você precisa pesquisar uma resposta, e só então você consiguirá responder, logo você terá memorizado. É desta forma que o cache funciona: os websites lembram dos dados em vez de recalculá-los a cada solicitação.

Esta técnica é uma maneira comum de agilizar as coisas. Todos os grandes sites usam caching, e os dados destes cachings são armazenados em uma tabela hash.