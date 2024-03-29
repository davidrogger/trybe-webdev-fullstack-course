from employee import Employee


class HashMap:
    def __init__(self):
        self._buckets = [[] for _ in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee: Employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for employee in self._buckets[address]:
            if employee.id_num == id_num:
                return employee.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_nume, new_name):
        address = self.get_address(id_nume)
        for employee in self._buckets[address]:
            if employee.id_num == id_nume:
                employee.name = new_name


def test_create_hashmap():
    hashmap = HashMap()

    assert isinstance(hashmap, HashMap)


def test_get_id_in_hashmap():
    employees = [
        Employee(14, "name1"),
        Employee(23, "name2"),
        Employee(10, "name3"),
        Employee(9, "name4"),
    ]

    company = HashMap()

    for employee in employees:
        company.insert(employee)

    assert company.get_value(23) == "name2"

    company.update_value(10, "name30")

    assert company.get_value(10) == "name30"
