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
