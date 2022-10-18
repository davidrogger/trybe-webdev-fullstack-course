class Eletrodomestic:
    def __init__(self, color, potence, voltage, price):
        self.price = price
        self.__color = color
        self.__potence = potence
        self.__voltage = voltage
        self.__on = False
        self.__current_engine_amperage = 0

    def setOn(self, speed):
        self.__speed = speed
        self.__current_engine_amperage = (
            (self.__potence / self.__voltage) / self.__max_speed
        ) * speed
        self.__on = True

    def setOff(self):
        self.__on = False
        self.__speed = 0

    def is_on(self):
        return self.__on

    @property
    def color(self):
        return self.__color

    @color.setter
    def color(self, new_color):
        self.__color = new_color


class Microwave(Eletrodomestic):
    ...


class Mixer(Eletrodomestic):
    ...


class Stove(Eletrodomestic):
    ...
