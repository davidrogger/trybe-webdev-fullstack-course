# Exercício 1: Em Python, é possível imprimir uma saída colorida.
# Para isso, basta a string começar com um código da cor antes e
# terminar com um código que indica o fim da formatação.

# amostra:

ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

print("\033[94mOlá Mundo!\033[0m")
# ou
print(f"{ROXO}Olá Mundo!{RESET}")

# O recurso a seguir será utilizado para exibir logs
# coloridos no sistema. A classe Log() abaixo é responsável
# pela criação dos Logs:

# Crie novas classes, LogError(), LogWarning, LogSuccess()
# com o padrão Decorator, para imprimir colorido as seguintes
# frases de Log:

# Success(Verde): O sistema está funcionando

# Warning(Laranja): O sistema está lento

# Error(Vermelho): O sistema está com erros


class Log:
    def dispara_log(message):
        return message


class LogSuccess:
    def __init__(self, log):
        self.__log = log

    def dispara_log(self, message):
        print(f"{VERDE}Sucess:{RESET} {self.__log.dispara_log(message)}")


class LogWarning:
    def __init__(self, log: Log):
        self.__log = log

    def dispara_log(self, message):
        print(f"{LARANJA}Warning:{RESET}: {self.__log.dispara_log(message)}")


class LogError:
    def __init__(self, log: Log):
        self.__log = log

    def dispara_log(self, message):
        print(f"{VERMELHO}Warning:{RESET}: {self.__log.dispara_log(message)}")
