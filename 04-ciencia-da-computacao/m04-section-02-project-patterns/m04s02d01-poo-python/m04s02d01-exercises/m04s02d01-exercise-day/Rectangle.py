from GeometricFigure import GeometricFigure


class Rectangle(GeometricFigure):
    def __init__(self, base, height):
        self.__base = base
        self.__height = height

    def area(self):
        base_times_height = self.__base * self.__height
        return f"{base_times_height}m²"

    def perimeter(self):
        sum_of_all_sides = (self.__base * 2) + (self.__height * 2)
        return f"{sum_of_all_sides}m²"
