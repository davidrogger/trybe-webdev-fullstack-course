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



