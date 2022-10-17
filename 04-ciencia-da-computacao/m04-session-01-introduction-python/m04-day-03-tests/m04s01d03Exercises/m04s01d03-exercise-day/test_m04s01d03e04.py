from m04s01d03e04 import list_valid_emails

invalid_emails = [
    "invalid#caracter@email.com",
    "invalid/caracter@email.com",
    "invalid.caracter@email.com",
    "invalid$caracter@email.com",
    "withoutatemail.com",
    "extraextension@email.com.br",
    "invalidextension@email.combr",
]

valid_emails = [
    "meu@email.com",
    "joana@email.com",
    "maria_fatima@email.com",
    "davi-ribeiro@email.com",
]


def test_emails_empty_list():
    "Should return an empty list when there is no e-mail in the list"
    assert list_valid_emails([]) == []


def test_emails_invalids():
    "Should return an empty list when all emails are invalid"
    assert list_valid_emails(invalid_emails) == []


def test_emails_valids():
    "Should return all emails in the list"
    assert list_valid_emails(valid_emails) == valid_emails
