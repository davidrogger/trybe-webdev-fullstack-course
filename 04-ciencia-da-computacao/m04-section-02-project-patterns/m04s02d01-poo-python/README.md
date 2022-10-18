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

# Encapsulamento e Abstração

O encapsulamento é um dos pilares da orientação a objetos. Por meio dele, podemos simplificar significativamente a programaçaão, bem como proteger informações sigilosas ou sensíveis.

Em Python, não temos as já conhecidas palavras reservadas: public, private e protected que são utilizadas em outras linguagens para declarar um atributo. Porém existe uma convenção para indicar que a acessibilidade é privada: basta nomear um método ou atributo com o prefixo __ (dunder/double underscore), como vimos nos atributos __ligado, __cor, __peso.

Podemos criar os métodos ligar e desligar e daremos poderes para que eles consigam manipular os atributos.

Exemplo:

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

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado
```
Se agora chamarmos o método ligar, não temos a necessidade de conhecer o cálcula interno. Este conceito é chamado de Abstração, sendo positivo durante a programação pois deixa os códigos mais limpos.

A abstração de dados oculta os detalhes da implementação e mostra apenas a funcionalidade para o usuário, a fim de reduzir a complexidade do código.

Exemplo:
```
liquidificador_vermelho - Liquidificador('Vermelho', 250, 220, 100)
liquidificador_vermelho.ligar(1)
print('Esta ligado? ", liquidificador_vermelho.esta_ligado())
# Está ligado? True

liquidificador_vermelho.desligar()
print('Esta ligado?', liquidificador_vermelho.estaligado())

#Esta lgiado? False
```

# Getters e Setters

Métodos responsáveis por recuperar o valor de uma propriedade do objeto (Getter), e o método para alterar o valor em um atributo (Setter).

Exemplo:
```
class Liquidificador:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado - False
        self.__amperagem_atual_no_motor = 0

    # Getter
    @property
    def cor(self):
        return self.__cor
    
    # Setter
    @cor.setter
    def cor(self, nova_cor)
        self.__cor = nova_cor


liquidificador = Liquidificador('Azul', '110', '127', '200')

# print(f'A cor atual é {liquidificador.__cor'})
# AttributeError: 'Liquidificador' object has no attribute '__cor'

print('f'A cor atual é {liquidificador.cor}')
liquidificador.cor = 'Vermelho'
print(f'Após pintarmos, a nova cor é {liquidificador.cor}')
```

O acesso ao atributo privado liquidificador.__cor gera um erro, mas podemos criar um método com o nome do atributo cor e decorar ele com o @property para facilitar o acesso de fora liquidificador.cor.

É possíve assim criar um outro método com o nome cor e decorar com @cor.setter. A partir disso a atribuição liquidificador.cor = 'Vermelho' passa a funcionar

Por que deixar um método privado acessível para alteração de fora?

A lógica de negócio pode pedir em algum momento, Digamos que o cliente não pode alterar a cor, mas a assistência técnica autorizada pode.

# Composição

É atribuir o objeto de uma classe a outra, gerando assim um relacionamento de pertencimento entre eles.

Exemplo:

```
class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
    
    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador
```

A classe pessoa tem o método específico para comprar seu liquidificador:
```
pessoa_cozinheira = Pessoa('Jacquin', 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
```

# Imprimindo uma instância de uma classe

Ao imprimir a instância de um objeto, o Python exibe a posição de memória do objeto.

Exemplo:
```
print(pessoa_cozinheira)
# retorno: Pessoa object at 0x7f53bbe1b580>
```

Uma forma de melhorar esta apresentação, é implementar o método `__str__` para que a classe que deseja imprimir. Assim o Python substituirá o print padrão pelo retorno que você desejar.

Exemplo:
```
class Pessoa:
...
    def __str__(self)
        return f'{self.name} - possui {self.saldo_na_conta} reais em sua conta.'

print(pessoa_cozinheira)
# retorno: Jacquin - possui 900 reais em sua conta.
```

# Herança

Pensando em eletrônicos, alguns deles possuem características em comum. Com isso, podemos perceber que para o construtor da geladeira, televisão e liquidificador, sempre teremos atributos idênticos.

Herança é especializar o comportamento de uma classe, ou seja, a classe herdeira é tudo que a classe ascendente é e talvez um pouco mais!

Exemplo:
```
class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True
        
    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0
    
    def esta_ligado(self):
        return self.__ligado
    
    # Getter
    @property
    def cor(self):
        return self.__cor

    # Setter
    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor
```

Em python, para declarar que um objeto herda as características de outro, basta na declaração da classe passarmos como primeiro parâmetro a classe que será herdada.

Exemplo:
```
class Liquidificador(Eletrodomestico): # Herança
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)
    
class Geladeira(eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, quantidade_de_portas=1)
    super().__init__(cor, potencia, voltagem, preco)
    self.quantidade_de_portas = quantidade_de_portas

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
    
    self.eletrodomesticos = []

    def comprar_eletrodomestico(self, eletrodomestico: Eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)
```