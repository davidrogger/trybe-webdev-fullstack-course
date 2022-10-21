import pytest
from CreditCard import CreditCard
from Order import Order


def test_creating_order_without_valid_credit_card():
    jonas_buy_items = ["Destiny 2", "clean code book", "memory"]

    with pytest.raises(
        ValueError, match="Credit Card must be an instance from CreditCard"
    ):
        Order(jonas_buy_items, "invalid parameter")


def test_creating_order():
    jonas_credit_card = CreditCard("Jonas", 123456789, 1, 2023, 523)
    jonas_buy_items = ["Destiny 2", "clean code book", "memory"]
    jonas_order = Order(jonas_buy_items, jonas_credit_card)
    assert isinstance(jonas_order, Order) is True
