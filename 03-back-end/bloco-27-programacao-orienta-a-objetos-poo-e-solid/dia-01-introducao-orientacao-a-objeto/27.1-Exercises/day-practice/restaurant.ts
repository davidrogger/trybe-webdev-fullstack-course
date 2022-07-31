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
  desconto: number;

  constructor(c: string, i: itemPedido[], p: string, desconto: number = 0) {
    this.cliente = c;
    this.itens = i;
    this.pagamento = p;
    this.desconto = desconto;
  }

  total(): number {
    return this.itens.reduce((acc, item) => acc + item.preco,0);
  }

  totalComDesconto(desconto?: number): string {
    const total = this.total();
    if (desconto) this.desconto = desconto;
    return `Total com desconto de ${this.desconto} %: ${total - (total * (this.desconto / 100))}`;
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

const batata = new itemPedido('batata', 10);
const acai = new itemPedido('acai', 15);

const pedido1 = new Pedido('Jonas', [batata, acai], 'avista');

console.log(pedido1.total());
console.log(pedido1.totalComDesconto());
console.log(pedido1.totalComDesconto(10));