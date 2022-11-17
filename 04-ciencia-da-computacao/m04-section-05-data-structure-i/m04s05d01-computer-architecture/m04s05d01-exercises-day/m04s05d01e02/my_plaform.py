# Exercício 2: Agora vamos explorar o sistema que estamos utilizando.
# Crie um script chamado my_platform.py e utilize-o para exibir no
# console as informações solicitadas abaixo. Para isso, utilize o
# módulo platform do Python 😎.

# A plataforma que está sendo utilizada (linux, win32, darwin, etc);
# A versão (release);
# A arquitetura (x32 ou x64);
import platform


computer_platform = platform.system()
computer_release = platform.release()
computer_architecture, _ = platform.architecture()

print(f"My plataform: {computer_platform}")
print(f"My release: {computer_release}")
print(f"My architecture: {computer_architecture}")
