# Operador $push

Adiciona um valor a um array. Se o campo não existir no documento, um novo array com o valor em um elemento será adicionado.

Sintaxe:
```
{ $push: { <campo1>: <valor1>, ... } }
```

Em conjunto com o $push pode-se usar de modificadores. Cada um desses modificadores tem funções específicas:

- $each: Adiciona múltiplos valores a um array;
- $slice: Limita o número de elementos do array. Requer o uso do modificador $each;
- $sort: Ordena os elementos do array. Requer o uso do modificador $each;
- $position: Especifica a posição do elemento que está sendo inserido no array. Também requer o modificador $each. Sem o modificador $position, o operador $push adiciona o elemento no final do array.

Quando utilizado um modificador, o processo de push ocorre na seguinte ordem, independentemente da ordem em que os modificadores aparecem:

1. Altera o array para adicionar os elementos na posição correta;
2. Aplica a ordenação ($sort), se especificada;
3. Limita o array ($slice), se especificada;
4. Armazena o array.

# Adicionando um valor a um array

Considere a coleção supplies, uma coleção vazia. A operação abaixo adiciona um objeto que tem as informações da compra de um produto ao array items do documento em que o _id seja igual a 1 na coleção supplies.
Para não precisarmos escrever uma query só para fazer o insert do document, vamos usar a opção upsert: true para já adicionar o elemento ao mesmo tempo que usarmos o operador $push. O upsert não influencia a forma como o $push funciona.
```
use sales;
db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        "name": "notepad",
        "price":  35.29,
        "quantity": 2,
      },
    },
  },
  { upsert: true },
);
```

# Adicionando múltiplos valores a um array

Também é possível adicionar múltiplos valores a um array utilizando o operador $push, mas dessa vez será necessário adicionar o modificador $each.

A operação abaixo adicionará mais dois produtos ao array items do primeiro documento na coleção supplies:
```
db.supplies.updateOne(
  {},
  {
    $push: {
      items: {
        $each: [
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
        ],
      },
    },
  },
  { upsert: true },
);
```

# Múltiplos modificadores

O $push pode ser utilizado com múltiplos modificadores, fazendo várias operações ao mesmo tempo em um array.
```
db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        $each: [
          {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
        ],
        $sort: { quantity: -1 },
        $slice: 2,
      },
    },
  },
  { upsert: true },
);
```

Essa operação utiliza os seguintes modificadores;

- $each para adicionar múltiplos documentos ao array items;
- $sort para ordenar todos os elementos alterados no array items pelo campo quantity em ordem decrescente;
- $slice para manter apenas os dois primeiros elementos ordenados no array items.

