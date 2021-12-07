const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
  // Linha 69 indica que a classe tech, usando transform: translateY indica para ficar -20px apartir do eixo Y.
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
firstLi.addEventListener('click', classTech);
secondLi.addEventListener('click', classTech);
thirdLi.addEventListener('click', classTech);

function classTech (targetClick) {
const techClassLocation = document.querySelector('.tech'); // "pega o atual membro da classe tech"
techClassLocation.classList.remove('tech'); // remove do membro coletado no codigo anterior a classe
targetClick.target.classList.add('tech'); // e adiciona ao alvo, que foi clicado devido ao eventlistener click.
input.value = ''; // esvaria o que foi escrito no input
}

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', techValue);
function techValue () {
  let techPhrase = document.querySelector('.tech');
  techPhrase.innerText = input.value;
};
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
let titleH3 = document.querySelector('h3');
titleH3.addEventListener('dblclick', doubleRedirect);
function doubleRedirect () {
  alert('Você será redirecionado para o Linkedin do David! =P')
  window.location.href='https://www.linkedin.com/in/davidrogger/';
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
// Segue abaixo um exemplo do uso de event.target:
titleH3.addEventListener('mouseover', changeColorMouseIn);
titleH3.addEventListener('mouseout', changeColorMouseOut);
function changeColorMouseOut (targetTitle) {
  targetTitle.target.style.color = 'white';
}
function changeColorMouseIn (targetTitle) {
  targetTitle.target.style.color = 'yellow';
}

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = firstLi.innerText;
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.