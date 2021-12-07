function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Exercício 01
const daysUl = document.querySelector('#days');

function createDaysOfMonth () {
  const dezDaysList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let dayOfMonth of dezDaysList) {
    let day = document.createElement('li');
    day.innerText = dayOfMonth;    
    eachDayClass(dayOfMonth, day);
    daysUl.appendChild(day)
  }
}

function eachDayClass (elementDay, day) {
  day.classList.add('day');
  if (elementDay === 24 || elementDay === 25 || elementDay === 31) {
    day.classList.add('holiday');
  }
  if (elementDay === 4 || elementDay === 11 || elementDay === 18 || elementDay === 25) {
    day.classList.add('friday');
  }
}

createDaysOfMonth();
// Exercicio 02

function buttonHoliDay () {
const buttonsContainer = document.querySelector('.buttons-container');
const holidayButton = document.createElement('button');
holidayButton.setAttribute('id', 'btn-holiday');
buttonsContainer.appendChild(holidayButton).innerText = 'Feriados';
}
buttonHoliDay();

// Exercício 03

function buttonEvent () {
  const buttonHoliDay = document.querySelector('#btn-holiday');
  buttonHoliDay.addEventListener('click', holidayEvent);
}
buttonEvent ()

function holidayEvent () {
  const allHolidays = document.getElementsByClassName('holiday');
  for (let holiday of allHolidays) {   
    if (holiday.style.backgroundColor === '') {
      holiday.style.backgroundColor = 'yellow';
  } else {
    holiday.style.backgroundColor = '';
  }
  
  }
}