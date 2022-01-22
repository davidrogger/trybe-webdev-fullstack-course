const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)) // altere a chamada da funcao rectangleArea
  // console.log(rectangle[0] * rectangle[1]);
});

// O Primeiro exercicio do bloco 8.5
// Não é nítido o que é necessário fazer, pois o código para cópia ja obtemos o resultado comentado que seria a sequencia de números 2, 15 e 54, no video apresentado no gabarito, é mais confuso ainda, pois ele usa um teste assert do node, e quando a pessoa roda o codigo, a resposta no console dela é vazio, testando o código no vscode, a resposta é a mesma, esse exercício sinceramente está confuso e sem resultado, não encontrei nenhuma finalidade de fixação aqui infelizmente.