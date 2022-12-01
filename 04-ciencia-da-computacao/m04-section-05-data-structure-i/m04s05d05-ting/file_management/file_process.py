from file_management.Queue import Queue
from file_management.file_management import text_importer
import sys


def is_new_file(file_name, instance: Queue):
    instance_length = len(instance)
    for index in range(instance_length):
        item = instance.search(index)
        if item["nome_do_arquivo"] == file_name:
            return False

    return True


def process(path_file: str, instance: Queue):
    if is_new_file(path_file, instance):
        file_lines = text_importer(path_file)

        file_data = {
            "nome_do_arquivo": path_file,
            "qtd_linhas": len(file_lines),
            "linhas_do_arquivo": file_lines,
        }

        instance.enqueue(file_data)

        return sys.stdout.write(str(file_data))


def remove(instance: Queue):
    if len(instance):
        first_out = instance.dequeue()
        file_path = first_out["nome_do_arquivo"]
        return sys.stdout.write(f"Arquivo {file_path} removido com sucesso")
    else:
        return sys.stdout.write("Não há elementos")


def file_metadata(instance: Queue, position):
    pass
