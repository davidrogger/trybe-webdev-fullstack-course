from file_management.Queue import Queue


def find_word_line(uncapitalize_word: str, lines: list):
    words_found = []
    for line, phrase in enumerate(lines, start=1):
        uncapitalize_phrase = phrase.lower()
        if uncapitalize_word in uncapitalize_phrase:
            words_found.append({"linha": line})
    return words_found


def look_at_instance(uncapitalize_word: str, instance: Queue):
    for index in range(len(instance)):
        file = instance.search(index)
        path_file = file["nome_do_arquivo"]
        lines = file["linhas_do_arquivo"]
        words_found = find_word_line(uncapitalize_word, lines)

        return path_file, words_found


def exists_word(search_word: str, instance: Queue):
    uncapitalize_word = search_word.lower()
    report = []

    for index in range(len(instance)):
        file = instance.search(index)
        words_found_at = []
        path_file = file["nome_do_arquivo"]
        lines = file["linhas_do_arquivo"]

        for line, phrase in enumerate(lines, start=1):
            uncapitalize_phrase = phrase.lower()
            if uncapitalize_word in uncapitalize_phrase:
                words_found_at.append({"linha": line})

        if len(words_found_at):
            data_found = {
                "palavra": search_word,
                "arquivo": path_file,
                "ocorrencias": words_found_at,
            }
            report.append(data_found)

    return report


def search_by_word(search_word: str, instance: Queue):
    files_data = exists_word(search_by_word, instance)

    for data in files_data:
        for line in data["ocorrencias"]["linha"]:
            index_queue = line - 1
            instance.search(index_queue)

    return
