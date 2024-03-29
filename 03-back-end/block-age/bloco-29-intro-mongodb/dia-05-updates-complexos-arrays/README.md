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

# Operador $pop

Usado para remover o primeiro ou o último elemento de um array. Passando o valor -1 para remover o primeiro elemento e o valor 1 para remover o último elemento do array.

## Removendo o primeiro item de um array
```
db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });
```

## Removendo o ultimo item de um array
```
db.supplies.updateOne({ _id: 1 }, { $pop: { items: 1 } });
```

# Operador $pull

Remove de um array existente todos os elementos com um ou mais valores que atendam à condições especificadas.

# Removendo todos os itens iguais a um valor;

```
{
  _id: 1,
  items: [
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
},
{
  _id: 2,
  items: [
    {
      "name" : "pencil",
      "price" : 5.29,
      "quantity" : 2,
    },
    {
      "name": "envelopes",
      "price": 19.95,
      "quantity": 8,
    },
    {
      "name": "backpack",
      "price": 80.12,
      "quantity": 1,
    },
    {
      "name": "pens",
      "price": 56.12,
      "quantity": 5,
    },
  ],
}
```

Removendo do array os itens pens e envolopes:
```
db.supplies.updateMany(
  {},
  {
    $pull: {
      items: {
        name: { $in: ["pens", "envelopes"] },
      }
    }
  }
)

//resultados
{
  _id : 1,
  items : [
    {
      "name" : "notepad",
      "price" : 35.29,
      "quantity" : 2,
    },
  ],
},
{
  _id : 2,
  items : [
    {
      "name" : "pencil",
      "price" : 5.29,
      "quantity" : 2,
    },
    {
      "name" : "backpack",
      "price" : 80.12,
      "quantity" : 1,
    },
  ],
}
```

# Removendo todos os itens que atendem a uma condição diretamente no $pull

```
//profiles
{ _id: 1, votes: [3, 5, 6, 7, 7, 8] }
```

Removendo todos os elementos do array votes que sejam maiores ou iguais a 6 (operador gte);
```
db.profiles.updateOne(
  { _id: 1 },
  {
    $pull: {
      votes: { $gte: 6 },
    }
  }
);

//resultados
{ _id: 1, votes: [3,  5] }
```

# Removendo itens em um array de Documentos
```
//survey
{
  _id: 1,
  results: [
    { item: "A", score: 5 },
    { item: "B", score: 8, comment: "Strongly agree" },
  ],
},
{
  _id: 2,
  results: [
    { item: "C", score: 8, comment: "Strongly agree" },
    { item: "B", score: 4 },
  ],
}
```

Removendo do array results todos os elementos que contenham o campo score igual a 8 e o campo item igual a "B".
```
db.survey.updateMany(
  {},
  {
    $pull: {
      results: {
        score: 8,
        item: "B"
      }
    }
  }
);

// resultado
{
  _id: 1,
  results: [ { "item": "A", "score": 5 } ],
},
{
  _id: 2,
  results: [
    { "item": "C", "score": 8, "comment": "Strongly agree" },
    { "item": "B", "score": 4 },
  ],
}
```

# Operador $addToSet

Utilizado quando você precisa garantir que os valores de um array não sejam duplicados. Ou seja, ele garante que apenas valores únicos estejam presentes no array, tratando o array como se fosse um conjunto (uma vez que conjuntos, na matemática, não podem conter elementos duplicados).

Aspectos do $addToSet:

- Utilizá-lo em um campo que não existe no documento alterado, ele criará um campo do tipo array com o valor especificado na operação;
- Em um campo já existente no documento, mais esse campo não for um array, a operação não funcionará;
- Se o valor passado for um documento, o MongoDB o considerará como duplicado se um documento existente no array for exatamente igual ao documento a ser adicionado, ou seja, possui os mesmo campos com os mesmos valores e esses campos estão na mesma ordem.

Exemplo:
```
// inventory
{
  _id: 1,
  item: "polarizing_filter",
  tags: ["electronics", "camera"],
}
```

# Adicionando ao array

Adiciona o elemento "accessories" ao array targs desde que não exista no array:
```
db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { targs: "acessories" } },
  );

// resultado

{
  _id: 1,
  item: "polarizing_filter",
  tags: [
    "electronics",
    "camera",
    "accessories",
  ],
}
  ```

# Se o valor existir

A operação não surtirá efeito:
```
db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "camera"  } },
);

//resultado
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }
```

# Com o modificador $each

Permite adicionar múltiplos valores a um array.
```
{ _id: 2, item: "cable", tags: ["electronics", "supplies"] }
```
Para adicionar alguns elementos a mais no array tags:
```
db.inventory.updateOne(
  { _id: 2 },
  {
    $addToSet: {
      tags: {
        $each: ["camera", "electronics", "accesssories"],
      }
    }
  }
);

// resultado
{
  _id: 2,
  item: "cable",
  tags: ["electronics", "supplies", "camera", "accessories"],
}
```

# Array filters
```
db.recipes.insertMany([
  {
    title: "Panqueca Simples",
    ingredients: [
      { name: "Farinha", quantity: 2},
      { name: "Oleo", quantity: 4 },
      { name: "Leite", quantity: 1 },
    ],
  },
  {
    title: "Bolo de Cenoura",
    ingredients: [
      { name: "Farinha", quantity: 2},
      { name: "Oleo", quantity: 1, unit: "xícara" },
      { name: "Ovo", quantity: 3},
      { name: "Cenoura", quantity: 3},
      { name: "Fermento", quantity: 1},
    ],
  },
]);
```

Quando não há o conhecimento da posição de um elemento que precisa ser atualizado dentro de um array é usado o arrayFilters, para melhor dinâmismo.
```
db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
    $set: {
      "ingredients.${elemento}.unit": "xícara",
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha Integral } ] },
);
```

