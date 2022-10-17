# Testes automatizados

Atráves de testes automatizados, a pessoa desenvolvedora é capaz de identificar mais facilmente um bug ou verificar que alterações do código não afetaram o comportamento esperado do sistema.

## pytest

Framework que facilita a escrita de testes simples, mas capazes de testar facionalidades complexas em aplicações e bibliotecas.

## Relembrando

Trabalhando em ambiente virtual:
```
python3 -m venv .venv
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

# Dublês de teste

Na literatura encontramos as técnicas de dublê como os nomes fakes, mocks, stubs e spies. De uma forma bem resumida podemos defini-las da seguinte maneira:

- Fakes: Objetos que possuem implementações funcionais, porém normalmente simplificadas;
- Mocks: São pré programados para verificar as chamadas das funções que receberem;
- Stubs: Fornecem respostas predefinidas;
- Spies: São como stubs, mas também armazenam informações de como foram chamados.

Exemplo evitando dependências externas a um arquivo real.
```
import json


def retrieve_pokemons_by_type(type, reader):
    # lê o conteudo de reader e o transforma de json
    # para dicionário
    pokemons = json.load(reader)["results"]
    # filtra somente os pokemons do tipo escolhido
    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]
    return pokemons_by_type
```

Substituiremos a abertura do nosso arquivo real por um objeto que possui as implementações funcionais de um arquivo(método read, necessário na operação de leitura). Este objeto será alocado na memória, "simulando" nosso arquivo real.

```
import json
import pytest
from pokemon import retrieve_pokemons_by_type
from io import StringIO
# Criamos o contexto de um pokemon do tipo grama
@pytest.fixture
def grass_type_pokemon():
    return {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }
# Criamos o contexto de um pokemon do tipo água
@pytest.fixture
def water_type_pokemon():
    return {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }


def test_retrieve_pokemons_by_type(grass_type_pokemon, water_type_pokemon):
    # criamos um arquivo em memória que o seu conteúdo são os dois pokemons
    fake_file = StringIO(
        json.dumps({"results": [grass_type_pokemon, water_type_pokemon]})
    )
    # quando pesquisamos por pokemons do tipo grama,
    # o pokemon do tipo água não deve ser retornado
    assert grass_type_pokemon in retrieve_pokemons_by_type("Grass", fake_file)

```

Um segundo cenário é onde a função espera o nome de um arquivo e a abertura do mesmo acontece dentro da função.

```
import json


def retrieve_pokemons_by_type(type, filepath):
    with open(filepath) as file:
        pokemons = json.load(file)["results"]
        pokemons_by_type = [
            pokemon for pokemon in pokemons if type in pokemon["type"]
        ]
        return pokemons_by_type
```

Vamos aproveitar da natureza dinâmica da linguagem e substituir o método open em tempo de execução por um objeto mock_open, que já vem embutido na linguagem e se comporta como o open, retornando o que foi definido em read_data como seu conteúdo. Um detalhe interessante é que esse objeto obtido atráves da função mock_open também possui a capacidade de armazenar informações sobre como foram as chamadas de seus métodos e os parâmetros recebidos.

```
import json
from unittest.mock import mock_open, patch
from pokemon import retrieve_pokemons_by_type

def test_retrieve_pokemons_by_type():
    # definimos um pokemon do tipo grama
    grass_type_pokemon = {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }
    # definimos também um pokemon do tipo água
    water_type_pokemon = {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }
    pokemon_json_content = json.dumps({"results": [grass_type_pokemon, water_type_pokemon]})
    # substituímos a função padrão do python open por mock_open
    # uma versão que se comporta de forma parecida, porém simulada
    with patch("builtins.open", mock_open(read_data=pokemon_json_content)):
        # repare que o nome do arquivo não é importante aqui
        # a esses parâmetros não utilizados damos o nome de dummies
        # como neste contexto alteramos o open pelo mock_open,
        # o argumento "dummy" poderia ser substituído por qualquer coisa, já que não será utilizado pela função
        assert retrieve_pokemons_by_type("Grass", "dummy") == [
            grass_type_pokemon
        ]
```

A primeira abordagem torna o código menos acoplado a um arquivo e nos permite utilizar qualquer objeto (que tenha o método reader) em seu lugar. Assim, essa função pode ser reutilizada, por exemplo, para ler pokemons a partir de uma requisição web ou utra fonte.

