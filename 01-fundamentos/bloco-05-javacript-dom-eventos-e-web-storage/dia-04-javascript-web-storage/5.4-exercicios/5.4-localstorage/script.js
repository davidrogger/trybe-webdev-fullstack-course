// Parte 01
// console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
// localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
// localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
// console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
// console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
// localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
// console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
// localStorage.clear() // limpa todas as entradas salvas em localStorage
// console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0

// Parte 02
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
};

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    };
  };
};

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};