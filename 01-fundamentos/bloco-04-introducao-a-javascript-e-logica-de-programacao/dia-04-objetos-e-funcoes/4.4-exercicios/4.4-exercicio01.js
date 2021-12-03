let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos, Pato Donald'
};
info['recorrente'] = 'Sim';
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

// Passo 05
for(let textInfo in info) {
  if (textInfo === 'recorrente' && info[textInfo] === 'Sim' && info2[textInfo] === 'Sim'){
    console.log('Ambos textos repetidos');
  } else {
    console.log(`${info[textInfo]} e ${info2[textInfo]}`);
  }
}


// Passo 04
// for (let todasInfos in info){
//   console.log(info[todasInfos]);
// }

//Passo 03
// for (let todasChaves in info) {
//   console.log(todasChaves);
// }

//Passo 02
// console.log(info) 

//Passo 01
// console.log(`Bem vinda, ${info.personagem}`); 