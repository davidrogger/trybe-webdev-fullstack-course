// Seletores
const selectStates = document.getElementById('select-states');
const inputSubmit = document.getElementById('input-submit');
const displayConclusion = document.getElementById('form-conclusion');
// Forms
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputState = document.getElementById('select-states');
const validate = new window.JustValidate('#form-resume');

// Customização do campo de data
const dateSetup = {
mondayFirst: false,
format: 'dd/mm/yyyy',
weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
todayButtonLabel: 'Hoje',
clearButtonLabel: 'Limpar',
};

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
  } 
}

// Ativa funcionalidades ao clicar em enviar
function customSubmit(event) {
  event.preventDefault();
  // validationHandler();  
}

// Executa as funções depois que a página carregar por completo
function fullLoad() {
  allStates.forEach(createState);  
  inputSubmit.addEventListener('click', customSubmit);  
  document.getElementById('input-date').DatePickerX.init(dateSetup);
}

window.onload = fullLoad();