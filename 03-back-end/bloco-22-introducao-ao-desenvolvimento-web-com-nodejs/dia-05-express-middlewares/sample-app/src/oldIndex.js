const express = require('express');
const authMiddleware = require('./authMiddleware');

const app = express();
app.use(express.json());

const invalidDataMessage = { message: 'Invalid data!' };

app.get('/open', (req, res) => {
  res.send('open!');
});

app.use(authMiddleware);

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const validateName = (req, res, next) => {
  const { name } = req.body;
  if(!name) return res.status(400).json(invalidDataMessage);
  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  const priceNumber = Number(price);
  const isNegative = priceNumber < 0;
  const isNotANumber = typeof priceNumber !== 'number';
  if(isNegative && isNotANumber) return res.status(400).json(invalidDataMessage);
  next()
}

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', validateName, validatePrice, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, chef: username, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName,validatePrice , function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});