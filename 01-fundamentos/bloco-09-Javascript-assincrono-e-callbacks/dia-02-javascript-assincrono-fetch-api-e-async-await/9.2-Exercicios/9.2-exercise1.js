// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/'; // Comentário Linha 14
const jokeDisplay = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = { // Comentários linha 15
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeDisplay.innerText = data.joke);
};

window.onload = () => fetchJoke();

// Linha 2 - O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Linha 5 - Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers, O segundo parâmetro myObject define o tipo de request: method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , como visto nas requisições 