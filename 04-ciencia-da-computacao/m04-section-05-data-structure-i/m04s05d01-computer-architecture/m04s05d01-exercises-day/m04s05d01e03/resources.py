# Exercício 3: Agora vamos tanto explorar o hardware que estamos
# utilizando quanto aprender algo interessante: enviar programaticamente
# comandos para o shell. Crie um script chamado resources.py e utilize-o
# para exibir no console as informações solicitadas abaixo. Para isso,
# utilize o método check_output do módulo subprocess do Python 😎.

import subprocess


def get_memory():
    memory_info = [
        info
        for info in subprocess.check_output("free")
        .decode("UTF-8")
        .split("\n")[1]
        .split(" ")
        if info != ""
    ]

    total_memory = int(memory_info[1]) / 1000
    used_memory = int(memory_info[2]) / 1000

    return total_memory, used_memory


if __name__ == "__main__":
    computer_info = subprocess.check_output("lscpu").decode("UTF-8")
    removed_whitespace_info = [
        line.replace("  ", "") for line in computer_info.split("\n")
    ]
    dict_info = {}

    for info in removed_whitespace_info:
        if info:
            key, value = info.split(":")[:2]
            dict_info.update({key: value})

    cpu_model = dict_info["Model name"]
    cpu_cores = dict_info["Core(s) per socket"]
    cpu_mhz = dict_info["CPU MHz"]
    cpu_l_cache = (
        f"L1{dict_info['L1d cache']}"
        f", L2 {dict_info['L2 cache']}"
        f", L3{dict_info['L3 cache']}"
    )
    print(f"CPU Model: {cpu_model}")
    print(f"CPU Model: {cpu_cores}")
    print(f"CPU Model: {cpu_l_cache}")

    print(f"Total: {get_memory()[0]}\n" f"Usada: {get_memory()[1]}")
