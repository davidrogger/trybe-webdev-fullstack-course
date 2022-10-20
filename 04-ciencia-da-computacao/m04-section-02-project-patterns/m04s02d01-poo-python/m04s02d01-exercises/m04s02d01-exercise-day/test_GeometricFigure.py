from Square import Square
from Rectangle import Rectangle
from Circle import Circle


def test_creating_a_square():
    square_10m = Square(10)

    assert square_10m.area() == "100m²"
    assert square_10m.perimeter() == "40m²"


def test_creating_a_rectangle():
    rectangle_10_20m = Rectangle(10, 20)

    assert rectangle_10_20m.area() == "200m²"
    assert rectangle_10_20m.perimeter() == "60m²"


def test_creating_a_circle():
    circle_r10 = Circle(10)

    assert circle_r10.area() == "314"
    assert circle_r10.perimeter() == "62.8"
