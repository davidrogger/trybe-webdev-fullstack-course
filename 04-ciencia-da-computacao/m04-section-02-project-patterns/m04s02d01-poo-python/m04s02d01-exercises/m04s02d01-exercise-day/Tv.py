class Tv:
    def __init__(self, size):
        self.__size = size
        self.__volume = 50
        self.__channel = 1
        self.__on = False

    @property
    def size(self):
        return self.__size

    @property
    def volume(self):
        return self.__volume

    def volume_up(self):
        if self.__volume < 99:
            self.__volume += 1

    def volume_down(self):
        if self.__volume > 0:
            self.__volume -= +1
