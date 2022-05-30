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

