// Seletores
const selectStates = document.getElementById('select-states');
const displayConclusion = document.getElementById('form-conclusion');
// Forms
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputState = document.getElementById('select-states');

// Customização do campo de data
const dateSetup = {
  mondayFirst: false,
  format: 'dd/mm/yyyy',
  weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Limpar',
};

// Usando bibliteca de validação do formulário
const validate = new window.JustValidate('#form-resume');

validate
  .addField('.input-user', [
    {
      rule: 'required',
      errorMessage: 'Campo Obrigatório.'
    },
  ])
  .addField('#input-name', [    
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Deve conter no mínimo 3 caracteres.'
    },
  ])
  .addField('#input-email', [    
    {
      rule: 'email',
      errorMessage: 'Formato de e-mail inválido.'
    }
  ])
  .addField('#input-cpf', [
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'Quantidade de caracteres inválido.',
    }
  ])
  .addField('#select-states', [
    {
      rule: 'required',
      errorMessage: 'Deve ser selecionado um estado.'
    }
  ])
  .addRequiredGroup('#input-radio', 'Você precisa selecionar um campo.')


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

// Valida se todos os campos foram preenchidos
function validationHandler() {
  if (validate.isValid === true) {
    displayConclusion.innerText = '';    
    const allInputText = refreshInputUser();
    document.getElementById('form-conclusion').scrollIntoView();    
    allInputText.forEach(displayForm);
  } else {
    displayConclusion.innerText = '';
  }
}

function submitDisplay() {
  validationHandler();  
}

// Funcionalidade submite
const inputSubmit = document.getElementById('input-submit');
inputSubmit.addEventListener('click', submitDisplay);

// Executa as funções depois que a página carregar por completo
function fullLoad() {
  allStates.forEach(createState);
  document.getElementById('input-date').DatePickerX.init(dateSetup);
}

window.onload = fullLoad();