from GeometricFigure import GeometricFigure


class Square(GeometricFigure):
    def __init__(self, side):
        self.__side = side

    def area(self):
        base_times_height = self.__side * self.__side
        return f"{base_times_height}m²"

    def perimeter(self):
        sum_equal_sides = self.__side * 4
        return f"{sum_equal_sides}m²"
