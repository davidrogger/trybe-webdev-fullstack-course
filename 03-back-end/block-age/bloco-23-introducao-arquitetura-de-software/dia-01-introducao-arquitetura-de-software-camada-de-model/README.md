anotações pessoais do dia...

# O que é "Arquitetura de Software"?

É um conhecimento compartilhado por desenvolvedores experientes sobre como organizar um sistema de software - by Martin Fowler.

É a maneira como o sistema se organiza, quais são seus componentes, como eles conversam entre si, como as responsabilidades são distribuídas e etc.

Existem padrões de arquitetura específicos para problemas específicos.
Independente da arquitetura utilizada, é a divisão de responsabilidades por camadas.

# Regras de negócio

É um conceito essencial para entender a motivação por trás das arquiteturas. Definem ou restringem algum aspecto de um negócio. São elas que definem como o negócio deve se comportar, quando uma ação deve ser tomada e etc. As regras de negócio devem ser muito bem definidas e documentadas, pois guiam as tomadas de decisão e moldam processos. A princípio, as regras de negócio podem ser executadas manualmente, mas tem se tornado cada vez mais comum automatizá-las com a ajuda de sistemas de software.

# Arquitetura MSC

Três camadas:

- Camada de Modelo(M): Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.
- Camada de Serviço(S): Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.
- Camada de Controladores(C): Interface próxima da pessoa usuário ou de uma requisição, irá processar e chamar as devidas funções da camada de serviço.

Algumas vezes a camada de controladores pode se comunicar direto com a camada de modelo, dispensando o uso da camada de serviço, principalmente em situações em que não temos uma regra de negócio tão complexa. Isso deve ser usado apenas em casos específicos, e uma vez que um endpoint exija o uso de uma camada de serviço, o ideal é que todos os outros também utilizem essa camada, para que a arquitetura seja respeitada e a aplicação não se torne "bagunçada".

# Model

É onde manipulamos e definimos a estrutura dos nosso dados. Todo acesso aos dados deve passar por essa camada.
Os dados que a aplicação utiliza podem estar armazenados em um banco de dados, acessados através de uma API externa, arquivos ou outros dispositivos de armazenamento.

Ele é o responsável por abstrair completamente os detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar e manipular esses dados. Por exemplo, é responsabilidade de camada de model estabelecer uma conexão com o banco de dados.

As demais camadas não devem saber se o banco utilizado é MySQL ou qualquer outro banco (PostgreSQL, MongoDB, etc) ou se sequer há um banco de dados. O model se encarrega de fazer o mapeamento dos dados armazenados para as entidades existentes no domínio do seu negócio.

É no model que verificaremos se, ao criar uma nova pessoa usuário, são válidas as regras de negócio definidas.
O modelo deve ser completamente desacoplado das demais camadas, ele não pode ter conhecimento delas. Isso facilita a manutenção do código, pois alterações em outras camadas não terão impacto nos sesus modelos.

Outro benefício é uma maior reusabilidade de código. Como uma camada de modelo bem definida, por exemplo, nós poderiamos criar uma versão CLI da nossa aplicação somente utilizando a API que ela define, sem nenhuma duplicação de código.

# Model com MySQL

Para que possamos nos comunicar com o MySQL precisamos de um driver. O driver é um software que permite que você se comunique com o banco de dados a partir de uma aplicação. A escolha de driver utilizar depende tanto da linguagem quanto do banco de ados que é utilizado.

Usando o driver mysql2:
```
npm i mysql2
```

Crie uma pasta models dentro da pasta do projeto com arquivo connection:
```
// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'senha123',
	database: 'model_example' });

module.exports = connection;
```

O método createPool cria uma pool de conexões com o banco de dados. Fazendo com que a própria biblioteca gerenci as múltiplas conexões que forem feitas com o banco. O createPool recebe um objeto com as credenciais necessárias para estabelecer a conexão:

- host: local onde o servidor do MySQL está armazenado. localhost pelo db estar localmente.
- user: usuário que vai acessar o banco.
- password: senha do usuário. caso não tenha senha defina '' vazia, para o acesso.
- database: nome do banco que será conectado.

O método createPool retorna um objeto Pool representando uma sessão com o banco.
Para não ser necessário criar uma sessão e selecionar o schema sempre que precisarmos acessar o banco, armazenamos nossa pool na variável connection.

# Criando o Model

A camada de model pode ser implementada de várias formas.

Será usada a seguinte abordagem;

- Haverá uma entidade chamada Author na aplicação;
- A entidade vai conter os campos firstName, middleName e lastName. Os nomes estão em camelCase, enquanto as colunas do banco estão em snake_case;
- No código, um objeto contendo os campos mencionados acima será utilizado para representar uma pessoa autora.
- Existirão funções para ler e criar pessoas escritoras do o banco de dados;
- A rota só irá interagir com os dados através da interface do model Author.
```
// models/Author.js

const connection = require('./connection');

// Busca todas as pessoas autoras do banco.

const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
	return authors;
};

module.exports = {
	getAll,
};
```

O model AUthoer exporta uma função getAll. Essa função retornará todas as pessoas autoras cadastradas no banco de dados.
Utilizamos o método execute para fazer um query mysql. Esse método retorna uma promise que, quando resolvida, nos fornece um array com 2 campos: [rows, fields]. O primeiro index é onde está a resposta que desejamos (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.

O retorno da consulta do banco não está no formato que desejamos. Logo criaremos uma função para realizar essa conversão e faremos a modificação.
```
// models/Author.js

//  const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

// Busca todos os autores do banco.
// const getAll = async () => {
// 	const [authors] = await connection.execute(
// 		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
// 	);
		return authors.map(serialize);
// };

// module.exports = {
// 	getAll,
// };
```

Adicionando uma chave com o nome completo:
```
// models/Author.js

//  const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({id, firstName, middleName, lastName}) => {

// Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
// nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
	const fullName = [firstName, middleName, lastName]
		.filter(Boolean)
		.join(' ');

	return {
	id,
	firstName,
	middleName,
	lastName,
	fullName,
	};
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

//  // Busca todos os autores do banco.
//  const getAll = async () => {
//  	const [authors] = await connection.execute(
//  		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  	);
			return authors.map(serialize).map(getNewAuthor);
//  };

//  module.exports = {
//  	getAll,
//  };
```

# Mais prática
```
CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(90) NOT NULL,
	author_id INT(11) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
	('A Game of Thrones', 1),
	('A Clash of Kings', 1),
	('A Storm of Swords', 1),
	('The Lord of The Rings - The Fellowship of the Ring', 2),
	('The Lord of The Rings - The Two Towers', 2),
	('The Lord of The Rings - The Return of The King', 2),
	('Foundation', 3);
  ```

1. Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;

2. Crie uma rota /books para trazer a lista de todos os livros;

3. Crie um método getByAuthorId no modelo Book, para retornar apenas livros associados com um determinado author_id. Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.