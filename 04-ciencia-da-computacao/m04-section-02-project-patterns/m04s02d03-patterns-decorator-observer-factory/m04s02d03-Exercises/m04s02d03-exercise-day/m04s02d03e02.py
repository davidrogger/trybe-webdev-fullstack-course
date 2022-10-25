# Exercício 2: Você está desenvolvendo um novo despertador para
# Assistente virtual Alexa, utilizando o Padrão Observer. Ao despertar,
# esse despertador aciona algumas rotinas especiais na casa.

# Implemente um objeto Alarme que consiga acionar as tarefas de
# rotina previamente cadastradas, sempre que o alarme despertar.
# Veja alguns exemplos de rotinas:

# Acender as luzes;

# Preparar o café;

# Ligar o computador.

# 👀 De olho na dica: crie um observador para cada rotina e
# vincule-o dinamicamente por composição ao objeto Alarme.
# Assim, quando o despertador tocar todas as rotinas vinculadas
# serão disparadas automaticamente.
from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotina(self, rotina):
        self.__rotinas.append(rotina)

    def acionar_todas_rotina(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("Som do alarme: PIUUUUUUUUUUUUUUUUUUUUUUUUUU")
        self.acionar_todas_rotina()


class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        pass


class AcionadorLuzes(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)

    def acionar(self):
        print("Acendendo as Luzes")


class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)

    def acionar(self):
        print("Preparando o café")


class AcionarComputador(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)

    def acionar(self):
        print("Ligando computador")


if __name__ == "__main__":
    alarme_manha = Alarme()
    AcionadorLuzes(alarme_manha)
    AcionadorCafeteira(alarme_manha)
    AcionarComputador(alarme_manha)

    alarme_manha.despertar()

    alarme_tarde = Alarme()
    AcionadorCafeteira(alarme_tarde)

    alarme_tarde.despertar()
