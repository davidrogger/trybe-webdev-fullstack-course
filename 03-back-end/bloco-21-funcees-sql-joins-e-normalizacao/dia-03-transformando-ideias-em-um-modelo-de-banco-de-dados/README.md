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
