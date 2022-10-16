# Testes automatizados

Atráves de testes automatizados, a pessoa desenvolvedora é capaz de identificar mais facilmente um bug ou verificar que alterações do código não afetaram o comportamento esperado do sistema.

## pytest

Framework que facilita a escrita de testes simples, mas capazes de testar facionalidades complexas em aplicações e bibliotecas.

## Relembrando

Trabalhando em ambiente virtual:
```
python3 -m vevn .venv
source .venv/bin/activate
```

Instalando pytest: `python3 -m pip install pytest`

Instalando requirement.txt file: `python3 -m pip install -r requirement.txt`

#

Usando o pytest é necessário que os arquivos e as funções de teste tenham `test_` como prefixo, para a ferramenta encontrar e realizar o teste.

Uma função de teste é similar a qualquer outra, porém tem o propósito de verificar se o resultado obtido foi o mesmo do esperado.
No código, isto pode ser visto através da utilização da palavra reservada assert.

O comando assert funciona da seguinte maneira: caso a epxressão recebida seja verdadeira (avaliada como True), nada acontece. Porém caso seja falsa (avaliada como False), um exceção do tipo AssertionError é lançada. A pytest captura este erro e tenta apresentar uma comparação entre o esperado e o recebido da melhor maneira possível.

rodando o test: `python3 -m pytest`

# Testando falhas

Erros acontecem e nem sempre são inesperados. O Python utiliza exceções para sinalizar que ocorreram erros durante a execução de um código e que nem sempre são fatais.

Podemos escrever testes que verificam que um erro deve ocorrer a partir de uma determinada entrada.

Exemplo:
```
# ...

def divide(a_number, other_number):
    "Retorna a divisão de a_number por other_number"
    return a_number / other_number
```

```
import pytest
from codigo import is_odd, divide

# ...

def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
```

Utilizando a função raises da pytest para verificar se a exceção ocorreu. Caso contrário, ela lança um AssertionError, indicando que o teste não passou. Se o texto retornado na exceção o que é esperado através do parâmetro match, que pode receber uma epxressão regular. No exemplo, uma divisão por zero, que lança a exceção esperada e o teste passa com sucesso.

# Um pouco de contexto

Quando escrevemos testes, pensamos em cenários distintos que podem ocorrer no nosso sistema: "dado um arquivo com as seguintes linhas", "visto que temos um banco de dados com um dado registro" ou "a partir de um cliente web". Damos o nome de test fixture (ou apenas fixture) às precondições ou estados necessários para a execução de um teste.

Cada teste pode ter seu próprio cenário (contexto) ou compartilhá-lo com outros testes.

Exemplo:

```
# get_most_ordered_dish_per_costumer é uma função que retorna o prato mais pedido por uma
# determinada pessoa cliente, considerando que os pedidos estão em uma lista.

# get_order_frequency_per_costumer é uma função que retorna a frequência que uma determinada
# pessoa cliente pede um determinado prato, considerando que os pedidos estão em uma lista.


# uma fixture utilizando a biblioteca pytest
# é definida utilizando a sintaxe abaixo
@pytest.fixture
def orders():
    """Nosso cenário (contexto) temos os seguintes pedidos"""
    return [
        {"customer": "maria", "order": "pizza", "day": "terça-feira"},
        {"customer": "joao", "order": "hamburger", "day": "terça-feira"},
        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
        {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},
    ]

# estamos adicionando a fixture "orders" ao teste
# ou seja, temos um contexto onde os pedidos são os definidos anteriormente
def test_get_most_ordered_dish_per_costumer_when_customer_is_maria(orders):
    assert get_most_ordered_dish_per_costumer(orders, "maria") == "pizza"

# novamente adicionamos um cenário (contexto) ao teste onde os pedidos realizados são os
# definidos na fixture
def test_get_order_frequency_per_costumer_when_customer_is_joao_and_order_is_pizza(orders):
    assert get_order_frequency_per_costumer(orders, "joao", "pizza") == 0

def test_get_order_frequency_per_costumer_when_customer_is_maria_and_order_is_hamburger(orders):
    assert get_order_frequency_per_costumer(orders, "maria", "hamburger") == 1
```

É importante ressaltar que este contexto poderia ser ra abertura de uma conexção com o banco de dados, uma referência à conexão a um cliente web, um arquivo temporário ou qualquer outro contexto. Também vale lembrar que é possível usar mais de um contexto por testes caso seja necessário, bem como um contexto dentro de outro.

