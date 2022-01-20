// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Jaca', 'Acabate', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Pêra', 'Melão', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));