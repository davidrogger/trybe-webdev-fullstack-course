# Exercício 3 Imagine que você esteja trabalhando em um e-commerce,
# e foi lhe dado a demanda de analisar um array de números inteiros
# que representam os produtos dessa empresa. Verifique quantos produtos
# formam boas combinações, ou seja, quando um produto é igual ao outro
# e seu índice é maior que o anterior. Esta combinação pode ser
# utilizada para modificar os produtos de uma página. Por exemplo:

# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
#             0, 1, 2, 3, 4, 5
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def combined_product(products):
    match_products = []
    products_size = len(products)

    for current_index in range(products_size):
        right_elements = current_index + 1
        for next_index in range(right_elements, products_size):
            if products[current_index] == products[next_index]:
                match_products.append((current_index, next_index))

    return len(match_products)


if __name__ == "__main__":
    first = [1, 3, 1, 1, 2, 3]
    second = [1, 1, 2, 3]

    assert combined_product(first) == 4
    assert combined_product(second) == 1
    # Faça a análise de complexidade da sua solução.
    # Por percorrer a lista dentro da outra para comparar mais de uma
    # vez os elementos dobrando o tamanho da busca, tornando a
    # complexidade de tempo quadratica O(n^2)
