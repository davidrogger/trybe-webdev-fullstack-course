from time import sleep
from m04s05d01e03.resources import get_memory

# Exercício 4: Faça um script que, a cada intervalo de segundo,
# mostre no console a memória utilizada do sistema operacional
# vs a memória total (ambos em megabytes - MB). Lembre-se que
# você pode se basear no script do exercício anterior.


def get_memory_by_second():
    time = 10
    while time > 0:
        total_memory, used_memory = get_memory()
        print(f"Free memory: {total_memory - used_memory}")
        sleep(1)
        time -= 1


get_memory_by_second()
