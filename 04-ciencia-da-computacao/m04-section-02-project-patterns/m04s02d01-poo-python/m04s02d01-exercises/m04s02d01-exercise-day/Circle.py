from GeometricFigure import GeometricFigure


class Circle(GeometricFigure):
    def __init__(self, radius):
        self.__radius = radius
        self.__pi = 3.14

    def area(self):
        without_point_float = self.__pi * 100
        calculated_area = (
            self.__radius * self.__radius
        ) * without_point_float
        converting_to_point_float = calculated_area / 100

        return f"{converting_to_point_float}"

    def perimeter(self):
        without_point_float = self.__pi * 100
        calculated_perimeter = 2 * self.__radius * without_point_float
        converting_to_point_float = calculated_perimeter / 100

        return f"{converting_to_point_float}"


# https://matematicabasica.net/perimetro-do-circulo/
# #:~:text=Tamb%C3%A9m%20podemos%20calcular%20o%20per%C3%ADmetro,
# medida%20do%20di%C3%A2metro%20do%20c%C3%ADrculo.
