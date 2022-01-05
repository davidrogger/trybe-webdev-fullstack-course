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
const dateInvalid = document.getElementById('date-invalid');
const dataInvalid = document.getElementById('data-invalid')

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

// Verificar se o preenchimento do campo de datas está conforme o parametro determinado
function dateFormat() {
  const correctDate = /^\d\d\/\d\d\/\d\d\d\d$/;
  const inputDate = document.getElementById('input-data-starts').value;
  if (correctDate.test(inputDate)) {
    return true;
  }  
  return false;
}

// Divido o formato de datas em 3 para verificar se o dia, mês e ano, estão dentro do requerido.
function dateValidNumbers() {
  const inputDate = document.getElementById('input-data-starts').value;
  const inputDateSplit = inputDate.split('/');
  const inputDay = parseInt(inputDateSplit[0]);
  const inputMonth = parseInt(inputDateSplit[1]);
  const inputYear = parseInt(inputDateSplit[2]);
  if (inputDay <= 0 && inputDay > 31) {
    return false;
  }
  if (inputMonth <= 0 && inputMonth > 12) {
    return false;
  }
  if (inputYear <= 0) {
    return false;
  }
  return true;
}

function dateValidation() {
  if (dateFormat() && dateValidNumbers()) {
    displayConclusion.innerText = '';
    dateInvalid.innerText = '';
    return true;
  }
  displayConclusion.innerText = '';
  dateInvalid.innerText = 'Formato de data incorreto! dd/mm/aaaa';
  return false;
}

// Coleta todos classes de input do usuário.
function cleanForms() {
  const allInputText = refreshInputUser();
  allInputText.forEach(cleanInputText);
  cleanRadioButton();
  displayConclusion.innerText = '';
  dateInvalid.innerText = '';
  dataInvalid.innerText = '';
}


// Valida se todos os campos foram preenchidos
function validationHandler() {
  if (dateValidation() && minimalLength() && radioCheck()) {
    displayConclusion.innerText = '';
    dateInvalid.innerText = '';
    dataInvalid.innerText = '';
    const allInputText = refreshInputUser();
    allInputText.forEach(displayForm);    
  } else { 
    displayConclusion.innerText = '';   
    dataInvalid.innerText = 'Por favor revise se todos campos foram preenchidos corretamente';    
  }
}

// Ativa funcionalidades ao clicar em enviar
function customSubmit(event) {
  event.preventDefault();
  validationHandler();  
}

// Executa as funções depois que a página carregar por completo
function fullLoad() {
  allStates.forEach(createState);  
  inputSubmit.addEventListener('click', customSubmit);
  inputClean.addEventListener('click', cleanForms)
}

window.onload = fullLoad();