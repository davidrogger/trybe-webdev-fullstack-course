# Operadores de Comparação

Para comparações de BSON types diferentes, deve-se entender a [ordem de comparação](https://www.mongodb.com/docs/manual/reference/bson-type-comparison-order/#bson-types-comparison-order).

Os operadores seguem uma sintaxe padrão que é composta por um subdocumento.
```
{ <campo>: { <operador>: <valor> } }
```

Os operadores são identificados por seu prefixo $.

# Operador $lt

Atributo filtrado é menor que o valor especificado

Exemplo:
```
db.inventory.find({ qty: { $lt: 20 } });
```

Selecionará todos os documentos na coleção inventory com o valor do atributo qty menor que 20.

# Operador $lte

Atributo filtrado menor ou igual.

Exemplo:
```
db.inventory.find({ qty: { $lte: 20 } });
```

Documentos na coleção inventory com valor igual ou menor que 20.

# Operador $gt

Atributo filtrado maior.

Exemplo:
```
db.inventory.find({ qty: { $gt: 20 } });
```

Documentos na coleção inventory com valor maior que 20.

# Operador $gte

Atributo filtrador maior ou igual.

Exemplo:
```
db.inventory.find({ qty: { $gte: 20 } });
```
Documentos na coleção inventory com valor maior ou igual a 20.

# Operador $eq

Atributo filtrado igual.

Exemplo:
```
db.inventory.find({ qty: { $eq: 20 } });
```
Documentos na coleção inventory com valor igual a 20.
Ele é equivalente ao filtro { <campo>: <valor> } e não tem nenhuma diferença de performance.
```
db.inventory.find({ qty: 20 })
```

# Operador $ne

Atributo filtrado não é igual.

Exemplo:
```
db.inventory.find({ qty: { $ne: 20 } });
```
Documentos na coleção inventory diferentes de 20.

# Operador $in

Seleciona os documentos em que o valor do atributo é igual a um dos valores do array. Para executar comparações de igualidade com mais de um valor no mesmo atributo.

Exemplo:
```
db.inventory.find({ qty: { $in: [5, 15] } });
```
Todos Documentos na coleção inventory com os valores qty 5 e 15.

# Operador $nin

Seleciona os documentos em que o valor do atributo não é igual a um dos valores do array.

Exemplo:
```
db.inventory.find({ qty: { $nin: [5, 15] } });
```
Todos documentos na coleção inventory que não tem o valor 5 e 15.

# Practice

db: business
collection: restaurants
data: ./292-Exercises/exercise-filter-operators.js

1. Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough)
```
db.restaurants.countDocuments({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } })
```
2. Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American. (utilizando o atributo cuisine)
```
db.restaurants.countDocuments({ cuisine: { $ne: "American" } });
```
3. Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8. (utilizando o atributo rating)
```
db.restaurants.countDocuments({ rating: {$gte: 8} });
```
4. Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.
```
db.restaurants.countDocuments({ rating: { $lt: 4 } });
```
5. Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.
```
db.restaurants.countDocuments({ rating: { $nin: [5, 6, 7] } });
```

# Operador $exists

Sintaxe:
```
{ campo: { $exists: <boolean> } }
```

Quando o boolean é verdadeiro, o operador exists encontra os documentos que  contêm o atributo, incluindo os documentos em que o valor do atributi é igual a null. Se o boolean é false, a consulta retornar somente os documentos que não contêm o atributo.

Exemplo:
```
db.inventory.find({ qty: { exists: true } });
```
Essa consulta retorna todos os documentos da coleração inventory em que o atributo qty existe.

Também pode-se combinar operadores, como no exemplo:
```
db.inventory.find({ qty: { exists: true, $nin: [5, 15] } });
```
Documentos da coleração inventory em que o atributo qty existe **E** seu valor é diferente de 5 e 15.

# Operadores Lógicos

Podem ser usados nos mesmos métodos para leitura e atualização de documentos do MongoDB. Eles ajudam a elaborar consultas mais complexas, contendo cláusulas para retornar documentos que satisfaçam os filtros.

# Operador $not

Sintaxe:
```
{ campo: { $not: { <operador ou expressão> } } }
```

Executa operação lógica de negação no <operador ou expressão> especificado e seleciona os documentos que não te correspondam ao operador/expressão. Isso também inclui os documentos que não contêm o atributo.

Exemplo:
```
db.inventory.find({ price: { $not: { $gt: 1.99 } } })
```

Documentos na coleção inventory em que o valor do atributo price é menor ou igual a 1.99. (não é maior que 1.99 ou em que o **price não existe**).
A expressão { $not: { $gt: 1.99 } } retorna um resultado diferente do operador $lte. Ao utilizar { $lte: 1.99 }, os documentos retornados serão somente aqueles em que o campo **price existe** e cujo valor é menor ou igual a 1.99.

# Operador $or

Operação lógica **OU** em um array de uma ou mais expressões e seleciona os documentos que satisfaçam ao menos uma das expressões.

Sintaxe:
```
{ $or: [{ <expression1> }, { <expression2> }, ..., { <expressionN> }] }
```

Exemplo:
```
db.inventory.find({ $or: [ { qty: { $lt: 20 } }, { price: 10 } ] })
```

Documentos da coleção inventory em que o valor do atributo qty é menor que 20 ou o price é igual a 10.

# Operador $nor

Executa uma operação lógica de NEGAÇÃO, porém, em um array de uma ou mais epxressões, e seleciona os documentos em que todas essas expressões falhem, ou seja, seleciona os documentos em que todas as expressões desse array sejam falsas.

Sintaxe:
```
{ $nor: [ { <expressao1>, <expressao2>, ..., <expressaoN> } ] }
```

Exemplo:
```
db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })
```
Documentos da coleção inventory que;
- Contêm o atributo price com o valor diferente de 1.99 e o atributo sale, com o valor diferente de true;
- ou  contêm o atributo price com o valor diferente de 1.99 e não contêm o atributo sale;
- ou não contêm o atributo price e contoêm o atributo sale com o valor diferente de true;
- ou não contem o atributo price e nem o atributo sale.

# Operador $and

Executa a operação lógica **E** num array de uma ou mais expressões e seleciona os documentos que satisfazem todas as expressões no array. O Operador $and usa o que chamamos de avaliação em curto-circuito(short-circuit evaluation). Se alguma expressão for avaliada como false, o MongoDB não avaliará as expressões restantes, pois o resultado final sempre será falso independentemente do resultado delas.

Sintaxe:
```
{ $and: [ {<expressao1>}, {<expressao2>}, ..., {<expressaon>} ] }
```

## Multiplas expressões epecificando o mesmo atributo
```
db.inventory.find({
  $and: [
    { price: { $ne: 1.99 } },
    { price: { $exists: true } }
  ]
});
```

Documentos da coleção inventory em que o valor do atributo price é diferente de 1.99 e o atributo price existe.

## Multiplas expressões epecificando o mesmo operador
```
db.inventory.find({
  $and: [
    { price: { $gt: 0.99, $lt: 1.99 } },
    {
      $or: [
        { sale: true },
        { qty: { $lt: 20 } }
      ]
    }
  ]
});
```
Documentos da coleração inventory em que o valor do campo price é maior que 0.99, e mnor que 1.99, E o valor do atributo sale é igual a true, ou o valor do atributo qty é menor que 20. (o **E** está implícito na vírgula do price E (sale = true OU qty < 20>));

# Practice

Faça os desafios de 1 a 5 abaixo, sobre os operadores lógicos utilizando a coleção restaurants criada no tópico anterior.

1. Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
```
db.restaurante.countDocuments({ rating: { $not: { $lte: 5 } } });
```
2. Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.

db.restaurant.countDocument({
  $or: [
    { rating: { $gte: 6 } },
    { borough: "Brooklyn" }
  ]
});

3. Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.
```
db.restaurants.countDocuments({
  $and: [
    { borough: { $in: ["Queens", "Staten Island", "Brooklyn"]} },
    { rating: { $gt: 4 } }
  ]
});
```
4. Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.
```
db.restaurants.countDocuments({
  $nor: [
    { rating: 1 },
    { cuisine: "American"}
  ]
});
```
5. Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10, E esteja localizado no bairro Brooklyn OU não possuem culinária do tipo Delicatessen.
```
db.restaurants.countDocuments({
  $and: [
    {rating: { $gt: 6, $lt: 10 }},
    {$or: [
      {borough: "Brooklyn"},
      {cuisine: "Delicatessen"}
    ]}
  ]
});
```

# Método sort()

Sintaxe:
```
db.colecao.find().fort({ "campo": "1 ou -1" });
```

Metodo para ordenar o resultado das consultas, usando o valor positivo são ordenados de forma crescente ou alfabética, negativo, descrescente ou contra alfabética.

Esse método pode ser combinado com o método find():
```
db.example.find({}, { value, name }).sort({ value: -1 }, {name: 1});
```

O sort() só pode ser usado se tiver algum resultado de busca antes:
```
db.colecao.find().sort({ nomeDoAtributo: 1 }) // ok
db.colecao.sort({ nomeDoAtributo: 1 }) // dont work
```

Exemplo:
```
db.example.insertMany([
  { "name": "Mandioquinha Frita", "price": 14 },
  { "name": "Litrão", "price": 8 },
  { "name": "Torresmo", "price": 16 }
]);
```
```
db.example.find().sort({ price: 1 }).pretty();
```

```
// Resultado esperado:
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6c"),
        "name" : "Litrão",
        "price" : 8
}
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6b"),
        "name" : "Mandioquinha Frita",
        "price" : 14
}
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6d"),
        "name" : "Torresmo",
        "price" : 16
}
```
```
db.example.find().sort({ price: -1 }, { name: 1 }).pretty();
```
```
// Resultado esperado:
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6d"),
        "name" : "Torresmo",
        "price" : 16
}
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6b"),
        "name" : "Mandioquinha Frita",
        "price" : 14
}
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6c"),
        "name" : "Litrão",
        "price" : 8
}
```

# Practice

1. Ordene alfabeticamente os restaurantes pelo nome (atributo name).

db.restaurants.find().sort({ name: 1 });

2. Ordene os restaurantes de forma decrescente baseado nas avaliações.
```
db.restaurants.find().sort({ rating: 1 });

db.restaurants.find({ rating: { $exists: true } }).sort({ rating: -1 }); // somente quem tem rating
```
