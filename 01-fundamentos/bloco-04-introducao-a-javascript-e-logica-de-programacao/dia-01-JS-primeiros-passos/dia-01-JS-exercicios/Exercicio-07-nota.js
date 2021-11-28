let nota = 40;

if (nota >= 90) {
  nota = "A";  
} 
if (nota >= 80) {
  nota = "B";  
} 
if (nota >= 70) {
  nota = "C";
} 
if (nota >= 60) {
  nota = "D";  
} 
if (nota >= 50) {
  nota = "E";  
} 
if (nota < 50 && nota > 0) {
  nota = "F";  
} 
if (nota < 0 || nota > 100) {
  console.log("Valor deve ser maior que 0 ou menor que 100")
}
if ((typeof nota) == "string"){
console.log("Sua nota foi "+nota);
}