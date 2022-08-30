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



