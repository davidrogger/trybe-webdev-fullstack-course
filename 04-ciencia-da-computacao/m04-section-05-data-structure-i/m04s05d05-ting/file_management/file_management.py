import sys


def text_importer(path_file: str):
    valid_extension = "txt"
    if not path_file.endswith(valid_extension):
        return sys.stderr.write("Formato inválido\n")

    try:
        with open(path_file, "r") as file:
            file_lines = file.readlines()
    except FileNotFoundError:
        return sys.stderr.write(f"Arquivo {path_file} não encontrado")
    else:
        return file_lines


# https://docs.pytest.org/en/7.1.x/how-to/capture-stdout-stderr.html
