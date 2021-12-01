let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O pior Dia de todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
}
// Passo 02 - 07
leitor.livrosFavoritos.push(`{titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editor: 'Rocco',}`)

// Passo 01 - 06
// console.log(`O livro favorito da ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos['0']['titulo']}.`)