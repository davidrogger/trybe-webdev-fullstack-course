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
