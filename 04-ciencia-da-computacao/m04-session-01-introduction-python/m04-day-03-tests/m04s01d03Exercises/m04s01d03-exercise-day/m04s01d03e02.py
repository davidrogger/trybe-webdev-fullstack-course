numbers_catalog = {
    "ABC": 2,
    "DEF": 3,
    "GHI": 4,
    "JKL": 5,
    "MNO": 6,
    "PQRS": 7,
    "TUV": 8,
    "WXYZ": 9,
}


def phone_convertion(phrase: str):
    new_phrase = ""

    if len(phrase) > 0:
        for position, letter in enumerate(phrase):
            for key, value in numbers_catalog.items():
                key_found = key.rfind(letter)
                if key_found >= 0:
                    new_phrase += str(value)
                    break
            original_phrase_position = position
            new_phrase_position = len(new_phrase) - 1
            if new_phrase_position < original_phrase_position:
                new_phrase += letter

    return new_phrase
