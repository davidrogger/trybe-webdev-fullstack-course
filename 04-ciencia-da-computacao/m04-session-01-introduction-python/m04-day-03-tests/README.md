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

Instalando requirement.txt file: `python3 -m pip -r requirement.txt`

#

Usando o pytest é necessário que os arquivos e as funções de teste tenham `test_` como prefixo, para a ferramenta encontrar e realizar o teste.

Uma função de teste é similar a qualquer outra, porém tem o propósito de verificar se o resultado obtido foi o mesmo do esperado.
No código, isto pode ser visto através da utilização da palavra reservada assert.

O comando assert funciona da seguinte maneira: caso a epxressão recebida seja verdadeira (avaliada como True), nada acontece. Porém caso seja falsa (avaliada como False), um exceção do tipo AssertionError é lançada. A pytest captura este erro e tenta apresentar uma comparação entre o esperado e o recebido da melhor maneira possível.

rodando o test: `python3 -m pytest`
