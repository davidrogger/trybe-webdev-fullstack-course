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

