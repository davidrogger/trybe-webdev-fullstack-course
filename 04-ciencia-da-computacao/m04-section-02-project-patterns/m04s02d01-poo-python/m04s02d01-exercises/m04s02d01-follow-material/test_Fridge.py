from Fridge import Fridge


def test_fridge_creation():
    blue_fridge = Fridge("blue", "220", 2000)
    assert blue_fridge.color == "blue"
    assert blue_fridge.voltage == "220"
    assert blue_fridge.price == 2000
