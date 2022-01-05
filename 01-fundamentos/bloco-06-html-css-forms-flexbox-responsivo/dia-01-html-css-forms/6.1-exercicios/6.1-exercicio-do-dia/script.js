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

// Funcionalidade para retornar todos itens dentro da classe input-user
function refreshInputUser() {
  const allInputText = document.querySelectorAll('.input-user');
  return allInputText;
}

// Cria os elementos option do campo select com os estados do array allStates
function createState(indexValue) {
    const state = document.createElement('option');
    state.innerText = indexValue;
    selectStates.appendChild(state);
}

// Verifica a quantidade de caracteres preenchidos para validar se algo preenchido no determinado campo.
function minimalLength() {
  const allInputText = refreshInputUser();  
  for (let index = 0; index < allInputText.length; index += 1) {
    let indexTrim = allInputText[index].value.trim();
    if (indexTrim.length === 0) {
      return false;
    }  
  } 
  return true;
}

// Verificar se foi selecionado algum dos botoes de radio para validar.
function radioCheck() {
  const radioValidation = document.querySelector('[name="radio-type"]:checked');
  if (radioValidation === null) {
    return false;
  }
  return true;
}

// Criar elementos paragrafo no container de conclusão do forms
function displayForm(index) {
  const displayContainer = document.createElement('p');
  if (index.type === 'radio') {
    if (index.checked === true) {
      displayContainer.innerText = index.value;
      displayConclusion.appendChild(displayContainer);
    }
  } else {
    displayContainer.innerText = index.value;
    displayConclusion.appendChild(displayContainer);
  }
}

// Valida se todos os campos foram preenchidos
function validationHandler() {
  if (minimalLength() && radioCheck()) {
    displayConclusion.innerText = '';
    const allInputText = refreshInputUser();
    allInputText.forEach(displayForm);    
  } else {
    displayConclusion.innerText = '';
    displayConclusion.innerText = 'Por favor revise se todos campos foram preenchidos';
  }
}

// Ativa funcionalidades ao clicar em enviar
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

// Executa as funções depois que a página carregar por completo
function fullLoad() {
  allStates.forEach(createState);  
  inputSubmit.addEventListener('click', customSubmit);
  inputClean.addEventListener('click', cleanForms)
}

window.onload = fullLoad();