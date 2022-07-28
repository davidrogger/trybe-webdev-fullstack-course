type notas = [number, number, number, number]
type trabalhos = [number, number]

class Estudante {
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

const aluno1 = new Estudante(123, 'Jonas', [5, 6, 7, 5], [8, 6]);

// console.log(aluno1);
// console.log(aluno1.somaNotas());
// console.log(aluno1.mediaNotas());

class Cliente {
 nome: string;
 constructor(n: string) {
  this.nome = n;
 }
}

class Pedido {
  cliente: string;
  itens: itemPedido[];
  pagamento: string;
  desconto?: number;

  constructor(c: string, i: itemPedido[], p: string) {
    this.cliente = c;
    this.itens = i;
    this.pagamento = p;
  }

  total(): number {
    return this.itens.reduce((acc, item) => acc + item.preco,0);
  }

  totalComDesconto(): number {
    const total = this.total();
    const desconto = this.desconto ? this.desconto : 0;
    return total * desconto;
  }

}

class itemPedido {
  nome: string;
  preco: number;
  constructor(n: string, p: number) {
    this.nome = n;
    this.preco = p;
  }
}

