const countBtn = document.getElementById('click-input');
const countDisplay = document.getElementById('count');

const counterClick = () => {
  const click = parseInt(countDisplay.innerText);  
  countDisplay.innerText = click + 1;
}

countBtn.addEventListener('click', counterClick)