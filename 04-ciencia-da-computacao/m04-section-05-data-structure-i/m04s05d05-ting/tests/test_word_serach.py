from file_management.word_search import exists_word
from file_management.file_process import process
from file_management.Queue import Queue
import pytest


@pytest.fixture
def instance_populated():
    instance = Queue()
    process("mock_file/test_file.txt", instance)
    return instance


def test_word_search_success(instance_populated):
    expect_script = [
        (
            "line",
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
        ),
        (
            "second",
            {
                "palavra": "second",
                "arquivo": "mock_file/test_file.txt",
                "ocorrencias": [
                    {
                        "linha": 2,
                    },
                ],
            },
        ),
    ]

    for word, expect in expect_script:
        assert exists_word(word, instance_populated) == expect


def test_word_search_not_found(instance_populated):
    expect_script = [
        (
            "fourth",
            {
                "palavra": "fourth",
                "arquivo": "mock_file/test_file.txt",
                "ocorrencias": [],
            },
        ),
        (
            "404",
            {
                "palavra": "404",
                "arquivo": "mock_file/test_file.txt",
                "ocorrencias": [],
            },
        ),
    ]
    for word, expect in expect_script:
        assert exists_word(word, instance_populated) == expect
