const fetch = require('node-fetch');

const URL = 'https://postman-echo.com/get?param1=teste';

fetch(URL)
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