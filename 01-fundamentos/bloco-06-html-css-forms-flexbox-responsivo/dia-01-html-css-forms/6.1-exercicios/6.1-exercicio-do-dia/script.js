// Seletores
const selectStates = document.getElementById('select-states');
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

dataStarts.addEventListener('keypress', dataStartsFilter);
allStates.forEach(createState);