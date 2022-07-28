type notas = [number, number, number, number]
type trabalhos = [number, number]

class Disciplina {
  matricula: number;
  nome: string;
  notas;
  trabalhos;

  constructor(m: number, nome: string, notas: notas, trabalhos: trabalhos) {
    this.matricula = m;
    this.nome = nome;
    this.notas = notas;
    this.trabalhos = trabalhos;
  };

  somaNotas(): number {
    const sum = this.notas.reduce((acc, nota) => acc + nota, 0);
    return sum;
  }

  mediaNotas(): number {
    const qtNotas = this.notas.length;
    const somaNotas = this.somaNotas();
    return somaNotas/qtNotas;
  }

}

const aluno1 = new Disciplina(123, 'Jonas', [5, 6, 7, 5], [8, 6]);

console.log(aluno1);
console.log(aluno1.somaNotas());
console.log(aluno1.mediaNotas());