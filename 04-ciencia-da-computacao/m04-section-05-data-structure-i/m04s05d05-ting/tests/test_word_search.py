from file_management.word_search import exists_word, search_by_word
from file_management.file_process import process
from file_management.Queue import Queue
import pytest


@pytest.fixture
def instance_populated():
    instance = Queue()
    process("mock_file/test_file.txt", instance)
    process("mock_file/test_file2.txt", instance)
    return instance


def test_word_search_success(instance_populated):
    expect_script = [
        (
            "line",
            [
                {
                    "palavra": "line",
                    "arquivo": "mock_file/test_file.txt",
                    "ocorrencias": [
                        {
                            "linha": 1,
                        },
                        {
                            "linha": 2,
                        },
                        {
                            "linha": 3,
                        },
                    ],
                },
                {
                    "palavra": "line",
                    "arquivo": "mock_file/test_file2.txt",
                    "ocorrencias": [
                        {
                            "linha": 2,
                        },
                    ],
                },
            ],
        ),
        (
            "second",
            [
                {
                    "palavra": "second",
                    "arquivo": "mock_file/test_file.txt",
                    "ocorrencias": [
                        {
                            "linha": 2,
                        },
                    ],
                },
            ],
        ),
    ]

    for word, expect in expect_script:
        assert exists_word(word, instance_populated) == expect


def test_word_search_not_found(instance_populated):
    expect_script = [
        (
            "fourth",
            [],
        ),
        (
            "404",
            [],
        ),
    ]
    for word, expect in expect_script:
        assert exists_word(word, instance_populated) == expect


def test_search_by_word_success(instance_populated):
    expect_script = [
        (
            "line",
            [
                {
                    "palavra": "line",
                    "arquivo": "mock_file/test_file.txt",
                    "ocorrencias": [
                        {
                            "linha": 1,
                            "conteudo": "First line",
                        },
                        {
                            "linha": 2,
                            "conteudo": "Second line",
                        },
                        {
                            "linha": 3,
                            "conteudo": "Third line",
                        },
                    ],
                },
                {
                    "palavra": "line",
                    "arquivo": "mock_file/test_file2.txt",
                    "ocorrencias": [
                        {
                            "linha": 2,
                            "conteudo": "This Line should be found",
                        },
                    ],
                },
            ],
        ),
        (
            "second",
            [
                {
                    "palavra": "second",
                    "arquivo": "mock_file/test_file.txt",
                    "ocorrencias": [
                        {
                            "linha": 2,
                            "conteudo": "Second line",
                        },
                    ],
                },
            ],
        ),
    ]

    for word, expect in expect_script:
        assert search_by_word(word, instance_populated) == expect


def test_search_by_word_not_found(instance_populated):
    expect_script = [
        (
            "fourth",
            [],
        ),
        (
            "404",
            [],
        ),
    ]
    for word, expect in expect_script:
        assert search_by_word(word, instance_populated) == expect
