from file_management.Queue import Queue


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
