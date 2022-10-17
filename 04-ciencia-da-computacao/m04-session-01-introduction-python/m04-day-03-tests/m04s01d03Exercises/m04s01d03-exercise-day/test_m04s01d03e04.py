from m04s01d03e04 import list_valid_emails


def test_emails_empty_list():
    "Should return an empty list when where is no e-mail in the list"
    assert list_valid_emails([]) == []


def test_emails_invalids():
    "Should return an empty list when all emails area invalid"
    invalid_emails = [
        "invalid#caracter@email.com",
        "invalid/caracter@email.com",
        "invalid.caracter@email.com",
        "invalid$caracter@email.com",
        "withoutatemail.com",
        "extraextension@email.com.br",
        "invalidextension@email.combr",
    ]
    assert list_valid_emails(invalid_emails) == []
