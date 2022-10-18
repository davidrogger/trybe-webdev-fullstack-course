class Fridge:
    def __init__(self, color, voltage, price):
        self.__color = color
        self.__voltage = voltage
        self.__price = price

    @property
    def color(self):
        return self.__color

    @property
    def voltage(self):
        return self.__voltage

    @property
    def price(self):
        return self.__price
