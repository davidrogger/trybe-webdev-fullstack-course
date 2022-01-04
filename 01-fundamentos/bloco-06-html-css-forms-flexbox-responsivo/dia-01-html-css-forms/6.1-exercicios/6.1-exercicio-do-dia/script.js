// Seletores
const selectStates = document.getElementById('select-states');
const inputSubmit = document.getElementById('input-submit');
const inputClean = document.getElementById('input-clean');
const displayConclusion = document.getElementById('form-conclusion');
// Forms
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const inputState = document.getElementById('select-states');
let inputRadioHouse = document.querySelector('[name="radio-type"]:checked');
const dataStarts = document.getElementById('input-data-starts');

// https://mundoeducacao.uol.com.br/geografia/estados-brasil.htm
const allStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

function refreshInputUser() {
  const allInputText = document.querySelectorAll('.input-user');
  return allInputText;
}

function createState(indexValue) {
    const state = document.createElement('option');
    state.innerText = indexValue;
    selectStates.appendChild(state);
}

function minimalLength() {
  const allInputText = refreshInputUser();
  let validation = true;
  for (let index = 0; index < allInputText.length; index += 1) {
    if (allInputText[index].value.length === 0) {
      validation = false;
    }
  return validation;
  } 
}

function radioCheck() {
  const radioValidation = document.querySelector('[name="radio-type"]:checked');
  if (radioValidation === null) {
    return false;
  }
  return true;
}

function displayForm(index) {
const displayContainer = document.createElement('p');
displayContainer.innerText = index.value;
if (index.checked === true) {
  index.checked.value;
}
displayConclusion.appendChild(displayContainer);
}

function validationHandler() {
  if (minimalLength() && radioCheck()) {
    displayConclusion.innerText = '';
    const allInputText = refreshInputUser();
    allInputText.forEach(displayForm);    
  } else {
    displayConclusion.innerText = '';
    displayConclusion.innerText = 'Por favor revisa se todos campos foram preenchidos';
  }
}

function customSubmit(event) {
  event.preventDefault();
  validationHandler();
  
}

// remove o checked de todos radios buttons que pertencem ao nome radio-type
function cleanRadioButton() {
  const allRadioTypeHouse = document.getElementsByName('radio-type');
  for (let index = 0; index < allRadioTypeHouse.length; index += 1) {
    allRadioTypeHouse[index].checked = false;
  }
}

// Esvazia os valores de cada campo coletado na funcao de cleanForms.
function cleanInputText(index) {
  index.value = '';
}

// Coleta todos classes de input do usuário.
function cleanForms() {
  const allInputText = refreshInputUser();
  allInputText.forEach(cleanInputText);
  cleanRadioButton();
  displayConclusion.innerText = '';
}

function fullLoad() {
  allStates.forEach(createState);  
  inputSubmit.addEventListener('click', customSubmit);
  inputClean.addEventListener('click', cleanForms)
}

window.onload = fullLoad();