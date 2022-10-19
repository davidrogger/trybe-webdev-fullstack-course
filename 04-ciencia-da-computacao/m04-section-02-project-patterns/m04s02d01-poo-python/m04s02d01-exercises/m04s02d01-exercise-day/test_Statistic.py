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


def test_statistic_method_average():
    "Should calculate the average grade of the studants"
    jonas_grades = Statistic([10, 5, 6, 7, 8])
    mary_grades = Statistic([10, 10, 10, 9, 9])
    assert jonas_grades.average == 7.2
    assert mary_grades.average == 9.6


def test_statistic_method_median():
    "Should return the right median from an odd grades list"
    jonas_grades = Statistic([10, 5, 6, 7, 8])
    mary_grades = Statistic([10, 10, 10, 9, 9])
    assert jonas_grades.median() == 7
    assert mary_grades.median() == 10

    "Should return the right median from an even grades list"
    python_grades = Statistic([10, 4, 7, 6, 3, 9])
    sleep_grades = Statistic([5, 7, 5, 3, 4, 10])
    assert python_grades.median() == 6.5
    assert sleep_grades.median() == 3
