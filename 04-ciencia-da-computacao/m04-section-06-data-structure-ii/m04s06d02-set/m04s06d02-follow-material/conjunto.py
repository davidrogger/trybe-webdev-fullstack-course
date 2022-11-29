class Conjunto:
    def __init__(self):
        self.elements = [False for _ in range(1001)]

    def add(self, element):
        self.elements[element] = True


if __name__ == "__main__":
    elements = [0, 10, 100, 1000]
    conjunto = Conjunto()

    for element in elements:
        conjunto.add(element)
