# Python

É uma linguagem de programação que busca simplicidade em sua sintaxe, resultando assim em legibilidade do código e maior produtividade.

Por sua simplicidade e didática, Python foi escolhida como a linguagem principal a ser ensinada na maioria das universidades dos Estados Unidos.

Muito popular devido à area de ciência de dados, ela pode ser usada em:

- criação de aplicações web;
- automoção de tarefas repetitivas;
- aplicativos desktop;
- aplicações para dispositivos móveis (não tão popular nessa área e nem muito recomendada)

Além da sua simplicidade e didática ela tras consigo um conjunto de bibliotecas úteis para diversas tarefas, como manipular dados no formato JSON e CSV. A linguagem também possui um servidor web simples, ferramenta para emails e muito mais.

# Terminal Interativo (REPL)

Normalmente os sistemas operacionais Linux e Mac, já vem com uma versão Python instalada, pois utilizam a linguagem em diversos programas essenciais.
Para verificar basta digitar no terminal `python3`.

Retorno deve ser algo assim:
```
Python 3.8.2 (default, Jun  2 2020, 13:51:17)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Este tipo de termina é chamado de REPL (Read-Eval-Print Loop), sendo traduzido para o português como loop de leitura-avaliação-impressão ou terminal interativo. Esse terminal recebe uma entrada digitada pela pessoa, avalia sua execução e imprime seu resultado.

Por ser muito simples o tradicional "Olá Mundo"(print('Olá Mundo')) , a forma pythonistica de fazer o hello world é usando o import antigravity, para reproduzir uma tirinha.

Agora usando `import this`

A fim de padrozniar códigos escritos em Python, foi lançado um guia de estilo conhecido como PEP 8 ou Python Enchancement Proposal 8. A PEP 8 é um documento desenvolvido pela comunidade pythônica que visa aprimorar a legibilidade dos códigos.

# Python no Docker

Criando um container temporario, que é deletado após finalizar o seu uso:
```
docker run -it --rm python
```

Criando um Dockerfile:
```
FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-chache-dir -r requirements.txt

COPY . .

CMD ["python", "./seu-arquivo.py"]
```

Para iniciar o Dockerfile:
```
docker build -t my-python-app .
docker run -it --rm --name my-running-app my-python-app
```

Executando um script Python usando a imagem python Docker diretamente:
```
docker run -it --rm --name nome-do-seu-script -v "$PWD":/usr/src/myapp -w /usr/src/myapp python:3 python seu-arquivo.py
# -v "$PWD":/usr/src/myapp - monta o diretório atual para dentro do contêiner
# -w /usr/src/myapp - muda o WORKDIR para executar o comando no diretório recém montado.
```

# Algumas Diferenças entre o Python e o JS

Operador `//` não existe no JS, ele retorna o quociente arredondado sem os valores após o ponto:
```
3 // 2 # saída 1
3 / 2 # saída 1.5
```

Operação de comparação `"1" == 1` o resultado será falso, pois como são valores de tipos diferentes, nenhuma conversão é realizada.

## Operadores de Comparação

Quando queremos fazer operações lógicas, como verificar se uma temperatura está entre dois valores, utilizamos o operador and. Ou seja, para verificar se uma temperatura é menor que 25 graus e maior que 18 graus, podemos fazer algo como `temperatura < 25 and temperatura > 18`. Em python pode-se comparar assim `18 < temperatura < 25`

Da mesma forma, podemos validar intervalos utilizando o operador `or`.
Se em um parque pessoas com idade menor ou igual a 5 e maiores de 65 anos não pagam, poderíamos escrever uma validação da seguinte maneira `idade <= 5 or idade >= 65`.
