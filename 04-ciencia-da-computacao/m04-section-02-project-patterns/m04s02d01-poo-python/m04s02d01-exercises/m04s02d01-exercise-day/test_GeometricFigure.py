from Square import Square


def test_creating_a_square():
    square_10m = Square(10)

    assert square_10m.area == "100m²"
    assert square_10m.perimeter == "40m²"
