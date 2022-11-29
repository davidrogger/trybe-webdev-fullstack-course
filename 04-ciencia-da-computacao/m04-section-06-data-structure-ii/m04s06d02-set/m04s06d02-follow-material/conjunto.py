class Conjunto:
    def __init__(self):
        self.__length = 1001
        self.elements = [False for _ in range(self.__length)]

    def __len__(self):
        return self.__length

    def __str__(self):
        elements = []

        for index, element in enumerate(self.elements):
            if element:
                elements.append(index)

        length = len(elements)

        str_elements = "{"

        for position, element in enumerate(elements, start=1):
            if position == length:
                str_elements += f"{element}" + "}"
            else:
                str_elements += f"{element}, "

        return str_elements

    def __contains__(self, item):
        return self.elements[item]

    def __getitem__(self, item):
        return self.elements[item]

    def add(self, element):
        self.elements[element] = True

    def union(self, set):
        matched_elements = []

        for position in range(len(set)):
            if set[position] or self.elements[position]:
                matched_elements.append(position)

        new_set = Conjunto()

        for position in matched_elements:
            new_set.add(position)

        return new_set


if __name__ == "__main__":
    elements = [0, 10, 100, 1000]
    conjunto = Conjunto()

    for element in elements:
        conjunto.add(element)

    print(conjunto)  # {0, 10, 100, 1000}

    print(100 in conjunto)  # True
    print(5 in conjunto)  # False

    elements2 = [20, 30, 50]
    conjuntoB = Conjunto()

    for element in elements2:
        conjuntoB.add(element)

    print(conjuntoB)  # {20, 30, 50}

    print(conjunto.union(conjuntoB))  # {0, 10, 20, 30, 50, 100, 1000}
    print(conjunto)  # {0, 10, 100, 1000}
