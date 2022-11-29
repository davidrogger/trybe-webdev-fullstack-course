import pytest


class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


def test_employee_create():
    employee = Employee(14, "name2")

    assert isinstance(employee, Employee)

    with pytest.raises(TypeError):
        Employee()
    with pytest.raises(TypeError):
        Employee(1)
    with pytest.raises(TypeError):
        Employee("name")
