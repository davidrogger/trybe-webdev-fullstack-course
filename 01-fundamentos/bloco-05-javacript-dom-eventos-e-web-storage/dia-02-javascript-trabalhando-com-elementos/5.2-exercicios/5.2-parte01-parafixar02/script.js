// Acesse o elemento elementoOndeVoceEsta .
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
ondeVoceEsta.parentNode.style.color = 'green';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro Filho do Filho';
// Acesse o primeiroFilho a partir de pai .
document.getElementById('pai').firstElementChild;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').parentNode.firstElementChild;
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextSibling;
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
// Agora acesse o terceiroFilho a partir de pai .
document.getElementById('pai').lastElementChild.previousElementSibling;

//parte 2
// Crie um irmão para elementoOndeVoceEsta .
let pai = document.getElementById('pai');
let irmaoOndeVoceEsta = document.createElement('section');
pai.appendChild(irmaoOndeVoceEsta).className = 'irmaoOndeVoceEsta';
// Crie um filho para elementoOndeVoceEsta .
let filhoOndeVoceEsta = document.createElement('section')
ondeVoceEsta.appendChild(filhoOndeVoceEsta).className = 'filhoOndeVoceEsta';
// Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho).className = 'filhoDoPrimeiroFilhoDoFilho';
// A partir desse filho criado, acesse terceiroFilho .
let acessoFilhoDoFilhoParaTeceiroFilho = document.querySelector('.filhoDoPrimeiroFilhoDoFilho');
acessoFilhoDoFilhoParaTeceiroFilho.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
pai.removeChild(irmaoOndeVoceEsta);

pai.removeChild(pai.lastElementChild);
pai.removeChild(pai.lastElementChild);
pai.removeChild(pai.firstElementChild);
ondeVoceEsta.removeChild(ondeVoceEsta.lastElementChild);
ondeVoceEsta.removeChild(ondeVoceEsta.lastElementChild);
pai.removeChild(pai.firstElementChild.nextSibling);
primeiroFilhoDoFilho.removeChild(primeiroFilhoDoFilho.firstElementChild);