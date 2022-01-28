const rankList = document.getElementById('ranking-list');

// Manipula o Elemento da Lista Ordenada, com 10 novas LI's, adicionado como o conteúdo de cada LI, com cada conteúdo do array[0~9].
function createListTop10(array) {
  for (let index = 0; index < 10; index += 1) {
    const createLi = document.createElement('li');
    const priceFixed = parseFloat(array[index].priceUsd);
    createLi.innerText = `${array[index].name}(${array[index].symbol}): ${priceFixed.toFixed(2)}`;
    rankList.appendChild(createLi);
  }
}

function cryptData() {
  const API_URL = `https://api.coincap.io/v2/assets`;
  const request = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }

  fetch(API_URL, request)
  .then(request => request.json())
  .then(data => createListTop10(data.data));
}

window.onload = () => cryptData();