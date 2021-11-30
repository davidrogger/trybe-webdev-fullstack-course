let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos, Pato Donald'
};
info['recorrente'] = 'Sim';

for (let todasInfos in info) {
  console.log(todasInfos);
}
// console.log(info)
// console.log(`Bem vinda, ${info.personagem}`); passo 01