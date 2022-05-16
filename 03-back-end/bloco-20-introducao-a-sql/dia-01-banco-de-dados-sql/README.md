anotações pessoais do bloco 20.1...

# O que são dados

São fatos, percepções ou observações, que existem de forma não organizada.

# Banco de dados

Reuni os dados, de forma estruturada, organizada e pesquisavel.(sendo possivel gerar mais dados pelos mesmos dados).
Vantagem de limite de acesso aos dados.

# Tipos de bancos de dados

## Relacionais

Armazenam os dados em forma de tabela onde existem linhas e colunas e sua estrutura predefinida, não permitindo alterações dinâmicas isso cria previsibilidade e a possibilidade de criar relacionamentos entre as tabelas, para esse tipo de banco de dados usamos o SQL.

## Não relacionais

Pode também usar estruturas pré-definidas não sendo obrigatório, ou seja os dados podem ser inseridos dinâmicamente sem precisar alterar a estrutura do seu banco de dados, não ha uma linguagem de pesquisa fixa.

# SQL

**S**tructured **Q**uery **L**anguage é a linguagem mais usada para criar, pesquisar, extrair e manipular dados dentro de um banco de dados relacional.

## Como as Informações são Armazenadas

Todas as pesquizas realizadas dentro deu m banco de dados são feitas em tabelas, tabelas possuem linhas e colunas. As linhas representam aquilo que se deseja representar, e as colunas descrevem algum aspecto.

Exemplo:

| nome | sobrenome | email |
| --- | --- | --- |
|david| rogger | dvd@email.com|

# Constraints (restrições), chaves primárias e chaves estrangeiras

Dentro de uma banco de dados é possivel restringir a forma como os dado podem ou não ser manipulados nas tabelas.

## Tipos de constrains

- **NOT NULL** Garante que aquele campo não pode conter valores nulos, ou seja, se não houver um valor padrão (default) definido, será sempre necessário passar um valor para esse campo durante a inserção ou alteração de dados.
- **UNIQUE** Garante que o valor inserido na coluan da tabela é único, isto é, não pode haver ou valor igual para esta coluna registrado nesta tabela.
-  **PRIMARY KEY** Garante que o valor seja a chave primária da tabela, ou seja, que a coluna que possui essa constraint aplicada seja o identificador único da tabela. Ela também é por definição, não nula e única.
- **FOREIGN KEY** Garante que o valor seja uma chave estrangeira da tabela, ou seja, faça referência à chave primária (valor em uma coluna com constraint PRIMARY KEY) de outra tabela, permitindo um relacionamento entre tabelas.
- **DEFAULT** Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a constraint colocará o valor padrão passado para ela.

