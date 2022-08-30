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

# Operadores $min e $max

Ambos fazem o mesmo tipo de comparação antes de executar a operação, porém em sentidos opostos:

- $min Altera o valor do campo atual para o valor passado pelo método se o valor for menor do que o valor do campo atual.
- $min Altera o campo do campo atual para o valor passado pelo método se o valor for maior que o valor do campo atual.

Ambos podem comparar valores de diferentes tipos, utilizando sempre a [ordem de comparação BSON](https://www.mongodb.com/docs/manual/reference/bson-type-comparison-order/#faq-dev-compare-order-for-bson-types).

Considere um cenário em que temos uma collection com três documentos, cada documento possui um atributo id e um atributo campo que é um número inteiro:
```
db.collection.find();

//resultado

[
  { _id: 1, campo: 25 },
  { _id: 2, campo: 50 },
  { _id: 3, campo: 100 }
]

```

Vamos aplicar um update utilizando o operador $max. Nosso intuito é atingir todos os documentos com atributo campo que possuem um valor de no máximo 75. Nesse caso, o operador não só define o escopo máximo, mas também o contéudo que o campo deve passar a ter:
```
db.collection.updateMany({}, { $max: { campo: 75 } });
// Atualizando todos os valores do atributo "campo"
// para 75 caso sejam menores

db.collection.find();

//resultado
[
  { _id: 1, campo: 75 }, // valor anterior: 25
  { _id: 2, campo: 75 }, // valor anterior: 50
  { _id: 3, campo: 100 }, // não encontrou no escopo
]
```

Com o operador $min é praticamente a mesma coisa, porém na direção inversa:
```
db.collection.updateMany({}, { $min: { campo: 42 } });
// Atualizando todos os valores do atributo "campo"
// para 42 caso sejam maiores

db.collection.find();

//resultado
[
  { _id: 1, campo: 42 }, // valor anterior: 75
  { _id: 2, campo: 42 }, // valor anterior: 75
  { _id: 3, campo: 42 }, // valor anterior: 100
]
```

Aqui atingimos todas as ids, justamente pelo fato de termos definido um escopo que é de no mínimo, 42. Dessa forma, todos os documentos com atributos campo que tivessem um valor superior, foram redefinidos.

Poderíamos resumir ${max}, "arrasta" os valores para cima e o ${min}, "arras" os valores para baixo.

Mais exemplos:
```
use conteudo_trybe;
db.scores.insertOne(
  { _id: 1, highScore: 800, lowScore: 200 }
);
```

# Comparando números

No documento de exemplo, o valor atual do campo lowscore é 200. A operação abaixo utiliza o $min para comparar 200 com o valor especificado 150 e alterar o valor do campo lowscore para 150 porquê 150 é menor do que 200:
```
db.scores.update({ _id: 1 }, { $min: { lowScore: 150 } });

//resultado
{ _id: 1, highScore: 800, lowScore: 150 }
```

Se executar a operação abaixo, ela não terá efeito no documento porque o valor do campo lowscore é mnor do que 250, e o documento não será alterado:
```
db.scores.update({ _id: 1 }, { $min: { lowScore: 250 } })
```

O campo highscore tem o valor 800. A operação abaixo usa o $max para comparar 800 e o valor especificado 950, e então altera o valor do campo highscore para 950 é maior que 800:
```
db.scores.update({ _id: 1 }, { $max: { highScore: 950 } });

//resultado
{ _id: 1, highScore: 950, lowScore: 150 }
```

Assim como no exemplo utilizando o operador $min, a operação abaixo também não afetará em nada o documento porque o valor de highscore é maior do que 870.
```
db.scores.update({ _id: 1 }, { $max: { highScore: 870 } });
```

# Comparando datas

Os operadores são usados para comparar valores do tipo Date.
```
use conteudo_trybe;
db.tags.insertOne(
  {
    _id: 1,
    desc: "crafts",
    dateEntered: ISODate("2019-10-01T05:00:00Z"),
    dateExpired: ISODate("2019-10-01T16:38:16Z")
  }
);
```

Utilizando o operador $min para comparar o valor do campo dateENtered e altera seu valor, porque 25/09/2019 é uma data menor do que o valor atual. Ao mesmo tempo, o operador $max também é usado para comparar o valor do campo dateExpired e altera esse valor, porque 02/10/2019 é uma data maior do que o valor atual:
```
db.tags.update(
  { _id: 1 },
  {
    $min: { dateEntered: new Date("2019-09-25") },
    $max: { dateExpired: new Date("2019-10-02") }
  }
);
```

# Operador $currentDate

Atribui ao valor de um campo a data corrente, utilizando um tipo de Date ou timestamp. Se você não especificar o tipo, por padrão. o MongoDB atribui o valor do tipo Date. O operador $currentDate tem o seguinte forma:
```
{ $currentDate: { <campo>: <typeSpecification>, ... } }
```

typeSpecification pode ser:
- Um valor booleano true, para atribuir o valor da data corrente ao campo utilizando o tipo Date;
- Um documento que espeicfica o tipo do campo. Esse documento pode ser { $type: "timestamp" } ou { $type: "date" }.
```
use conteudo_trybe;
db.customers.insertOne(
  { _id: 1, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z") }
);
```

É possivel alterar o valor do campo lastModified para a data corrente e criar o campo cancellation.date com o timestamp corrente, utilizando o operador $currentDate, e ainda alterar o campo status para D e criar o campo cancellation.reason com o valor "user request", utilizando o operador $set:
```
db.customers.updateOne(
  { _id: 1 },
  { $currentDate: {
    lastModified: true,
    "cancellation.date": { $type: "timestamp" }
  }, $set: {
      "cancellation.reason": "user request",
      status: "D"
    }
  }
);

//resultado
{
  "_id": 1,
  "status": "D",
  "lastModified": ISODate("2020-01-22T21:21:41.052Z"),
  "cancellation": {
    "date": Timestamp(1579728101, 1),
    "reason": "user request"
  }
}
```

# Operador $rename

Para renomear um determinado atributo de um ou mais documentos.
Esse operador recebe um documento contendo o nome atual do campo e o novo nome. Pode ser utilizado com os métodos updateOne() ou updateMany, e também pode receber um critério de seleção de documentos.
```
use conteudo_trybe;
db.fruits.insertOne(
  { _id: 100, name: "Banana", quantity: 100, inStock: true }
);
```

Altera o nome do campo name para productName no documento em que o valor do campo name seja igual a Banana:
```
db.fruits.updateOne(
  { name: "Banana" },
  { $rename: { name: "productName" } }
);

//resultado
{ _id: 100, quantity: 100, inStock: true, productName: 'Banana' }
```

