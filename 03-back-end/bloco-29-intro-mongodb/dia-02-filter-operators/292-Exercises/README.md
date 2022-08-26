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

# $lte

Atributo filtrado menor ou igual.

Exemplo:
```
db.inventory.find({ qty: { $lte: 20 } });
```

Documentos na coleção inventory com valor igual ou menor que 20.

# $gt

Atributo filtrado maior.

Exemplo:
```
db.inventory.find({ qty: { $gt: 20 } });
```

Documentos na coleção inventory com valor maior que 20.

# $gte

Atributo filtrador maior ou igual.

Exemplo:
```
db.inventory.find({ qty: { $gte: 20 } });
```
Documentos na coleção inventory com valor maior ou igual a 20.

# $eq

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

# $ne

Atributo filtrado não é igual.

Exemplo:
```
db.inventory.find({ qty: { $ne: 20 } });
```
Documentos na coleção inventory diferentes de 20.

# $in

Seleciona os documentos em que o valor do atributo é igual a um dos valores do array. Para executar comparações de igualidade com mais de um valor no mesmo atributo.

Exemplo:
```
db.inventory.find({ qty: { $in: [5, 15] } });
```
Todos Documentos na coleção inventory com os valores qty 5 e 15.

# $nin

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


