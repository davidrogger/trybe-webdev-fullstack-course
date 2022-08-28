Copiando o arquivo json para importa dentro do docker

`docker cp super-heroes.json mongodb:/tmp/super-heroes.json`
```
Aliais
--db = -d
--collection = -c
```
`docker exec mongodb mongoimport -d class -c superheroes --file /tmp/super-heroes.json`

Para deletar um banco de dados: `db.dropDatabase();`

# Exercícios;

- 🚀 Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.

`db.superheroes.findOne();`ou `db.superheroes.find().limit(1);`
```
{
  _id: ObjectId("630b7fd91f798afb83555e48"),
  name: 'Agent Bob',
  alignment: 'good',
  gender: 'Male',
  race: 'Human',
  aspects: { eyeColor: 'brown', hairColor: 'Brown', height: 178, weight: 36.73 },
  publisher: 'Marvel Comics'
}
```
- 🚀 Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.

`db.superheroes.find({ "aspects.height": { $lt: 180 } });`

- 🚀 Exercício 3: Retorne o total de super-heróis menores que 1.80m.

`db.superheroes.countDocuments({ "aspects.height": { $lt: 180 } })`
result = 421

- Exercício 4: Retorne o total de super-heróis com até 1.80m.

`db.superheroes.countDocuments({ "aspects.height": { $lte: 180 } })`

Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.

`db.superheroes.find({ "aspects.height": { $gte: { 200 } } });`

- Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.

`db.superheroes.countDocuments({ "aspects.height": { $gte: { 200 } } });`

- Exercício 7: Selecione todos os super-heróis que têm olhos verdes.

`db.superheroes.find({ "aspects.eyeColor": "green" });`

- Exercício 8: Retorne o total de super-heróis com olhos azuis.

`db.superheroes.countDocuments({ "aspects.eyeColor": "blue" });`

- 🚀 Exercício 9: Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos ou carecas ("No Hair").

`db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } });`

- Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").

`db.superheroes.countDocuments({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } });`

- Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

`db.superheroes.find({ "aspects.hairColor": { $nin: [ "Black", "No Hair" ] } });`

- 🚀 Exercício 12: Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.

`db.superheroes.countDocuments.({ "aspects.height": { $not: { $gt: 180 } } });`

- Exercício 13: Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.
```
db.superheroes.find({
  $nor: [
    { race: "human" },
    { "aspects.height": { $gt: 180 }}
  ] });
```
- Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.
```
db.superheroes.find({
  $and: [
    { "aspects.height": { $in: [180, 200] } },
    { publisher: "Marvel Comics" }
  ]
});
```
- Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.
```
db.superheroes.find({
  $and: [
    { "aspects.weight": { $gte: 80, $lte: 100 } },
    { race: { $in: ["Human", "Mutant"] } },
    { publisher: { $not: { $eq: "DC Comics" }} }
  ]
});
```
- Exercício 16: Retorne o total de documentos que não contêm o campo race.
```
db.superheroes.countDocuments({
  race: { $exits: false }
});
```
- Exercício 17: Retorne o total de documentos que contêm o campo hairColor.
```
db.superheroes.countDocuments({
  "aspects.hairColor": { $exists: true }
});
```
- Exercício 18: Remova apenas um documento publicado pela Sony Pictures.
```
db.superheroes.deleteOne({
  publisher: "Sony Pictures"
});
```
- 🚀 Exercício 19: Remova todos os documentos publicados pelo George Lucas.

```
db.superheroes.deleteMany({
  publisher: "George Lucas"
});
```