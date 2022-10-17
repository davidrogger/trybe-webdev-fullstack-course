from m04s01d03e04 import list_valid_emails


def test_emails_invalids():
    assert list_valid_emails([]) == []
