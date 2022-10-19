import pytest
from Tv import Tv


def test_tv_check_size_parameter():
    samsung_23pol = Tv(23)
    philips_42pol = Tv(42)
    samsung_54pol = Tv(54)

    "Should have the size passed by parameter"
    assert samsung_23pol.size == 23
    assert philips_42pol.size == 42
    assert samsung_54pol.size == 54


def test_tv_instance_without_parameter():
    with pytest.raises(TypeError):
        Tv()


def test_tv_method_volume_up():
    samsung_23pol = Tv(23)

    "Should exist the method volume_up"
    callable(getattr(samsung_23pol, "volume_up"))

    "Should set the volume one by one "
    samsung_23pol.volume_up()
    assert samsung_23pol.volume == 51
    samsung_23pol.volume_up()
    assert samsung_23pol.volume == 52

    "Should not be possible to set above 99"
    press_volume_up = 0
    while press_volume_up <= 100:
        samsung_23pol.volume_up()
        press_volume_up += 1

    assert samsung_23pol.volume == 99
    assert samsung_23pol.volume != 152


def test_tv_method_volume_down():
    samsung_23pol = Tv(23)

    "Should exist the method volume_down"
    callable(getattr(samsung_23pol, "volume_down"))

    "Should not be possible to set bellow 0"
    press_volume_down = 0
    while press_volume_down <= 100:
        samsung_23pol.volume_down()
        press_volume_down += 1

    assert samsung_23pol.volume == 0
