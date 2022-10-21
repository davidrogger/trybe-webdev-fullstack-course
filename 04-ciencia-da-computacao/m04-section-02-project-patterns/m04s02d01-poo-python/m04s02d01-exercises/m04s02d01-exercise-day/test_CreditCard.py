from CreditCard import CreditCard


def test_creating_creadit_card():
    jonas_credit_card = CreditCard("Jonas", 123456789, 1, 2023, 523)
    assert isinstance(jonas_credit_card, CreditCard) is True
    assert jonas_credit_card.name == "Jonas"
