import pytest
from Statistic import Statistic


def test_creating_statistic():
    "Should throw an Exception when parameter is wrong"
    with pytest.raises(TypeError):
        Statistic("string")
    with pytest.raises(TypeError):
        Statistic(1, 2, 3, 5)

    "Should create an new instance when the parameter is correct"
    statistic_list = Statistic([10, 5, 6, 7, 8])
    assert statistic_list is True
