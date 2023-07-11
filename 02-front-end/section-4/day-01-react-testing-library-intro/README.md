<div style='text-align: center;'>
  <h1>React Testing Library</h1>

  [![RTL Thumb](https://testing-library.com/img/octopus-128x128.png)](https://testing-library.com/)

</div>

Para garantir estabilidade e qualidade da sua aplicação no react.
Testar não como o código foi escrito, mais qual foi seu comportamento.

Vantagens de usar o react testing library comparando com enzyme que é outro framework com grande adoção no mercado:

- É muito mais simples de usar;
- Tem muito menos caveats, situações que podem causar problemas e dores de cabeça inesperadas.
- Reforça o bom uso das melhores práticas de testes ao incentivar e facilitar o teste de comportamentos e não de implementação;
- Permite a refatoração da sua arquitetura de componentes - com Enzyme qualquer mudança nela quebra parte dos testes.

## Cobertura de testes

Evidencia quais linhas do código foram testadas e quais não estão sendo exploradas nos testes. Um projeto com cobertura de código alta não significa que os testes não podem melhorar, em uma cobertura de testes podemos evidenciar:

- a proporção de linhas do seu código que são exercutadas;
- se há linhas que "nunca" serão executadas - problemas com if else

Se o resultado mostra que há uma cobertura alta, podemos dizer que o código foi bastante testado e tem uma chance menor de conter erros, mas não diz nada sobre qualidade do código, o que só pode ser medido pela **Cobertura dos casos de Uso**.

Casos de uso são possibilidades de usos do sistema.
Exemplo:
- Quais passos a pessoa usuária precisa seguir para fazer um login no sistema e o que é esperado ao final do login tanto no sucesso quanto na falha? E se a pessoa não digitar o user? ou a senha?
- E se a senha estiver incorreta?

Cada uma dessas situações é um caso de uso diferente. Mais importante do que garantir a cobertura do código, é garantir que seus testes abordam todos os casos de uso da sua aplicação. Para isto é preciso criar testes automatizados que simulam uma pessoa acessando a página fazendo um sequência de ações que resulta naquele caso de uso.