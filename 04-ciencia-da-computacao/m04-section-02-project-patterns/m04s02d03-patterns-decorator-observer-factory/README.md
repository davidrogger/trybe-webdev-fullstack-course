# Padrão Decorator

É um padrão de projeto estrutural que permite adicionar novos comportamentos e responsabilidades aos objetos de forma flexível.
Tornando possível adicionar ou remover comportamentos dos objetos de forma dinâmica, sem o risco de precisar alterar códigos já testados.

# Padrão Observer

É um padrão comportamental, pois o foco é sobre as responsabilidades dos objetos. Uma classe observadora se responsabiliza por monitorar outro objeto. Uma classe observadora se responsabiliza por monitorar outro objeto.
Assim, quando ocorrer alguma alteração ou eventos no objeto monitorado, o observador vai notificar os demais objetos do sistema.
Exemplificando com o facebook, quando recebemos uma nova mensagem, quantos objetos são atualizados?
Será que cada objeto componente fica consultando o objeto lista de Mensagens a cada segundo?
Podesse dizer que o React Redux pode ser considerado uma implementação do padrão observer, onde um objeto notifica os demais sobre essa atualização.


## Aplicando o Padrão Observer:

```
class Perfil:
    def __init__(self):
        self.__sistemas_de_notificacao = []
        self.__new_post = None

    def adicionar_sistema_de_notificacao(self, sistema):
        self.__sistemas_de_notificacao.append(sistema)

    def notificar_todos(self):
        for sistema in self.__sistemas_de_notificacao:
            sistema.notificar()

    def adicionar_post(self, post):
        self.__new_post = post
        self.mostrar_post()
        self.notificar_todos()

    def mostrar_post(self):
        print(f"\nPost: {self.__new_post}\n")
```

Para implementar o padrão Observer, precisaremos criar as classes observadoras que acompanharão o objeto Perfil, observando se ele ganha um novo Post. Quando verdadeiro, cada observador vai disparar as notificações.

Criaresmo então, uma classe Observador para cada sistema de envio. Como a estrutura dessa classe será parecida, será criada uma interface abstrata, garantindo que exista o método notificar()

```
from abc import ABC, abstractmethod

# Interface Observer
class Notificador(ABC):
    @abstractmethod
    def notificar(self):
        pass

# Observador Mensagem
class NotificadorMensagem(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Notificando via Mensagens: {self.seguidores}")

# Observador Push Notification
class NotificadorPushNotification(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Push Notification para: {self.seguidores}")

# Observador Email
class NotificadorEmail(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Email's para: {self.seguidores}")

```

Agora pdoemos usar o código como o padrão Observer, O código ée conhecido na literatura como código Cliente:

Agora analisando as notificações de cada seguidor:

Exemplo:

1. Carlos quer ser notificado por mensagem

2. Marcia e Claudia querem ser notificadas por mensagem e email

3. Rodolfo quer ser notificado somente por mensagem

```
# Cliente
if __name__ == "__main__":
    seguidores_mensagem = ["Carlos", "Claudia", "Marcia", "Rodolfo"]
    seguidores_push_notification = ["Carlos"]
    seguidores_email = ["Claudia", "Marcia"]

    meuPerfil = Perfil()
    NotificadorMensagem(meuPerfil, seguidores_mensagem)
    NotificadorPushNotification(meuPerfil, seguidores_push_notification)
    NotificadorEmail(meuPerfil, seguidores_email)

    meuPerfil.adicionar_post("Olá universo da programação!")
```

O uso de meuPerfil.adicionar_post() é suficiente para realizar as notificações. Inclusive ainda podemos notificar as pessoas seugidoras a qualquer momento chamando diretamente meuPerfil.notificar_todos().Podemos ativar/desativar as formas de notificaçãoes apenas alterando um bloco parcial de código, sem precisar alterar o método notificar_todos(). Esta facilidade é conhecida como baixo acoplamento e facilita muito as manutenções futuras.

# Padrão Factory

Pode ser divido entre dois padrões classificados como padrões criacionais:

- Factory Method: um padrão que implementa uma interface responsável por fabricar ou criar outros objetos.
- Abstract Factory: um padrão que permite produzir famílias de objetos relacionados. Por exemplo, considere que uma fábrica pode produzir diversos carros e diferentes tipos de motores. Essa estrutura simplifica a construção de um objeto Carro, ajudando na combinação dos diferentes elementos.

### O padrão factory pode ser usado para:

- Substituir as Fixtures, a fim de facilitar a criação de testes;
- Simplificar a criação de objetos diferentes, pois dispensa conhecer os métodos e parâmetros da fábrica;
- Caso um novo tipo de objetos surja na regra de negócio, é fácil adaptar para que a fábrica também o produza;
- Fazer uso do princípio de reponsabilidade única (SOLID), já que o código de criação do objeto se concentra em um único lugar.

# Aplicando o padrão factory

Usando uma hamburgueria como exemplo para criação de um sistema de combo de lanches.

Um factory é uma classe de Interface Criadora, que é herdada por fábricas criadoras concretas;

Criando uma classe abstrata, que será a interface base para as classes dos itens do cardápio:
```
from abc import ABC, abstractmethod

class Item(ABC)
    @abstractmethod
    def __repr__(self):
        pass
```

Criando itens do cardápio, que possuem a interface Item, e implementa os métodos que a interface sugere.
```
class ItemHamburger(Item):
    def __repr__(self):
        return "Hamburguer"

class ItemRefrigerante(Item):
    def __repr__(self):
        return "Refrigerante"

class ItemSorvete(Item):
    def __repr__(self):
        return "Sorvete"

class ItemFritas(Item):
    def __repr__(self):
        return "Fritas"
```

Agora criando a interface criadora, que define a assinatura do método criar_combo, além de implementar os métodos exibe_itens e adicionar_itens que serão oferecidos para quem herdá-la.
```
class Combo(ABC):
    def __init__(self):
        self.itens = []
        self.criar_combo()

    @abstractmethod
    def criar_combo():
        pass

    def exibe_itens(self):
        return self.itens

    def adicionar_itens(self, item):
        self.itens.append(item)
```

Agora as classes criadoras concretas, que possuem a responsabilidade final de fabricar o objeto desejado e tudo que é necessário para ele:

```
class ComboTudo(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
         self.adicionar_itens(ItemSorvete())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())

class ComboFeliz(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())

class ComboGelado(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())
```

Podemos apenas usar a fábrica e teremos um código simples e objetivo:
```
if __name__ == "__main__":
    combo_escolhido = input(
        "Olá, qual o seu pedido? [ComboTudo, ComboFeliz, ComboGelado]: "
    )

    combo = eval(combo_escolhido)()

    print(f"\nCriando o combo {type(combo).__name__}.")
    print(f"\nCombo fabricado com os seguintes itens: {combo.exibe_itens()}")
```

O Padrão factory organzia bem o código, permitindo dividir a terfa de desenvolvimento entre mais pessoas, afinal cada pessoa pode puxar uma fábrica concreta no dia a dia.

