from employee import Employee


class HashMap:
    def __init__(self):
        self._buckets = [None for _ in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee: Employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None


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

    print(company.get_value(23))
