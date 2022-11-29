from m04s06d01e01 import match_words


def test_match_words():
    params = [
        {
            "words": ["cat", "bt", "hat", "tree"],
            "chars": "atach",
            "expect": 6,
        },
        {
            "words": ["hello", "world", "students"],
            "chars": "welldonehoneyr",
            "expect": 10,
        },
    ]

    for param in params:
        words, chars, expect = param.values()
        assert match_words(words, chars) == expect
