from file_management.file_management import text_importer
from unittest.mock import patch, mock_open
import pytest


@pytest.fixture
def fake_file():
    return "First line\nSecond line\nThird line"


def test_txt_import_valid(fake_file):
    expect = ["First line\n", "Second line\n", "Third line"]
    with patch("builtins.open", mock_open(read_data=fake_file)):
        assert text_importer("fake_path.txt") == expect


def test_txt_import_invalid_extension(capsys):
    expect_msg = "Formato inválido\n"

    text_importer("wrong_extension.csv")
    _, err = capsys.readouterr()

    assert err == expect_msg


def test_txt_import_invalid_path(capsys):
    expec_msg = "Arquivo invalid_path.txt não encontrado"
    text_importer("invalid_path.txt")
    _, err = capsys.readouterr()
    assert err == expec_msg


# https://stackoverflow.com/questions/1289894/
# how-do-i-mock-an-open-used-in-a-with-statement-using-the-mock-framework-in-pyth
