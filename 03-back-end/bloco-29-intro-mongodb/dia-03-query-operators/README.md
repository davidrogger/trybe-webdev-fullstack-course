anotações pessoais do dia...

# Operador $all

Seleciona todos os documentos em que o valor do campo é um array que contenha todos os elementos especificados. Ele é equivalente ao operador $and, pois fará a comparação de todos os valores especificados, porém, para arrays.
Ele sempre é usado quando é preciso passar mais deu m valor de comparação, e é irrelevante para a verificação tanto a existência de mais elementos no array quanto a ordem em que esses elementos estão.

Entenda essa diferença com estar duas queries:
```
db.inventory.find({ tags: ["red", "blank"] });

db.inventory.find({ tags: { $all: ["red", "blank"] } });
```

A primeira query retornará somente os documentos em que o array tags seja exatamente igual ao passado como parâmetro no filtro, ou seja, contenha apenas esses dois elementos, na mesma ordem.

Já a segunda analisará o mesmo array, independentemente da existência de outros valores ou a ordem em que os elementos setejam.

Utilizar o $all poupa um pouco de código. Veja um exemplo utilizando o $all:

```
db.inventory.find(
  { tags: { $all: [ "ssl", "security" ] } }
);
```

Equivalente:

```
db.inventory.find(
  {
    $and: [
      { tags: "ssl" },
      { tags: "security" }
    ]
  }
);
```

# Operador $elemMatch

Seleciona somente os documentos em que o array contém ao menos um elemento.

Exemplo:
```
// db - collection scores
{ _id: 1, results: [82, 85, 88] },
{ _id: 2, results: [75, 88, 89] }
```

CLI
```
db.scores.find({
  results: { $elemMatch: { $gte: 80, $lt: 85 } }
});
```

Trará somente o _id 1, já que o 82 satisfaz as duas verificações.

Pode-se utilizar o operador em arrays que contenham subdocumentos e especificar vários campos desses subdocumentos como filtro. Veja os seguintes documentos na coleção survey:

```
// db - collections survey
{
  _id: 1,
  results: [
    { product: "abc", score: 10 },
    { product: "xyz", score: 5 }
  ]
},
{
  _id: 2,
  results: [
    { product: "abc", score: 8 },
    { product: "xyz", score: 7 }
  ]
},
{
  _id: 3,
  results: [
    { product: "abc", score: 7 },
    { product: "xyz", score: 8 }
  ]
}
```

CLI:
```
db.survey.find({
  results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } }
});
```

Será retornado apenas o documento com id 3.

# Operador $size

Seleciona documentos em que um array contenha um número de elementos especificado.

Considere a coleção products a seguir, contendo documentos em que o campo tags pode ser um array:
```
{ _id: 1, tags: ["red", "green"] },
{ _id: 2, tags: ["apple", "lime"] },
{ _id: 3, tags: "fruit" },
{ _id: 4, tags: ["orange", "lemon", "grapefruit"] }
```

Ao executar a query abaixo, apenas os documentos com id igual 1 e 2 serão retornados, pois sesus campos tags, são arrays e contêm exatamente 2 elementos.

db.products.find({
  { tags: { $size: 2 } }
});

O operador $size aceita apenas valores númericos, ou seja ele verifica se um array possui exatamente um certo número de elementos. Por isso, n]ao é possível utilizá-lo, por exemplo, para trazer um array com comprimento maior que 2 ($gt: 2). Se for necessário selecionar documentos com base me valores diferentes, a solução é criar um campo que se incremente quando elementos forem adicionados ao array.