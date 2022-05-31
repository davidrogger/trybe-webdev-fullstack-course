anotações pessoais do dia...

Criando um banco de dados de um algum de musicas

# Database Design - Como modelar um banco de dados

1. Identificar as entidades, atributos e relacionamentos com base na descrição do problema: Por exemplo, a entidade álbum possui os atributos títulos e preço e se relaciona com entidade artista.

2. Construir um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1: O diagrama serve como um guia para que você possa visualizar as entidades (tabelas) que irão se relacionar.

3. Criar um banco de dados para conter suas tabelas: Após analisar e criar um diagrama de como o seu banco de dados vai ser estruturado, você pode dar inicio a criação dele.

4. Criar e relacionar tabelas tendo o diagrama do passo 2 como base: Após criar seu banco de dados, você pode começar a criar e relacionar as tabelas de acordo com o diagrama.

# Identificando entidades, atributos e relacionamentos

Primeiramente você deve identificar as entidades, atributos e relacionamentos com base na descrição do problema, que é criar um catálogo de albuns musicas. Porém, antes disso é necessário entender o significado de cada um deles.

## Entidades

São uma representação de algo do mundo real dentro do banco de dados e que normalmente englobam toda uma ideia.

- Entidade 1: `Álbum`;
- Entidade 2: `Artista`;
- Entidade 3: `Estilo Musical`;
- Entidade 4: `Canção`.

## Atributos

Um atributo é tudo aquilo que pode ser usado para descrever algo.

- Álbum: `album_id`, `titulo`, `preco`, `estilo_id` e `artista_id`;
- Artista: `artista_id` e `nome`;
- Estilo Musical: `estilo_id` e `nome`;
- Canção: `cancao_id`, `nome` e `album_id`.

Algo a ser notado aqui é que algumas informações precisam ser deduzidas, como, por exemplo, a coluna que armazena o identificador único dos registros (aqui chamado de id), que todas tabelas precisam ter.

## Relacionamentos

Os relacionamentos servem para representar como uma entidade deve estar ligada com outras no banco de dados.
Existem três tipos de relacionamentos,

- Um para um 1:1
Nesse tipo de relacionamento, uma linha da tabela A deve possuir apenas uma linha correspondente na Tabela B e vice-versa.

- Um para muitos ou muitos para um (1:N ou N:1)

Esse é um dos tipos mais comuns de relacionamento. Em cenários assim, uma linha na tabela A pode ter várias linhas correspondentes na Tabela B, mas uma linha da tabela B só pode possuir uma linha correspondente na Tabela A.

- Muitos para Muitos (N:N)

O relacionamento muitos para muitos acontece quando uma linha na tabela A pode possuir muitas linhas correspondentes na tabela B e vice-versa.

# Construindo um diagrama entidade-relacionamento

Existe diversas ferramenta spara modelas os relacionamentos em bancos de dados. Hoje será usado a [draw.io](https://draw.io/) para criar os modelos. Você pode aprender como utilizar essa ferramenta assistindo a este [vídeo](https://www.youtube.com/watch?v=VgTRNqn2fn0).

Montando um diagrama mais detalhado
Para diagramas ER (entidade-relacionamento) mais detalhados, deve-se incluir o nome das tabelas, suas chaves primárias e estrangeiras, suas colunas e seus relacionamentos.
De olho na dica 👀: Por questão de convenções e boas práticas na criação de tabelas, não são usados acentos ou espaços entre os nomes das tabelas.
Lembre-se 🧠: Existem várias maneiras de se modelar um banco de dados. Então, caso pense diferente do modelo abaixo, entenda que existem diversas formas de se resolver um mesmo problema.

A ideia de um diagrama ER é prover uma representação gráfica para a estrutura de seu banco de dados, descrevendo suas entidades com seus atributos e como elas se relacionam. Essa visualização pode te ajudar tanto a criar e modelar seu banco de dados quanto a entender se sua modelagem precisa ser alterada ou se houve algum erro ao pensar na organização de suas entidades. Com esse diagrama você consegue pensar um pouco mais antes de começar a escrever as queries para criar as tabelas.

# Criando um banco de dados para conter suas tabelas
```
-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;
```

Os comandos create database ou create schema fazem a mesma coisa, na prática, normalmente, são utilizados em conjunto com o comando IF NOT EXISTS que é responsavel pela verificação da não existência do banco. Esse procedimento é feito para evitar a tentativa de criar um banco de dados duplicado, que resultaria em um erro.

Criando o banco **albuns**: `CREATE DATABASE IF NOT EXISTS albuns;`

## Criando e modelando tabelas de acordo com o diagrama ER

## Principais tipos de dados no MySQL

# Booleanos

Eles podem receber 1 ou 0, e caso não especificado seu valor padrão é nulo.

# Caracteres

Podem ser fixo(CHAR) é determinado um tamanho, você pode inserir menos que o valor determinado, mas ele sempre irá ocupar o valor máximo, e o VARCHAR, que ocupa até o valor determinado, sendo dinâmicamente alocado no tamanho usado.

# Números

Podem ser valores exatos e inteiros.

Tinyint = 0 a 255 unsigned ou -128 a 127 signed

Unsigned - Permite armazenar somente valorse positivos
Signed - Permite armazenar valores negativos e positivos

Outros valores exatos inteiros: smallint, mediumint, int, bigint.

## Valores exatos com precisão decimal

- Decimal - permite definir quantidade máxima de número e sua precisão. EX: DECIMAL(5.2 = 199.99
- FLOAT/REAL - Tem a precisão de uma casa decimal. Ex: 10.9
- DOUBLE - Tem a precisão de duas casas decimais. EX: 49.90

# Temporais

1. DATE - Armazena valores no padrão YYYY-MM-DD
2. TIME - Armazena valores no padrão HH:MM:SS
3. YEAR - Armazena somente o ano entre 1901 e 2155
4. DATETIME - Junta o DATE e o TIME no padrão na faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59
5. TIMESTAMP - Igual ao datetime mas também opera com base em fuso horário que pode ser definido no servidor.

# Primary key e foreign key

# Primary Key
É um identificador único de uma tabela para evitar redundância na tabela.

# Foreign key

É uma coluna ou grupo de colunas em que uma tabela que identifica unicamente uma linha em outra tabela criando um vinculo entre as tabelas.

## Chave primária composta

Uma chave primária pode ser formada por uma ou mais colunas de uma tabela. Por mais que só possamos ter uma única chave primária por tabela, essa chave pode ser simples ou composta.

Exemplo:
```
  DROP SCHEMA IF EXISTS Brasil;
  CREATE SCHEMA Brasil;
  USE Brasil;

  CREATE TABLE cidades(
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY(cidade)
  );
```
Criada uma chave primária simples utilizando o campo cidade. ao tentar inserir os dados abaixo, receberiamos um erro:
```
    INSERT INTO cidades(cidade, estado, populacao)
	VALUES('Rio Claro','SP',185421),
		  ('Rio Claro','RJ',17216);
```

Pois há uma violação da chave primária, pois Rio Claro, estaria duplicado e isto não é permitido, A solução para o problema seria criar uma chave primária composta. A chave composta é aquela criada com duas ou mais colunas, passando a utilizar a junção desses dados para formar um valor único e assim bloquear a duplicidade.
```
    DROP SCHEMA IF EXISTS Brasil;
    CREATE SCHEMA Brasil;
    USE Brasil;

    CREATE TABLE cidades(
	    cidade VARCHAR(100) NOT NULL,
	    estado VARCHAR(10) NOT NULL,
	    populacao INTEGER,
	    CONSTRAINT PRIMARY KEY(cidade, estado)
    );

    INSERT INTO cidades(cidade, estado, populacao)
	VALUES('Rio Claro','SP',185421),
		  ('Rio Claro','RJ',17216);
```

# Criando uma tabela no MySQL

Criando as tabelas para o banco de dados **albuns**.
Deve-se criar primeiro as tabelas pai, e depois as tabelas filho, que recebem as colunas que possuem vinculo(foreign key).
```
USE albuns;
CREATE TABLE artista (
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE estilomusical (
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE album (
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    artista_id INT NOT NULL,
    estilo_id INT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    preco DECIMAL(5, 2) NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB;

CREATE TABLE cancao (
	cancao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE=InnoDB;
```

# Normalização

Permite que você aprofunde seus conhecimentos nas estruturas relacionais fundamentais, o que colabora para a tomada de decisão mais assertiva e segura.
Normalização é uma técnica para organizar tabelas relacionadas no banco de dados com o objetivo de reduzir a redundância de dados.
Os problemas que ela resolve são:

- Tabelas ocupando espaços desncessários
- Anomalia de Inserção, ao termos uma tabela de livros, termos que inserir o mesmo dado varias vezes, com a normalização apenas direcionamos para tabela onde aquele autor está.
- Anomalia de Atualização, quando aquele determinado dado recebe alguma atualização como ele está centralizado e referenciado em uma tabela, apenas atualizando ela, todos demais seriam atuaizados juntamente, caso não, teriamos que atualizar item por item.
- Anomalia de Exclusão, ao excluir um dado descentralizado, podemos perder referencias que poderia ser utilizadas posteriormente.

Separar os dados relacioandos em tabelas diferentes.

# 1ª Forma Normal

Para iniciar a organização de um banco de dados, devemos nos atentar para a Primeira forma normal seus preceitos são:

- Colunas devem possuir apenas um valor;
- Valores em uma coluna devem ser do mesmo tipo de dados;
Cada coluna deve possuir um nome único;
- A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados.

# 2 Forma Normal

- A tabela deve estar na 1ª forma normal
- A tabela não deve possuir dependências parciais.

Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir.

Exemplo:

| id | nome | data_matricula | curso |
| --- | --- | --- | --- |
| 1 | Samuel | 2020-09-01 | Física |
| 2 | Joana | 2020-08-15 | Biologia |
| 3 | Taís | 2020-07-14 | Contabilidade |
| 4 | André | 2020-06-12 | Biologia |

A coluna curso pode ser considerada uma dependância parcial, pois é possível mover os valores dessa coluna para uma outra tabela. Os dados dessa tabela podem existir independente de existir uma pessoa estudante vinculada a esse curso ou não.
Dessa forma, depois de normalizar, teŕiamos duas tabelas:

| id | nome |
| -- | -- |
| 1 | Física |
| 2 | Biologia |
| 3 | Contabilidade |

| id | nome | data_matricula | curso_id |
| 1 | Samuel | 2020-09-01 | 1 |
| 2 | Joana | 2020-08-15 | 2 |
| 3 | Taís | 2020-07-14 | 3 |
| 4 | André | 2020-06-12 | 2 |

A função da normalização não é necessariamente reduzir o número de colunas mas remover redundâncias e possíveis anomalias de inclusão, alteração ou remoção de dados.

