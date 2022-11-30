from file_management.Queue import Queue
from file_management.file_management import text_importer
import sys


def get_file_name(path_file):
    file_name = path_file
    if "/" in path_file:
        last_element = -1
        file_name = path_file.split("/")[last_element]
    return file_name


def is_new_file(file_name, instance: Queue):
    instance_length = len(instance)
    for index in range(instance_length):
        item = instance.search(index)
        if item["nome_do_arquivo"] == file_name:
            return False

    return True


def file_process(path_file: str, instance: Queue):
    file_name = get_file_name(path_file)

    if is_new_file(file_name, instance):
        file_lines = text_importer(path_file)

        file_data = {
            "nome_do_arquivo": file_name,
            "qtd_linhas": len(file_lines),
            "linhas_do_arquivo": file_lines,
        }

        instance.enqueue(file_data)

        return sys.stdout.write(str(file_data))
