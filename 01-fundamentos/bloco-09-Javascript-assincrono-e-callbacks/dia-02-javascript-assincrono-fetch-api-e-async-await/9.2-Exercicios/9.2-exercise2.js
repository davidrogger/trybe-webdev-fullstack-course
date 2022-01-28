// const rankList = document.getElementById('ranking-list');

// // Manipula o Elemento da Lista Ordenada, com 10 novas LI's, adicionado como o conteúdo de cada LI, com cada conteúdo do array[0~9].
// function createListTop10(array) {
//   for (let index = 0; index < 10; index += 1) {
//     const createLi = document.createElement('li');
//     const priceFixed = parseFloat(array[index].priceUsd);
//     createLi.innerText = `${array[index].name}(${array[index].symbol}): ${priceFixed.toFixed(2)}`;
//     rankList.appendChild(createLi);
//   }
// }

// function coinValue() {
// const API_URL = ''
// const request = {
//   method:
// }

// }

// function cryptData() {
//   const API_URL = `https://api.coincap.io/v2/assets`;
//   const request = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   }

//   fetch(API_URL, request)
//   .then(request => request.json())
//   .then(data => createListTop10(data.data));  
// }

// window.onload = () => {
//   cryptData();
// };

// --------------------------------------------------------------------------------------------------------------

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
  const usdEndPoint = '/currencies/usd.min.json';
  const url = baseUrl.concat(usdEndPoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

  return usdCurrencies;
}

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json()) // converte para json a resposta
    .then((data) => data.data) // acessa o objeto data que está dentro do parametro data(onde está o array).
    .catch((error) => error.toString()); //Converte o erro em uma string.
  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins(); // Espera pelo retorno da função fetch para coletar os arrays com as informações necessárias.
  const usdCurrencies = await fetchUsdCurrencies();
  const coinsList = document.getElementById('ranking-list');
  coins
    .filter((_, index) => index < 10) // Cria um array com os 10 primeiros elementos [0~9]
    .forEach((coin) => { // Para cada elemento filtrado ele manipula o DOM da lista OL, colocando os valores em forma de lista.
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;
      newLi.innerText = `${coin.name} (${coin.symbol}): BRL: ${brlPrice.toFixed(2)}`;
      coinsList.appendChild(newLi);
    })
}

window.onload = () => setCoins();