from CreditCard import CreditCard


class Order:
    def __init__(self, items: list, creditCard: CreditCard):
        self.__items = items
        self.credit_card = creditCard

    @property
    def items(self):
        return self.__items

    @property
    def credit_card(self):
        return self.__credit_card

    @credit_card.setter
    def credit_card(self, value):
        if not isinstance(value, CreditCard):
            raise ValueError("Credit Card must be an instance from CreditCard")

        self.__credit_card = value
