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

# Dados embutidos

## Booleanos

Os valores booleanos True e False pertencem ao tipo embutido bool.
Deve-se ter uma atenção ao início maiúsculo dessas palavras reservadas.

## Números inteiros (int)

O primeiro dos tipos numéricos é o int, ele representa um número inteiro, ou seja, é escrito sem parte fracionária.

## Números fracionários (float)

O segundo tipo numérico é o float, também conhecido por ponto flutuante, ele representa um número decimal ou fracionário.

## Strings (str)

Representa uma cadeia de caracteres ou, como popularmente conhecida, uma string. As strings são definidas envolvendo um valor com aspas simples ou duplas.

Temos ainda estruturas do tipo:

- sequência(list, tuple, range);
- conjuntos (set, frozenset);
- mapeamento(dict);
- sequências binárias(bytes, bytearray, memoryview)

Entre muitos outros tipos:
- [Tipos padrões do Python](https://docs.python.org/3/library/stdtypes.html)
- [Outros tipos de dados do Python](https://docs.python.org/3/library/datatypes.html)

## Listas (list)

Uma lista é uma sequência mutável e ordenada de elementos. Ela pode armazenar elementos heterogêneos, ter seu tamanho variável e crescer à medida que itens são adicionados.

Sintaxe:
```
fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("maçã")  # retorna o índice onde a fruta está localizada, neste caso, 1

fruits.sort()  # ordena a lista de frutas
```

## Tuplas (tuple)

São similares a lista, porém não podem ser modificados durante a execução do programa.

Sintaxe:
```
user = ("Will", "Marcondes", 42) # elementos são definidos separados por vírgula, envolvidos por parênteses

user[0]  # acesso também por índices
```

# Conjuntos (set)

Um conjunto é uma coleção de elementos únicos e não ordenados. Conjuntos implementam operações de união, intersecção e outras.

Sintaxe:
```
permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
```

# Conjuntos imutáveis (frozenset)

É uma variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.

Sintaxe:
```
permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
```

# Dicionários (dict)

Estrutura que associa uma chave a um determinado valor. Assim como o objeto no JavaScript.

Sintaxe:
```
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores
```

# Range (range)

Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu valor de acordo com o passo (step) definido. Pode ser declarado como range( [start], stop[, step] ), em que start e step podem ser omitidos, possuindo valores iniciais iguais a 0 e 1 respectivamente.

O stop não é incluído na sequência, portanto, caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)

Os valores são criados à medida que esta sequência é percorrida.

Sintaxe:

```
# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

Além dos tipos básicos, existem outros como datas, tuplas, nomeadas, arrays, enumerações e outros, mas estes têm de ser importados de seus respectivos módulos.

Exercício 10: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29. Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores?

Se forem somente os valores seria Tupla, agora se tiverem chave e valor, dict.

Exercício 11: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

Como seria necessário um chave que representa o item contado, e um valor onde indica quantas vezes ele aparece.

# Estruturas condicionais

Python, não usa de switch, por considerar if já suprir a necessidade:

Sintaxe com exemplo:
```
position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"
```
Python usa um identação de 4 espaço também.

Em alguns casos podemos usar uma estrutura de mapeamento para simplificar o aninhamento de condicionais.

```
key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]
```


# Estruturas de repetição

## for

Dado que a maior parte do tempo estamos percorrendo estruturas, os criadores do python decidiram que o for each seria o laço de repetição principal na linguagem.



