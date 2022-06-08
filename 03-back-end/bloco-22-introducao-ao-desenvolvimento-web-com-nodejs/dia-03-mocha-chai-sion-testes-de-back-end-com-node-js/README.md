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

