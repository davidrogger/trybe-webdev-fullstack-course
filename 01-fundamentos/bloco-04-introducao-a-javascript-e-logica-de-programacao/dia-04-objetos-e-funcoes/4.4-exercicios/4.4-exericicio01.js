let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos, Pato Donald'
};
info['recorrente'] = 'Sim';

// Passo 04
for (let todasInfos in info){
  console.log(info[todasInfos]);
}

//Passo 03
// for (let todasChaves in info) {
//   console.log(todasChaves);
// }

//Passo 02
// console.log(info) 

//Passo 01
// console.log(`Bem vinda, ${info.personagem}`); 