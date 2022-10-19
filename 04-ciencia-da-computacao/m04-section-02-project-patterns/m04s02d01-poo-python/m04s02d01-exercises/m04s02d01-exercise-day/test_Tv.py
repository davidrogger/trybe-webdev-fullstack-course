from Tv import Tv


def test_tv_check_size_parameter():
    samsung_23pol = Tv(23)
    philips_42pol = Tv(42)
    samsung_54pol = Tv(54)

    "Should have the size passed by the parameter"
    assert samsung_23pol.size == 23
    assert philips_42pol.size == 42
    assert samsung_54pol.size == 54
