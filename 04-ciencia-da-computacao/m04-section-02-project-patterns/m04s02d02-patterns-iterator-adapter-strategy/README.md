# O que são Padrões de Projeto

É uma forma já pensada e organizada para solucionar um determinado desafio no desenvolvimento. Desde a década de 70, cientistas da computação perceberam que, ainda que em contextos diferentes, algumas soluções de problemas se repetiam em vários softwares. Visando facilitar a reutilização do desenho, da solução e a comunicação, assim como melhorar a documentação e compreensão de um sistema, essa comunidade de cientista começo a catalogar estes padrões.

# Classificação dos Padrões de Projeto

O principal livro de referência de Padrões de Projeto, o **Design Patterns da GOF**, aborda 23 padrões e os classifica em três categorias. Veremos cada uma delas a seguir.

## Padrões de Criação

O foco é em como os objetos são criados e como criar objetos flexíveis que podem ser facilmente reaproveitados.

Exemplo deste padrão de criação é o **Factory**.

# Padrões Estruturais

O foco está no design da estrutura de objetos e de c lasses, simplificando e identificando o relacionamento entre eles. Utilizam-se fortemente os conceitos de Herança e Composição.

# Padrões Comportamentais

Foca em como os objetos interagem entre si e suas responsabilidades. Exemplo são o Iterator e o Strategy.

# Iterator

Não importa se a sua coleção está em forma de array de árvore, se é uma lista de inteiros, objetos. Ao garantir que sua classe possui um iterador, você garante que ela tem uma função next que vai acessar o próximo elemento da sua coleção. Ao seguir o padrão de projeto, você organiza seu código e o seu raciocínio de uma forma pensada, estudada e comprovadamente eficaz.

O iterator representa o exemplo mais básico a respeito dos padrõa de projeto, mais ilustra bem o seu propósito.

# Adapter

É um padrão que permite converter a interface de uma classe em outra interface, esperada, permitindo interfaces incompatíveis trabalharem em conjunto o que de outra forma, seria impossível.

A aplicação aumenta o nível de complexidade como consequência, pois foi inserido novas interfaces e classes. Mas o desacoplamento entre o código do cliente e o objeto adaptado se mantém. Mudanças no objeto adaptado refletem apenas no adaptador e não no código cliente. Logo, nenhuma lógica existente é alterada para adicionar a funcionalidade, ainda é possível substituir o serviço adaptado atráves de criação de novos adaptadores.

Classes se comunicam atráves de troca de mensagens. Entretanto, nem sempre isso é possível de se fazer diretamente: às vezes há uma incompatibilidade entre as classes, seja devido a um código legado ou mesmo contextos distintos.

Quando as mensagens que as classes utilizam para se comunicar estão em "interfaces distintas", não podemos simplesmente mudar a interface. Isso iria quebrar todos os outros lugares em que esta classe é utilizada! Usar uma terceira entidade, que faz a "tradução", é normalmente a saída mais organizada e indicada.

