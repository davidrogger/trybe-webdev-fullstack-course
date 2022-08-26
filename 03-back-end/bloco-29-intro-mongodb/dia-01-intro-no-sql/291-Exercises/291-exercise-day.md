usando a coleção [bios](https://docs.mongodb.com/manual/reference/bios-example-collection/)

Exercício 1: Retorne o documento com o _id igual a 8.

`db.bios.find({ _id: 8 });`

Exercício 2: Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name.

`db.bios.find({ _id:8 }, { name: 1 });`

🚀 Exercício 3: Retorne apenas os atributos name e birth do documento com o _id igual a 8.

`db.bios.find({ _id:8 }, { name: 1, birth: 1 })`

Exercício 4: Retorne todos os documentos em que o atributo name.first seja igual a John, utilizando o método pretty().

`db.bios.find({ "name.first": "John" }).pretty();`

Exercício 5: Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty().

`db.bios.find().limit(3).pretty();`

Exercício 6: Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.

`db.bios.find().limit(2).skip(5);`

Utilizando o [mongoimport](https://docs.mongodb.com/database-tools/mongoimport/#examples), importe o arquivo [books.json](https://assets.app.betrybe.com/back-end/mongodb/books-48d15e4d8924badc2308cc4a62eb3ea4.json) para a sua instância local do MongoDB e utilize a coleção books para construir as seguintes consultas:

sample é o nome do db e books da collection
```
docker cp books.json hellowWorldMongo:/tmp/books.json 

docker exec hellowWorldMongo mongoimport -d sample -c books --file /tmp/books.json
```

🚀 Exercício 7: Retorne a quantidade de documentos da coleção books.

`db.books.countDocuments()`

🚀 Exercício 8: Conte quantos livros existem com o status = "PUBLISH".

`db.books.countDocuments({status: "PUBLISH"})`

🚀 Exercício 9: Exiba os atributos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id.

`db.books.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);`

Exercício 10: Pule 5 documentos e exiba os atributos _id, title, authors e status dos livros com o status = "MEAP", limitando-se a 10 documentos.

`db.books.find({status: "MEAP"}, {title: 1, authors: 1, status: 1}).skip(5).limit(10);`