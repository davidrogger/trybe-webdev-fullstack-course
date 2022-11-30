from file_management.file_process import file_process
from file_management.Queue import Queue


def test_file_process(capsys):
    new_queue = Queue()
    file_process("mock_file/test_file.txt", new_queue)
    out, _ = capsys.readouterr()
    expect = str(
        {
            "nome_do_arquivo": "test_file.txt",
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
    file_process("mock_file/test_file.txt", new_queue)
    file_process("mock_file/test_file.txt", new_queue)
    assert len(new_queue) == expect_length
