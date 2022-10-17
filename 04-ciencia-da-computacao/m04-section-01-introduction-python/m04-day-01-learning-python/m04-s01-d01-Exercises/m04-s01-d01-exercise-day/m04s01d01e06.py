# Exercício 6:
# Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.

# Dica:
# Três lados formam um triângulo quando a soma de quaisquer dois lados
# for maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes.


def triangle_detector(side1, side2, side3):
    if (
        side1 + side2 < side3
        or side2 + side3 < side1
        or side2 + side3 < side1
    ):
        return "Its not possible to create a triangle"
    elif side1 == side2 == side3:
        return "Equilateral triangle"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "Isoceles triangle"
    else:
        return "Scaleno triangle"


print(triangle_detector(15, 10, 26))
