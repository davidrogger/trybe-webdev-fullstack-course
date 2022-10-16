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

