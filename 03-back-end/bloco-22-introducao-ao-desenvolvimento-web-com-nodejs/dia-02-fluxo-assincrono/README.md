anotações pessoais do dia...

# Callbacks

É um termo usado para funcionalidades que não bloqueam a execução do código enquanto outra atividade é executada. Quando precisamos que algo seja precessado em segundo plano, devemos registrar uma callback. Ela será executada quando a operação que solicitamos for concluída.

Exemplo:
```
const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
```

Realiza a leitura de um arquivo e após o término chama uma função de callback. Essa função recebe dois parâmetros.

1. Chamamos de **err**, é um erro que pode ter ocorrido durante a leitura do arquivo.
2. É o contéudo do arquivo, que está em forma de uma sequência de bytes, chamados de content.

Entendendo o código:

1. Pedimos que o Node.js leia o arquivo e passamos uma função callback;
2. Quando a leitura do arquivo é concluida ou um erro acontece, a função callback é chamada;
3. Dentro dela, a primeira coisa que fazemos é verificar se existe um erro. Caso exista, escrevemos ele no console e encerramos a execução com o return;

- Formatos de Callback que recebem dois parâmetros: erros e resultado, assim como vimos no exemplo acima, são chamados de node-style callbacks e são, por convenção, a melhor maneira de se estruturar uma calback.
Toda API de módulos nativos do Node.js utiliza esse mesmo formato de callbacks.

# Pontos negativos do uso de Callbacks

A principal desvantagem do uso das callbacks é que o resultado de uma operação só existirá dentro daquela callback, ou seja, se precisarmos executar um comando depois de outro teremos que colocar uma callback dentro de outro, aumentando o nível de indentiação, resultando na dificuldade de ler e fazer a manutenção no código.

# Promises

As promises foram introduzidas à especificação do JavaScript em 2015, como ferramenta de melhoramento da legibilidade do código, basicamente uma forma de resolver a bagunça que as callbacks causavam. Quando usamos Promises, ainda estamos utilizando um tipo de callback, mas que possui uma API mais legível e intuitiva.

Em JavaScript, as Promises funcionam do mesmo jeito que uma promessa na vida real, uma pessoal pede algo, e outra promete a realização, no cumprimento dela, ela é resolvida, ou caso aconteça algum impedimento a promessa pode ser rejeitada.

