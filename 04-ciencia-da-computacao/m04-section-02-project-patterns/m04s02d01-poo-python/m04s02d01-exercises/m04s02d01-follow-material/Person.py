from Fridge import Fridge


class Person:
    def __init__(self, name, wallet):
        self.__name = name
        self.__wallet = wallet
        self.__has_fridge = False

    @property
    def name(self):
        return self.__name

    @property
    def wallet(self):
        return self.__wallet

    @property
    def has_fridge(self):
        return self.__has_fridge

    def buy_fridge(self, fridge: Fridge):
        if self.__wallet >= fridge.price:
            self.__wallet -= fridge.price
        else:
            raise ValueError("Insuficient resources")
