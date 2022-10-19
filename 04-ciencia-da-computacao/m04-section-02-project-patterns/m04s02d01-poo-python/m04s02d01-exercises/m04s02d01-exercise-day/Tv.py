class Tv:
    def __init__(self, size):
        self.__size = size
        self.__volume = 50
        self.__channel = 1
        self.__on = False

    @property
    def size(self):
        return self.__size
