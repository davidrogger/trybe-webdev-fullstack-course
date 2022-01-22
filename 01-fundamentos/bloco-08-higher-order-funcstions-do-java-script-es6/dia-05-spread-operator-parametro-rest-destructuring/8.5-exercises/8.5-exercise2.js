const sum = (...sum) => sum.reduce((total, number) => total + number, 0);

console.log(sum(5, 10, 30));

// O Segundo exercicio do bloco 8.5
// Exercício bom, Colocamos em prática um exemplo até mostrado no curso,  lembrando o uso do reduce, aproveitando do parâmetro rest.