anotações pessoais do dia...

# Testes automatizados

Ferramentas que serão usadas: **mocha** e **chai**

Para utilizarmos essas ferramenta sprecisamos começar fazendo a instalação, para isso, utilizaremos a flag -D. Esses módulos só serão utilizados em fase de desenvolvimento e não serão utilizados para executar nossa aplicação quando ela for publicada. Dessa forma, evitamos instalar pacotes desnecessários em nossa versão de produção.

`npm i -D mocha chai`

# Tipos de testes

É importante ter em mente na hora de produzir, o escopo e a interação dos testes.
Existem algumas divisões arbitrárias que nos ajudam a pensar uma ordem de desenvolvimento de testes, sendo as mais comuns:

Testes unitários: Trabalham presumindo um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos. Ex: uma função com um fim específico, como uma função que soma dois números:

Imagine o teste unitário de um carro, o motor precisa ser testado para saber se ele tem potência e torque; já os peneus necessitam de testes para saber se têm boa aderência no asfalto. Também testamos o assento do motorista para saber se é confortável e ergonômico e testamos o volante para saber se é fácil manusear e esterçar.

Testes de integração: trabalham presumindo a junção de múltiplos escopos (que tecnicamente devem possuir, cada um seus próprios testes) com interações entre eles.

Usando o carro como exemplo, no teste de integração, ao aceletar testamos se o motor permanece em uma velocidade constante e se ao esterçar o volante, os pneus dianteiros são orientados corretamente para a direção desejada. Testamos também se ao se acomodar no assento do motorista, é fácil manusear o volante e o câmbio.

Teste de ponta-aponta: Chamados também de Fim-afim (end-to-end; E2E), esses testes pressupõem um fluxo de interação completo com a aplicação, de uma ponta a outra. Aqui poderíamos pensar uma API que utiliza nossa calculadora - assim como diversas outras funções mais complexas - na hora de realizar uma operação de venda de produtos. Esse teste é o mais completo, pois garante que todos os demais testes estão ou serão desenvolvidos.

Voltando ao exemplo do carro, por fim, no teste ponta-aponta(PaP) fazemos um test-drive de impacto para avaliar todos os aspectos, realizando uma corrida com vários carros em um circuíto.

# Estruturando testes com o Mocha

É um framework de testes para JS, isso significa que ele nos ajuda a arquitetar os nosso testes, fornecendo a estrutura e interface para escrevermos os nossos testes.

- describe: nos permite adicionar uma descrição para um teste específico ou um grupo de testes.
- it: nos permite sinalizar exatamente o cenário que estamos testando naquele ponto.

# Aferindo testes com o Chai

Nos ajuda com as asserções, ele fornece maneiras de dizermos o que queremos testar e então ele validará se o resultado condiz com o esperado.

Com as asserções podemos verificar o resultado que uma determinada função retornou, [documentação do chai com seus asserts](https://www.chaijs.com/api/bdd/).

Para tornar nosso teste ainda mais legível, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético como o to e o b, que nos permite escrever nossa assertion da seguinte maneira:
```
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovacao"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovacao');
  });
});
```

[Um pouco mais sobre langueage chains](https://www.chaijs.com/api/bdd/#method_language-chains)

