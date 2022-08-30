# Método Update


Um método de update pode receber como parâmetro vários operadores diferentes em uma mesma operação.

- updateOne(<filtro>, <update>, <opcoes>)

Exemplo:
```
db.inventory.updateOne(
  { item: "paper" },
  { $set: { "size.uom": "cm", status: "P" } }
);
```

Primeiro parâmetro é o filtro o primeiro documento item com paper, terá seu size e status atualizado para o segundo parâmetro. 

- updateMany(<filtro>, <update>, <opcoes>)

Atualiza todos os itens que satisfaçam o critério de filtro.

Exemplo:
```
db.inventory.updateMany(
  { "qty": { $lt: 50 } },
  { $set: { "size.uom": "in", status: "P" } }
);
```

Todos documentos com menos de 50 qty, terão seus valores de size e status atualizados conforme o segundo parâmetro.Caso o primeiro parâmetro de filtro, esteja vazio em ambos update, o filtro não será aplicado, fazendo no One atualizar o primeiro documento e many, todos os documentos.

# Operador $set

Altera o valor de um campo específico.
Se o campo não existir, o operador adiciona um novo campo com o valor espeicificado. Se for usado dot notation, os documentos embedados necessários serão criados para suprir o caminho do campo.

Pode-se especificar múltiplos pares de campos-valores que o operador alterará ou criará cada um desses campos.

Exemplo:
```
use conteudo_trybe;
db.products.insertOne({
  _id: 100,
  sku: "abc123",
  quantity: 250,
  instock: true,
  reorder: false,
  details: { model: "14Q2", make: "xyz" },
  tags: [ "apparel", "clothing" ],
  ratings: [ { by: "ijk", rating: 4 } ]
})
```

# Alterando campos no primeiro nível (top-level)
```
db.products.update(
  { _id: 100 },
  { $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: [ "coats", "outerwear", "clothing" ]
    }
  }
);
```

Altera o valor de quantity para 500, details para um novo documento embedado e tags para um novo array.
Vários campos foram agrupados e com isso são alterados em um mesmo comando.

# Alterando campos em documentos embedados

Para alterar campos dentro de subdocumentos, você deve utilizar o mesmo conceito de dot notation.
```
db.products.update(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);
```
Altera o valor de make para zzz.

# Alterando valores em arrays

Arrays são estruturas muito importantes na modelagem de dados do MongoDB, e em algum momento será necessário fazer updates nessas estruturas.
```
db.products.update(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);
```
Alterando o documento com ID 100, o segundo elemento indicado como 1, do array tags e o campo rating no primeiro elemento índice 0 do array ratings.

# Operador $mul

Multiplica o valor de um campo por um número espeicificado, persistindo o resultado dessa operação sem a necessidade do operador $set.

Exemplo:
```
db.products.insertOne(
  { "_id": 1, "item": "ABC", "price": NumberDecimal("10.99"), "qty": 25 }
);
```

Alterando os valores do documento, utilizando o operador $mul para multiplicar os valores dos campos price e qty:
```
db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);
```
O resultado dessa operação o novo valor do campo price é o valor original 10.99 multiplicado por 1.25 e o valor de qty, originalmente era 25, é multiplicado por 2.

Pode-se utilizar o $mul em um campo que não exista no documento. Nesse caso, o operador criará o campo e será atribuído a ele o valor zero do mesmo tipo numérico do multiplicador.

Considerando um outro documento na coleção products:
```
db.products.insertOne(
  { _id: 2, item: "Unknown" }
);
```

Um update no documento, aplicando o operador $mul no campo price, que não existe neste documento:
```
db.products.update(
  { _id: 2 },
  { $mul: { price: NumberLong("100") } }
);
```

Como resultado, temos o campo price criado no documento com o valor zero, do mesmo tipo número do multiplicador. Nesse caso, o tipo é NUmberLong.
```
{ "_id": 2, "item": "Unknown", "price": NumberLong(0) }
```
#
Pode-se multiplicar valores com tipos diferentes.
```
db.products.insertOne(
  { _id: 3,  item: "XYZ", price: NumberLong("10") }
);
```

Multiplicando o valor do campo price que é do tipo NumberLong("10"), por NumberInt(5):
```
db.products.update(
  { _id: 3 },
  { $mul: { price: NumberInt(5) } }
);
```

Resultado:
```
{ "_id": 3, "item": "XYZ", "price": NumberLong(50) }
```

[Regras de multiplicação](https://www.mongodb.com/docs/manual/reference/operator/update/mul/#multiplication-type-conversion)

# Operador $inc

Incrimenta ou descrementa valores em um campo específico, utilizando tanto valores positivos quanto negativos.
Bastante útil para fazer alterações em campos numéricos sem a necessidade prévia de uma consulta para retornar o valor atual do campo. Com o $inc, em uma única operação isso é possível!

Considerando que você tenha o seguinte documento na coleção increment:
```
db.increment.insertOne(
  {
    _id: 1,
    sku: "abc123",
    quantity: 10,
    metrics: {
      orders: 2,
      ratings: 3.5
    }
  }
)
```

Na operação de update a seguir, o operador $inc é utilizado para decrementar o valor do campo qty em 2 (incrementa em -2) e incrementar o valor do campo metrics.orders em 1:
```
db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);
```

Resultado:
```
{
  "_id": 1,
  "sku": "abc123",
  "quantity": 8,
  "metrics": {
    "orders": 3,
    "ratings": 3.5
  }
}
```

