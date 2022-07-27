anotações do dia...

# POO

## Conceitos

Classe é o primeiro dos conceitos. Ele é utilizado para determinar algo genérico. Na programação orientada a objetos, toda classe tem como finalidade modelar com precisão a representação de uma entidade do mundo real.

Trazendo para programação: um atributo é uma variável criada numa classe, e um método é uma função criada numa classe.
Um método que parece destaque é o método construtor. Ele é rodado automaticamente na criação de um objeto, e serve para inicializar alguns atributos e chamar alguns métodos. Por exemplo, no nascimento de uma pessoa, os atributos altura e massa são definidos, e o método chorar é chamado.

# Pilares da POO

Possui quatro pilares fundamentais

1. abstração indica que você não necessariamente precisa saber os detalhes de como algo funciona. Pense por exemplo em uma câmera, provavelmente não se sabe todos os detalhes de como ela funciona, mas para operar você apenas precisa apontar, conferir no visor e apertar o botão. Uma atualização pode mudar detalhes do funcionamento da câmera, mas sua operação vai continuar essencialmente a mesma.

2. encapsulamento faz com que algunas atributos só possam ser acessador ou modificados dentro da classe. Pense na sua massa. Você pode diretamente, mudar sua massa. Não é possível você pensar "vou ter x kg" e você passar a ter essa massa. Entretando, algumas interfaces para alterar essa massa são expostas. Você pode comer para aumentar a massa, e dentro de você, sem que possa ditar como seu corpo irá se comportar, ele vai absorver as calorias do alimento. Ou seja, não é possível mudar diretamente a sua massa, pois ela é um atributo privado da classe Pessoa, mas existem métodos na classe Pessoa que permitem que a massa seja alterada de forma interna, como o método comer.

3. herança permite que classes filhas, que herdam métodos e atributos de outras classe (super classe), sejam criadas. Pense em uma classe Pessoa, com os atributos nome e altura e como o método sonhar. A partir dessa classe Pessoa, eu posso criar uma outra classe, chamada PessoaCantora, que herda de Pessoa. Ou seja já virá automaticamente com os atributos nome e altura e com o método sonhar, mas poderá ter outro método exclusivo dela, como cantar.

4. polimorfismo permite que coisas diferentes aconteçam ao chamarmos objetos de classes filhas distintas de uma mesma super classe. Por exemplo, pense que existe a classe Pessoa, que possui um método dormir, só que esse méotodo não é implementado (não possui nenhum código). Então são criadas duas outras classes: PessoaQueDormeDeBrucos e PessoaQueDormeDelado, e ambas implementam o método dormir conforme seus nomes. Se em algum lugar do código eu esperao um objeto da classe Pessoa, eu posso perfeitamente passar um objeto de uma classe filha (já que ele herda tudo que tem na classe Pessoa), ou seja, eu posso passar tanto um objeto da classe PessoaQUeDormeDeBrucos quando da classe PessoaQueDormeDelado. Como o código esperava um objeto da classe Pessoa, qualquer um dos dois servem, mas se o método dormir for chamado, ele irá se comportar de forma diferente.

