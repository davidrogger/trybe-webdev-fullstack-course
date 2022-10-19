import pytest
from Statistic import Statistic


def test_creating_statistic():
    "Should throw an Exception when parameter is wrong"
    with pytest.raises(
        ValueError,
        match="Should be given a list, instead receive a <class 'str'>",
    ):
        Statistic("string")

    with pytest.raises(
        ValueError,
        match="Should be given a list, instead receive a <class 'int'>",
    ):
        Statistic(1)

    "Should create an new instance when the parameter is correct"
    statistic_list = Statistic([10, 5, 6, 7, 8])
    assert isinstance(statistic_list, Statistic) is True
