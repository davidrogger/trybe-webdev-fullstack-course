from Person import Person
from Fridge import Fridge
import pytest


def test_person_creation():
    jonas = Person("Jonas", 1000)
    assert jonas.name == "Jonas"
    assert jonas.wallet == 1000
    assert jonas.has_fridge is False


def test_person_buy_fridge_without_money():
    poor_jonas = Person("Jonas", 1000)
    blue_fridge = Fridge("Blue", "220", 2000)
    with pytest.raises(ValueError, match="Insuficient resources"):
        poor_jonas.buy_fridge(blue_fridge)
    assert poor_jonas.wallet == 1000


def test_person_buy_fridge_with_money():
    rich_jonas = Person("Jonas", 3000)
    red_fridge = Fridge("Red", "220", 1500)
    rich_jonas.buy_fridge(red_fridge)
    assert rich_jonas.has_fridge is True
    assert rich_jonas.wallet == 1500
