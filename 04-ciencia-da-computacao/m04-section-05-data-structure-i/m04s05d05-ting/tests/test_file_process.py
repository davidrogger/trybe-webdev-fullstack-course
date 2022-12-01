from file_management.file_process import process, remove, file_metadata
from file_management.Queue import Queue
import pytest


def test_file_process(capsys):
    new_queue = Queue()
    process("mock_file/test_file.txt", new_queue)
    out, _ = capsys.readouterr()
    expect = str(
        {
            "nome_do_arquivo": "mock_file/test_file.txt",
            "qtd_linhas": 3,
            "linhas_do_arquivo": [
                "First line\n",
                "Second line\n",
                "Third line",
            ],
        }
    )

    assert out == expect


def test_file_process_ignore_equal_file_names():
    new_queue = Queue()
    expect_length = 1
    process("mock_file/test_file.txt", new_queue)
    process("mock_file/test_file.txt", new_queue)
    assert len(new_queue) == expect_length


@pytest.fixture
def queue_populated():
    new_queue = Queue()
    process("mock_file/test_file.txt", new_queue)
    return new_queue


def test_remove_having_an_element(queue_populated, capsys):
    expect = "Arquivo mock_file/test_file.txt removido com sucesso"
    assert len(queue_populated) == 1

    remove(queue_populated)
    out, _ = capsys.readouterr()

    assert len(queue_populated) == 0
    assert out == expect


def test_remove_empty(capsys):
    expect = "Não há elementos"
    new_queue = Queue()

    remove(new_queue)

    out, _ = capsys.readouterr()

    assert out == expect


def test_metadata_success(queue_populated, capsys):
    expect = str(
        {
            "nome_do_arquivo": "mock_file/test_file.txt",
            "qtd_linhas": 3,
            "linhas_do_arquivo": [
                "First line\n",
                "Second line\n",
                "Third line",
            ],
        }
    )
    file_metadata(queue_populated, 0)

    out, _ = capsys.readouterr()

    assert out == expect
