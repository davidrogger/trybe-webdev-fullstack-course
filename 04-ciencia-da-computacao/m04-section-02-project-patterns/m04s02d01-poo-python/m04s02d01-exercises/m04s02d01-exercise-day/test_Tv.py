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


def test_tv_method_change_channel():
    samsung_23pol = Tv(23)

    "Should exist the method volume_down"
    callable(getattr(samsung_23pol, "change_channel"))

    "Should starts in the channel 1"
    assert samsung_23pol.channel == 1

    "Should change de channel by parameter"
    samsung_23pol.change_channel(20)
    assert samsung_23pol.channel == 20

    "Should throw an Exception when out of the range 0 and 99"
    with pytest.raises(ValueError, match="Out of the range"):
        samsung_23pol.change_channel(100)
    with pytest.raises(ValueError, match="Out of the range"):
        samsung_23pol.change_channel(-1)


def test_tv_method_toggle_on_off():
    samsung_23pol = Tv(23)

    "Should exist the method toggle_on_off"
    callable(getattr(samsung_23pol, "toggle_on_off"))

    "Should have the initial value as False"
    assert samsung_23pol.on is False

    "Should change from False to True,and"
    "vice versa when using the toggle method"

    samsung_23pol.toggle_on_off()
    assert samsung_23pol.on is True
    samsung_23pol.toggle_on_off()
    assert samsung_23pol.on is False
