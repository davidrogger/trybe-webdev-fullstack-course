# Paradigmas de Programação

Mais do que uma maneira de organizar aplicações ou uma arquitetura, a Programação orientada a Objetos é compreendida no mundo da tecnologia como um paradigma de programação. Um paradigma de programação é uma forma específica de se pensar e de se abordar a solução de problemas.

## O que é um paradigma em programação?

Uma forma de:

- Pensar
- Organizar
- Escrever

Paradigma é um tipo de estrutura que a linguagem deve respeitar

## Quais paradigmas temos hoje

- Estruturado
- Funcional
- Orientado a objetos

# Porque POO?

- Reaprovetamento de código
- Facilidade na criação de sistemas complexos
- Boas práticas bem documentadas
- Facilidade de mapear o mundo real para o código

# O que são Objetos?

Objetos são entidades da aplicação, ou seja eles interagem entre si para solucinar os requisitos do sistema.

# Classes

Para arquitetar um objeto, definimos as classes, representam o modelo do objeto a ser construído. Ou seja: declarar um objeto é criar uma instância da classe.

# Métodos / Comportamentos

A classe, além de definir os atributos do objeto, também define seus métodos/comportamentos, por exemplo:

- Classe Carro [acelera, freia...]
- Classe Pessoa [se alimenta, respira, sente, ...]
- Classe Elevador [sobe, desce, abre e fecha, ...]
- Classe Relatório [imprime, se atualiza, calcula, ...]

# Método Construtor/Inicializador

Após modelada nossa Classe do objeto, podemos partir para o Construtor. Na maioria das linaguens, o construtor cria a instância do objeto e já inicializa os seus atributos.

Em python, esta operação é dividida em dois métodos:

- new (construtor)
- init (inicializador)

O Python já implementa estes métodos por padrão para cada nova classe criada. Mas, você pode implementá-los novamente, ou seja, reescrevê-los. É desse modo que customizamos nosso construtor/inicializador.

Basta recriar o método initi dentro da nossa classe, conforme exemplo a seguir:
```
class Liquidificador:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_no_motor = 0
```

O primeiro parâmetro, o self, representa a instância do objeto, ou seja, tem acesso ao objeto na memória. Como o método init, inicializamos os atributos do objeto apenas atribuindo um valor a cada nova chave.

Os próximos parâmetros são os que permitem criar de forma customizada nosso objeto, como a cor.

Criando:
```
liquidificador_azul = Liquidificador('Azul', 200, 127)
liquidificador_vermelho = Liquidificador('Vermelho', 250, 220)
```

É possível ter atributos que não precisam ser passados por parâmetros na chamada do construtor, por exemplo: os booleanos __ligado e __velocidade, pois o construtor vai iniciá-los sempre com um valor padrão, nestes casos, False e 0, respectivamente.

