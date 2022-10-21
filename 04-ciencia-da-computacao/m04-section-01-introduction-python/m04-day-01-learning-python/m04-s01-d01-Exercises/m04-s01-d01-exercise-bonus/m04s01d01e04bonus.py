# Exercício 4: Um posto está vendendo combustíveis com a seguinte
# tabela de descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma:
# A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente,
# sabendo-se que o preço do litro da gasolina é R$ 2,50,
# e o preço do litro do álcool é R$ 1,90.

type_table = {
    "A": {
        "price": 1.9,
        "descount": {
            "default": 0.03,
            "promo": 0.05,
        },
    },
    "G": {
        "price": 2.5,
        "descount": {
            "default": 0.03,
            "promo": 0.05,
        },
    },
}


def total_payment(type, quantity):
    price = type_table[type]['price']
    descount = type_table[type]["descount"]["default"]

    if quantity > 20:
        descount = type_table[type]["descount"]["promo"]

    total = price * quantity
    return total - (total * descount)


print(total_payment("A", 10))
