const fetch = require('node-fetch');
// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Objeto de headers
const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-Type': 'application/json',
});

const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'tr1b3r',
});

const URL = 'https://postman-echo.com/post?param1=teste';

fetch(URL, {
  headers,
  method: 'POST',
  body,
 })
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    if (error.status) {
      return console.error(`Request failed with status ${error.status}`);
    }
    console.error(error);
  });