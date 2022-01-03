// Seletores
const selectStates = document.getElementById('select-states');
const inputSubmit = document.getElementById('input-submit');
const inputClean = document.getElementById('input-clean');
const displayConclusion = document.getElementById('form-conclusion');
// Forms
const inputName = document.getElementById('input-name');

const dataStarts = document.getElementById('input-data-starts');

// https://mundoeducacao.uol.com.br/geografia/estados-brasil.htm
const allStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

function createState(indexValue) {
    const state = document.createElement('option');
    state.innerText = indexValue;
    selectStates.appendChild(state);
}

function dataStartsFilter(event) {  
  if (event.key === 'Enter') {
    const startsValue = dataStarts.value;
    
    console.log(startsValue);
  }  
}

function checkName(name) {
  const nameValidation = document.getElementById('name-validation');
  if (name.length === 0) {    
    nameValidation.innerText = 'Nome inválido';
    nameValidation.className = 'input-invalid';
  } else {    
    nameValidation.innerText = 'Nome válido';
    nameValidation.className = 'input-valid';
  }
}

function customSubmit(event) {
  event.preventDefault();  
  checkName(inputName.value);
}

// Esvazia os valores de cada campo coletado na funcao de cleanForms.
function cleanInputText(index) {
  index.value = '';
}

// Coleta todos classes de input do usuário.
function cleanForms() {
  const allInputText = document.querySelectorAll('.input-user');
  allInputText.forEach(cleanInputText);
  displayConclusion.innerText = '';
}

function fullLoad() {
  allStates.forEach(createState);
  dataStarts.addEventListener('keypress', dataStartsFilter);
  inputSubmit.addEventListener('click', customSubmit);
  inputClean.addEventListener('click', cleanForms)
}

window.onload = fullLoad();