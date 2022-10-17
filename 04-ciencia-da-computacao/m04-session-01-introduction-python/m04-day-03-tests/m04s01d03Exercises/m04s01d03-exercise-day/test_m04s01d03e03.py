import pytest
from m04s01d03e03 import email_validation


def test_invalid_emails():
    with pytest.raises(ValueError, match="Invalid email"):
        email_validation("invalid#caracter@email.com")
    with pytest.raises(ValueError, match="Invalid email"):
        email_validation("invalid.caracter@email.com")
    with pytest.raises(ValueError, match="Invalid email"):
        email_validation("invalid$caracter@email.com")
    with pytest.raises(ValueError, match="Invalid email"):
        email_validation("withoutatemail.com")
    with pytest.raises(ValueError, match="Invalid email"):
        email_validation("extraextension@email.com.br")
    with pytest.raises(ValueError, match="Invalid email"):
        email_validation("invalidextension@email.combr")


def test_valid_emails():
    assert email_validation("davidrogger@gmail.com") == "davidrogger@gmail.com"
    assert email_validation("maria@gmail.com") == "maria@gmail.com"
    assert (
        email_validation("david_rogger@gmail.com") == "david_rogger@gmail.com"
    )
    assert email_validation("dvd-roger@gmail.com") == "dvd-roger@gmail.com"
    assert email_validation("dvd@beedo.com") == "dvd@beedo.com"
