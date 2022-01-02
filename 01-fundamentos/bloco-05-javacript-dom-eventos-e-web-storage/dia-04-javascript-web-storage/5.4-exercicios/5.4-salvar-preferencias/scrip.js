function bgColorButton (){
  const bgBody = document.querySelector('body');
  const applyBg = document.getElementById('bg-btn');
  applyBg.addEventListener('click', function () {
    let bgColor = document.getElementById('bg-colors').value;
    bgBody.style.backgroundColor = bgColor;
    
  })
}
bgColorButton();

function colorTextButton () {
  const 
}