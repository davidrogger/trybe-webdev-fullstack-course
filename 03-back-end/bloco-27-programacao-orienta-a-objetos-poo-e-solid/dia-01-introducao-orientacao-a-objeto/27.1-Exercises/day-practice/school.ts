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

}

const aluno1 = new Disciplina(123, 'Jonas', [5, 6, 7, 5], [8, 6]);