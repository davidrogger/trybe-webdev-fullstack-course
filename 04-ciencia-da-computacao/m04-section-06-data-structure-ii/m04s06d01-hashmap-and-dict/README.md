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

