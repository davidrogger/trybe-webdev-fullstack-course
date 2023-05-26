const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const findIndexItem = (array, id) => array.findIndex((item) => item.id === Number(id));

const drinkNotFound = (res) => res.status(404).json({ message: 'Drink not found!' });

app.get('/drinks', (req, res) => {
  res.json(drinks);
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const indexId = findIndexItem(drinks, id);
  const notFound = -1;
  if(indexId === notFound) return res.status(404).json({ message: 'Recipe not found!'});

  drinks[indexId] = { ...drinks[indexId], name, price };

  res.status(204).end();
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: `add ${name} with sucess!`});

});

app.get('/drinks/search', ( req, res) => {
  const { name } = req.query;
  const searchDrinks = drinks.filter((drink) => drink.name.includes(name));
  res.status(200).json(searchDrinks);

})

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const indexId = findIndexItem(drinks, id);
  const notFound = -1;
  if(indexId === notFound) return drinkNotFound(res);

  const qtToRemove = 1;
  drinks.splice(indexId, qtToRemove);

  res.status(204).end();

});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((item) => item.id === Number(id));

  if(!drink) return drinkNotFound(res);

  res.status(200).json(drink);

});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Route ${req.path} not found` })
});

app.listen(3001, () => {
  console.log('Listen Port 3001!');
});




