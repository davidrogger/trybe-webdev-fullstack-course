anotações do dia...

# Os princípios SOLID

É o acrônimo para cinco princípios que, se aplicados de maneira conjunto e inteligente, geram solidez e durabilidade para sua arquitetura como um todo.

- [Artigo científico escrito por Robert C. Martin](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf)

Definições originais:

- Single responsability principle: uma entidade (classe, método, funções) deve ter apenas uma única responsabilidade.

- Open/Closed principle: entidades de software devem ser abertas para extensão, mas fechadas para modificação.

- Liskov substituition principle: objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa. (nome da autora que descreveu o principio em 94).

- Interface segregation principle: interfaces específicas são melhores do que uma única interface para todos os propósitos.

- Dependency inversion principle: entidades de alto nível não devem depender de entidades de baixo nível. Ambos devem depender de abstrações.

Nada que está aqui é obrigatório ou proibido, mas sim como recomendado ou não recomendado.
Existem situações em que pode fazer sentido ignorar um desses princípios.
Ter em mente que ao escrever um código, o objetivo é torná-lo fácil de ser entidodo e fácil de ser mentido.

# Single Responsability Principle

Cada função ou classe deve ter uma responsabilidade única, deve-se analisar os verbos aplicados em cada um, seja, criar, atualizar, escrever, etc e quebra-los de forma separada e organizada.

