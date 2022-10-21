class CreditCard:
    def __init__(self, name, number, month, year, security_code):
        self.__name = name
        self.__number = number
        self.__month = month
        self.__year = year
        self.__security_code = security_code

    @property
    def name(self):
        return self.__name
