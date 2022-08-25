# Um pouco de história

Com a necessidade de economizar espaço de armazenamento foi necessario estruturar e normalizar os dados que seriam gravados, assim os dados armazenados utilizariam menos espaço, tendo um aproveitamento melhor de recursos, gerando economia ou a possibilidade de armazenar mais dados em um mesmo espaço.
Com o passar do tempo, a técnologia evoluiu e com essa evolução, mais um problema surgiu, produção de dados em uma quantidade muito grande e muitas vezes de forma desestruturada. Eles são chamados de desestruturados por terem origem em diversas fontes, como sensores IOT (Internet of Things, geladeira conectada à internet, relógios, carros), imagens e documentos não catalogados. Estruturar e organizar isso é possível porém demanda um tempo grande, com isso as aplicações podem perder o timing de entrega das soluções. Esse problema precisava ser resolvido e, assim nasceram os dados NoSQL.

O termo NoSQL foi originalmente criado em 98, por Carlo Strozzi e posteriormente reinstroduzido por Eric Evans em 2009, quando particiou da organização de um evento para discutir bancos de dados open source e distribuídos. NoSQL basicamente opera em computação distribuída, um conceito que aumenta muito sua escalabilidade e performance.

# NoSQL

Não existe uma definição oficial para o que realmente esse termo significa, mas uma das versões mais aceitas é Not Only SQL. Essa definição diz que esses bancos podem utilizar SQL para realizar consultas e demais operações, não somente a SQL.

## Particularidades

Nos bancos relacionais o conceito ACID (Atomicity, Consistency, Isolation, Durability) é utilizado com base. Esse conceito é explorado com mais profundidade nos blocos referentes a bancos de dados relacionais (SQL).
Porém, nos bancos de dados NoSQL, outro conceito é utilizado: o BASEC (Base Avalilability, Soft Sstate and Eventually Consistent).
Mas antes de entender o conceito BASE, precisamos entender o termo cluster.
Cluster no contexto de banco de dados, se refere à capacidade de um conjunto de servidores ou instâncias se conecaterem a um banco de dados. Uma instância é uma coleção de memória e processos que interagem com o banco de dados, que é o conjunto de arquivos físicos que realmente armazenam os dados.

O clsuster tem duas vantagens principais, especialmente em ambientes de banco de dados de alto volume;

- Tolerância a falhas (Fault Tolerance): como há mais de um servidor ou instância para os usuários se conectarem, o cluster oferece uma alternativa no caso de falha em um servidor. Quando se lida com dezenas de milhares de máquinas um único centro de processamento de dados (CPD), também conhecido como data center, tais falhas são um problema presente;

- Balanceamento de cagar (Load Balancing): o cluster geralmente é configurado para permitir que os usuários sejam automaticamente alocados ao servidor com o mínimo de uso para aquele, assim se otimize o uso da estrutura disponível para o banco.

# Conceito BASE

- Base Availability - BA
- - O banco de dados aparenta funcionar o tempo todo. Como existe o cluster, se um servidor falhar, o banco continuará funcionando por conta de outro servidor que suprirá essa falha;

- Soft State - S
- - Não precisa estar consistente o tempo todo. Ou seja, com um banco distribuído em várias máquinas e todas sendo usadas com igual frequẽncia para escrita e consulta, é possível que, em dado momento, uma máquina receba uma escrita e não tenha tido tempo de "repassar" essa escrita para as demais máquinas do banco. Assim, se um usuário consultar a máquina que já foi atualizada e outro o fizer numa máquina menos atualizada, os resultados, que deveriam ser iguais, serão diferentes. Imagine a sua timeline do Facebook: nela são exibidos os posts de seus amigos, porém nem todos os posts são exibidos exatamente ao mesmo tempo. Nesse caso, o que acontece é que a informação foi enviada ao banco de dados, mas nem todos os servidores do cluster têm essa mesma informação ao mesmo tempo.
Isso permite que o banco de dados possa gerenciar mais informações de escrita sem ter que se preocupar em replicá-las em uma mesma operação.

- Eventuallty Consistent - E
- - O sistema se tornar consistente em algum momento. Como não temos a informação replicada "instantaneamente", esse ponto se encarrega de deixar o banco consistente "ao seu tempo". Isso porque, dependendo das configurações do cluster, essa replicação pode acontecer mais rapidamente ou não. Mas em algum momento as informações estarão consistentes e presentes em todos os servidores do cluster.

Schema flexível, não há necessidade de definição prévia do schema dos dados. Se por um lado isso tornar muito mais dinâmico o processo de inclusão de novos atributos, por outro pode impactar a integridade desses dados.

# NoSQL e suas Classes

Os bancos de dados NoSQL estão divididos em quatro principais tipos (são chamados de classes no contexto de banco de dados):

- Chave / Valor (Key / Value)
- Família de Colunas (Column Family)
- Documentos (Document)
- Grafos (Graph)

Cada classe tem aplicações diferentes, e devemos sempre observar as características da classe para tirar o melhor proveito dela.

# Chave / Valor - Key / Value

Essa primeira classe é considerada a mais simples. Os dados são armazenados num esquema de registros compostos por uma chave (identificador do registro) e um valor (todo o contéudo pertencente áquela chave). Você consegue recuperar um registro do seu banco de dados através da chave. Consultas por algum conteúdo através do valor não são permitadas.
A maioria dos bancos de dados Chave / Valor utilizam-se do recurso de armazenamento in-memory (memória RAM) e, com isso, o acesso aos dados é extremamente rápido. Alguns cuidados, porém, devem ser tomados na questão da persistência desses dados, uma vez que eles estarão em uma área de memória volátil, não fazendo um transbordo para o disco (default). Essa volatilidade se dá por que a memória RAM é totalmente pagada quando os computadores são reiniciados ou desligados, é uma área temporária.
Sistemas que requerem algum tipo de cache utilizam bastante essa classe de bancos de dados.
Um exemplo de banco de dados classe Chave / Valor é o Redis.

# Família de Colunas - Column Family

Subindo um pouco mais a complexidade dos dados armazenados, essa segunda classe armazena os dados como um conjunto de três "chaves": linhas, coluna e timestamp. As linhas e colunas concentram os dados, e as diferentes versões desses dados são identificadas pelo timestamp.

Destaque para o conceito de masterless, ou seja, não existe um único servidor no cluster que concentra a escrita; essas operações são atendidas pelo servidor que estiver mais "próximo" de onde a operação vier.
O uso dessa classe é altamente recomendável em sistemas nos quais dados analíticos em grande escala são o ponto-chave.
Um exemplo de banco de dados da classe Família de Colunas é o Cassandra.

# Documentos - Document

A class mais flexível e com ampla aderência em vários casos de uso. Os dados são armazenados em estilo JSON, podendo ter vários níveis e subníveis, o que confere aos dados armazenados possibilidade de ter maior complexidade. A estrutura de um documento é muito parecido com o que armazenamos na classe Chave / Valor. Porém, com Documentos, não temos apenas uma chave e sim um conjunto de chaves e valores.
Por mais que schaemaless (sem uso de schema) seja um ponto presente na maioria dos bancos de dados NoSQL, na classe de Documentos temos esse conceito mais presente justamente pelo uso do JSON como padronização. Isso porque a inclusão, remoção ou alteração de tipos de dados são muito mais simples e fluídos utilizando JSON.
Sistemas que requerem uma gama de informações com diversos layouts e esquemas se encaixam muito bem nessa classe.
Um exemplo de banco de dados da classe Documentos é o CouchDB e o MongoDB.

# Grafos - Graph

A classe que consegue armazenar dados muito complexos. Os dados são compostos por nós (vértices do grafo), relacionamentos (arestas do grafo) e as propriedades ou atributos dos nós ou relacionamentos. Note que o relacionamento é o ponto central dessa classe. Nesses bancos de dados, o relacionamento é físico, sendo persistido como qualquer outro dado dentro do banco. Dessa forma, as consultas que requerem essas relacionamentos são extrememente performáticas.
Os grafos estão muito mais presentes em seu dia a dia do que você possa imaginar. Empresas e aplicativos de transporte ou GPS, por exemplo, utilizam os algoritmos e bancos de dados de grafos para diversas de suas operações, como encontrar o motorista mais perto de você, calcular o menor caminho de um ponto a outro e até mesmo trazer recomendações de produtos em sites de comércio eletrônico. Sistemas de recomendação e antifraude também têm encaixe perfeito para essa classe.
Um exemplo de banco de dados da classe Grafos é o Neo4j.

# Recursos adicionais:

- [Paradigma-da-computacao-distribuida.](https://imasters.com.br/arquitetura-da-informacao/paradigma-da-computacao-distribuida)
- [NoSQL // Dicionário do Programador](https://youtu.be/1B64oqE8PLs)
- [Artigo que fala sobre as principais características do NoSQL](https://www.guru99.com/nosql-tutorial.html)
- [Pesquisa feita em 2019 sobre o uso de bancos de dados SQL vs NoSQL](https://scalegrid.io/blog/2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use/)
- [Artigo que explica quando usar e quando não usar NoSQL](https://medium.com/leroy-merlin-brasil-tech/devo-usar-nosql-e-mongodb-951693aa0d34)
- [Conceitos de Bancos de Dados – O que significa ACID](http://www.bosontreinamentos.com.br/bancos-de-dados/conceitos-de-bancos-de-dados-o-que-significa-acid/)
- [Site DB Engine com os bancos de dados mais usados](https://db-engines.com/en/ranking/)


# MongoDB

## Instalação

Existem três tipos de instalação:

1. Standalone
- Apenas indicado para ambientes de desenvolvimento;
- Não exige nenhum tipo de configuração relativa à segurança

2. Replica Set
- É o mínimo indicado para ambientes de produção;
- Neste tipo, os dados são replicados em cada um dos servidores do cluester e temos apenas um ponto de escrita;
- Em alguns casos, podemos utilizar os demais servidores para escalar a leitura.

3. Shard
- Esse é um tipo de instalação no qual podemos escalar a escrita de informações no banco;
- Os dados são dividos no cluster através de chaves de partição que chamamos de shard keys;
- A shard key pode ser composta por um ou mais atributos do documento, e sua escolha pode aftar a performance, eficiência e escalabilidade do banco;
- Escalar a escrita significa dar mais capacidade para que o banco de dados processe mais operações, aumentando a performance.

## Instalando MongoDB Communit Edition

Instalando no Ubuntu, utilizando apt package manager.

1. Importando a chave pública utilizada pelo genrenciador de pacoste

```
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
```

Caso apareça uma menssagem de erro sobre o gnupg não estar instalado deve-se instala-lo.

```
sudo apt-get install gnupg
```

Após a instalação rode novamente a chave publica.

2. Crie o arquivo de lista para o MongoDB

Crie o arquivo /etc/apt/sources.list.d/mongodb-org-4.4.list para o Ubuntu 20.04 (Focal):
```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```

3. Atualize o banco de dados local de pacotes
```
sudo apt-get update
```

4. Instale os pacotes do MongoDB
```
sudo apt-get install -y mongodb-org
```

# Pacotes instalados

1. mongodb-org-server: pacote contém o que podemos chamar de "servidor" do MongoDB. Contém todos os recursos necessários para que uma instância do banco seja executada;
2. mongodb-org-shell: o hsell é onde você se conecta com o MongoDB através do terminal. É uma interface que suporta JavaScript e é super completa para administração de instâncias e clusters;
3. mongodb-org-mongos: pronuncia-se "Mongo S" e só faz necessário em ambientes Shard.
4. mongodb-org-tools: esse pacote contém algumas ferramentas nativas do mongoDB. Como por exemplo:
  - mongodump: ferramenta para extrair dados no formato BSON. Em alguns ambientes, pode fazer parte da estratégia de backup;
  - mongorestore: ferramenta para restaurar backups gerados pelo mongodump;
  - mongoimport: ferramenta para importar arquivos JSON, CSV ou TSV para uma instância do MongoDB;
  - mongoexport: exporta dados de uma instância do MongoDB para arquivos JSON ou CSV.

# Executando o MongoDB Communit Edition

## Considerações sobre o ulimit

Alguns sistemas operaiconais baseados em UNIX limitam os recursos de sistema que uma sessão pode utilizar. Esses limites têm grande impacto negativo para a operação do MongoDB, e em ambientes de produção devem ser observados com muita atenção. Veja a seção [UNIX ulimit Settings](https://docs.mongodb.com/manual/reference/ulimit/) da documentação do Mongo para maiores informações.

# Diretórios de trabalho

Se o MongoDB foi instalado via apt(gerenciados de pacotes do Linux), então algumas configurações são executadas e mantidas em diretórios do sistema operacional. Por padrão, no Linux, os dados ficarão armazenados em /var/lib/mongodb, e o log de funcionamento em /var/log/mongodb

No MacOS, os dados e os logs ficam em /usr/local/var/mongodb e /usr/local/var/log/mongodb, respectivamente.

Por padrão, o MongoDB roda utilizando a conta do usuário mongodb, que também foi criada durante a instalação. Se você quiser rodar uma instância com outro usuário, deverá dar as permissões para ele nos diretórios de dados e log.

# Arquivo de configuração

O pacote oficial inclui um [arquivo de configuração](https://www.mongodb.com/docs/manual/reference/configuration-options/#conf-file) (/etc/mongod.conf). Essas configurações (como especificação dos caminhos dos diretórios de dados e log) têm efeito após o startup da instância (ou seja, quando ela for iniciada). Logo, se você fizer qualquer modificação nesse arquivo com a instância do MongoDB rodando, deverá reiniciá-la para que tenha efeito.

1. Iniciando o MongoDB
```
sudo service mongod start
```

2. Verifique se o MongoDB foi iniciado com sucesso
```
sudo service mongod status
```
Pode ser checado o arquivo de log que, por padrão é localizado em /var/log/mongodb/mongod.log, no Linux, e em /usr/local/var/log/mongodb, no Mac. Para verificar se a instância está rodando ep ronta para conexões utilize o comando:
```
[initanlisten] waiting for connections on port 27017**
```
3. Parando a instância
```
sudo service mongod stop
```

4. Reiniciando a instância
```
sudo service mongod restart
```

# Configurando a inicialização do servidor do MongoDB

Por padrão, após a instalação, seu servidor vai estar configurado para não iniciar junto ao sistema. Caso queira ativar o início automático, utilize o comando:

`sudo systemctl enable mongod.service`

para desativar:

`sudo systemctl disable mongod.service`

# Desinstalando o MongoDB

1. parando serviços: `sudo service mongod stop`
2. removando pacotes: `sudo apt-get purge mongodb-org`
3. removendo dependências desnecessárias: `sudo apt-get autoremove` and `sudo apt-get autoclean`
4. removendo arquivos do mongodb: `sudo rm -rf /var/log/mongodb` and `sudo rm -rf /var/lib/mongodb`
5. Para verificar se o mongodb foi removido com sucesso use o comando `mongod --version` ele não deve retornar uma versão pois ela não existe.

# Informação importa

Por padrão, o MongoDB só permite conexões locais. Ou seja, apenas de clients que estejam rodando na mesma máquina onde a instância estiver sendo executada. Para alterar essa configuração e permite conexões remotas, veja sobre [IP Binding](https://docs.mongodb.com/manual/core/security-mongodb-configuration/) na documentação.

Para iniciar o CLI do mongo basta digitar `mongo` no terminal.
Por padrão a porta usada para o mongo é a 27017.
Para acessar a instância em outra porta, basta passar o parâmetro --port: `mongo --port 19000`, o retorno deve ser algo parecido com isso;
```
MongoDB shell version v4.4.3
connecting to: mongodb://127.0.0.1:19000/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("f0c79e43-ead0-42d9-bd7d-c8d6857e7221") }
MongoDB server version: 4.4.3
>
```

[Comandos para o mongo cli](https://www.mongodb.com/docs/manual/reference/mongo-shell/)

Existem outras interfaces visuais para o MongoDB que podem facilitar muito sua vida na hora de manipular seus bancos de dados.

- [MongoDB Compass](https://www.mongodb.com/try/download/compass)
- [MongoDB for VS Code](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)
- [NoSQLBooster for MongoDB](https://nosqlbooster.com/downloads)

# Utilizando MongoDB com Docker

```
docker run --name <nome do container> -d mongo:tag
```

Usando somente mongo será baixada a versão estável mais atual, caso seja necessário especifique a tag com a versão desejada.

# Executando o shell do Mongo no Docker

```
docker exec -it <nome do container ou id> mongo
```

Lembrando que a ultima palavra é o que será executado no exemplo acima é executado o mongo em modo interativo, podendo ser usado o mongosh com alguns novos recursos visuais.

# Importando arquivos locais para dentro do contêiner utilizando mongoimport

Esta ferramenta importa conteúdo de um arquivo JSON,CSV ou TSV criada por mongoexport ou, potencialmente, outra ferramenta de exportação de terceiros. Utilizamos esse recurso num contêiner da seguinte forma:

1. Copiamos o arquivo que será importado para dentro do contêiner.
```
docker cp <nome do arquivo.json> <nome do container ou id>:/tmp/<nome do arquivo.json>
```

2. Realizamos a importação do arquivo para o MongoDB
```
docker exec <nome do container ou id> mongoimport -d <nome do banco> -c <nome da coleção> --file /tmp/<nome do arquivo.json>
```

# Bancos de dados, Coleções e Documentos

A estrutura de armazenamento do MongoDB consiste em:

- ter diversos bancos de dados;
- dentro destes bancos temos as coleções (que seriam equivalentes às tabelas dos bancos de dados relacionais);
- dentro destas coleções temos os documentos (que seriam equivalentes aos registros dos bancos de dados relacionais).

O MongoDB armazena os documentos no formato BSON [(Binary JSON)](https://www.mongodb.com/docs/manual/core/document/#bson-document-format).

# Bancos de dados

Assim como os bancos relacionais, dentro de uma mesma instância do MongoDB você pode ter um ou vários bancos de dados. Uma grande diferença é que não temos a formalidade de criar um banco de dados antes de fazer um operação nele.
Quando realizando um insert, o MongoDB cuida de criar o banco e a coleção(caso não exista) junto com os documentos inseridos. Tudo isso em uma mesma operação.

Uma vez conectado a uma instância do MongoDB através do MongoDB Shell, você só precisa especificar o contexto em que essa escrita acontecerá. Nesse caso, o contexto é o nome do banco de dados que você quer criar:
```
use nomeDobanco
db.nomeDaColecao.insertOne({ x: 1 })
```

A função insertOne() cria tanto o banco de dados nomeDoBanco, como a coleção nomeDaColecao caso eles não existam. Se existirem, apenas mapeia o documento a ser inserido dentro deles e, por fim, executa a operação.

Uma dica para nomear bancos e coleções seguindo esse [guia](https://www.mongodb.com/docs/manual/reference/limits/#restrictions-on-db-names)

# Coleções

Os documentos no MongoDB são armazenados dentro das coleções. Lembrando que uma coleção é equivalente a uma tabela dos bancos de dados relacionais.

## Criando uma coleção

Se uma coleção não existe, o MongoDB cria essa coleção no momento do primeiro insert.
```
db.nomeDaColecao1.insertOne({ x: 1 })
```

Veja que a operação insertOne() cria uma nova coleção (caso ela não exista).

## Criação explícita

Você também pode utilizar o método `db.createColletion()` e especificar uma serie de parâmetros, como o tamanho máximo do documento ou as regras de validação para os documentos.
Se não for necessário especificar algum parâmetros o uso do método para criação não é necessário.
Criando uma coleção especificando sua [collation](https://www.mongodb.com/docs/manual/reference/collation/#collation-document-fields).

```
db.createCollection( "nomeDaColecao", { collation: { locale: "pt" } } );
```

Pode-se realizar modificações nos parêmtros de uma coleção através do [collMod](https://docs.mongodb.com/manual/reference/command/collMod/#dbcmd.collMod).
Mais métodos de criação na [documentação](https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection).

# Documentos

Documentos são equivalentes aos registros ou linhas de uma tabela nos bancos de dados relacionais. Além disso, cada atributo(campo) é equivalente a uma coluna de uma linha da tabela. Sua diferença é que documentos podem conter estruturas mais ricas, diferentes entre documentos e armazenar muito mais informações do que você consegue em uma "linha simples" de uma tabela relacional.

Abaixo exemplo do mesmo dado em uma tabela relacional e uma não relacional.

| _id | nome | endereco | cidade | uf |
| -- | -- | -- | -- | -- |
| 1 | Jose | rua 1 | São Paulo | SP |
| 2 | Maria | rua 2 | Belo Horizont | MG |

```
{
    "_id": 1,
    "nome": "Jose",
    "endereco": {
        "logradouro": "Rua 1",
        "regiao": "Zona Norte",
        "cidade": "São Paulo",
        "uf": "SP"
    }
},
{
    "_id": 2,
    "nome": "Maria",
    "endereco": {
        "logradouro": "Rua 2",
        "cidade": "Belo Horizonte",
        "uf": "MG"
    }
}
```

Um insert recebe como parêmetro um JSON. Esse parâmetro define os dados e a estrutura do documento. É importante ressaltar que, por ser schemaless, a estrutura não faz parte da coleção e sim do documento. Com isso, vpode ter várias "estruturas" por coleção. No exemplo acima podemos observar essa diferença entre os documentos: no primeiro, temos o atributo região, que não existe no segundo documento.
Quando realizando uma alteração, faça-a em nível de documento. Pois caso for realizado em nível de coleção, muitos documentos com estruturas diferentes poderão ser impactados com a criação, alteração ou remoção deu m atributo que não faz parte daquela estrutura de todos.

# Validação de documentos

Você pode aplicar uma validação para que cada operação de escrita em sua coleção respeite uma estrutura. Utilize o [Schema Validation](https://docs.mongodb.com/manual/core/schema-validation/) para isso.

# BSON Types

Por mais que o insert ocorra recebendo um documento JSON, internamente, o MongoDB armazena os dados em formato de BSON (Binary JSON). Esse formato é uma extensão do JSON e permite que você tenha mais tipos de dados armazenados no MongoDB, não somente os tipos permitidos pelo JSON.

# Insert

- insertOne(), usado para inserir um dado em uma coleção esteja ela criada ou não.

Exemplo:
```
use vehicles
db.cars.insertOne({ name: "Fusca", price 3000 });
```

Por padrão ele ja gera uma chave únicade id e é a melhor opção, porém é possivel inserir manualmente um id à coleção criada.
```
db.cars.insertOne({ _id: 1, name: "Gol", price: 50000 })
```

Porém não é recomendado o uso manual, só em casos muito especificos.

- insertMany(), usado para inserir vários documentos à coleção;

Exemplo
```
use vehicles
db.cars.insertMany(
  [
    {
      _id: 1,
      "name": "Fusca",
      "price": 3000
    },
    {
      _id: 2,
      "name": "Gol",
      "price": 50000
    },
    {
      _id: 3,
      "name": "Uno",
      "price": 35000
    },
    {
      _id: 4,
      "name": "Celta",
      "price": 50000
    },
    {
      _id: 5,
      "name": "Corsa",
      "price": 45000
    },
  ]);
```
Dessa maneira todos itens seriam inseridos no banco, nota que a inserção é realizada de forma ordenada, de cima para baixo, por padrão se algum id for duplicado, o banco retornará um erro, parando a inserção dos demais itens, para o mongo ignorar o erro e inserir os demais itens que não estão com error, devemos adicionar um segundo parametro ao insertMany, `{ ordered: false }`, fazendo com que mesmo que ocorra um erro ele seguida para os demais itens.

# Find

- find(), usado para selecionar os documentos de uma coleção e retornar um cursor com esses documentos.
Esse método pode receber dois parâmetros:
```
db.collection.find(query, projection)
```
- query (opcional)
  - Tipo: document;
  - Descrição: especifica os filtros da seleção usando os query operators. Para retornar todos os documentos da coleção, é só omitir esse parâmetro ou passar um documento vazio ({}).

- projection (opcional)
  - Tipo: documento;
  - Descrição: especifica quais atributos serão retornados nos documentos selcionados pelo parâmetro query. Para retornar todos os atributos desses documentos, é só omitir esse parâmetro.

Esse método retorna um cursor para os documentos que correspondem aos critérios de consulta.

# Projeção (projection)

Determina quais atributos serão retornados dos documentos que atendam aos critérios de filtro.
O formato recebido por ele é algo como:
```
{ "atributo1": <valor>, "atributo": <valor> ... }
```

O <valor> pode ser uma das seguintes opções:

- 1 ou true, para incluir um campo nos documentos retornados;
- 0 ou false para excluir um campo;
- Uma expressão usando [Projection Operators.](https://docs.mongodb.com/manual/reference/operator/projection/)

Exemplo: 

```
db.movies.insertOne(
    {
        "title" : "Forrest Gump",
        "category" : [ "drama", "romance" ],
        "imdb_rating" : 8.8,
        "filming_locations" : [
            { "city" : "Savannah", "state" : "GA", "country" : "USA" },
            { "city" : "Monument Valley", "state" : "UT", "country" : "USA" },
            { "city" : "Los Anegeles", "state" : "CA", "country" : "USA" }
        ],
        "box_office" : {
            "gross" : 557, "opening_weekend" : 24, "budget" : 55
        }
    }
)
```

```
db.movies.findOne(
    { "title" : "Forrest Gump" },
    { "title" : 1, "imdb_rating" : 1 }
)
```

retorno:
```
{
    "_id" : ObjectId("5515942d31117f52a5122353"),
    "title" : "Forrest Gump",
    "imdb_rating" : 8.8
}
```

Por padrão o id sempre será retornado, para suprimi-lo basta adicionar na projeção como false ou 0

Exemplo:
```
db.movies.findOne(
    { "title" : "Forrest Gump" },
    { "title" : 1, "imdb_rating" : 1, "_id": 0 }
)
```

# Gerenciamento de cursor

Ao executar o método find(), o MongoDB Shell itera automaticamente o cursor para exibir os 20 primeiros documentos. Digite it para continuar a iteração. Assim, mais 20 documentos serão exibidos até o final do cursor.

Um método bastante interessante que é utilizado num cursor é o countDocuments(). Que retorna o número de documentos de uma coleção, e também pode receber um critério de seleção para retornar apenas o número de documentos que atendam a esse critério.
Nota: na documentação do mongo você poderá encontrar o método count() que tem uso similar ao countDocuments(), porém foi depreciado a partir da versão 4.0, [mais detalhes](https://docs.mongodb.com/manual/reference/method/db.collection.count/)
Você pode retornar o número de documentos de uma coleção com o seguinte operação:
```
db.movies.countDocuments({});
```

# Tipos e comparações

O MongoDB trata alguns tipos de dados como equivalentes para fins de comparação. Por Exemplo, tipos númericos sofrem conversão antes da comparação. No entanto, para a maioria dos tipos de dados, os [operadores de comparação](https://docs.mongodb.com/manual/reference/operator/query-comparison/) realizam comparações apenas em documentos em que o tipo BSON do atributo destino do documento corresponde ao tipo do operando da query.
Para compreender melhor esse conceito, veja o exemplo abaixo, considerando a seguinte coleção;
```
{ "_id": "apples", "qty": 5 }
{ "_id": "bananas", "qty": 7 }
{ "_id": "oranges", "qty": { "in stock": 8, "ordered": 12 } }
{ "_id": "avocados", "qty": "fourteen" }
```

A operação abaixo usa o operrador de comparação $gt(greater than) para retornar os documentos em que o valor do atributo *qty* seja maior do que 4;
```
db.collection.find({ qty: { $gt: 4 } })
```
O documento com o _id igual a "avocados" não foi retornado porque o valor do campo *qty* é do tipo string, enquanto o operador *$gt* é do tipo integer.
O documento com o _id igual "oranges" também não foi retornado porque *qty* é do tipo object.
Nesses casos, vemos o schemaless funcionando na prática.


# Practice find()

Crie uma coleção chamada [bios](https://docs.mongodb.com/manual/reference/bios-example-collection/)

Para encontrar coleção com id 5
```
db.bios.find({ _id: 5 })
```

Para encontrar o last name Hopper
Podemos usar dot notation
```
db.bios.find({ "name.last": "Hopper" });
```

Para coletar todos elementos da coleção somente de um campo especifico como o nome:
```
db.bios.find({}, {name: 1, _id: 0})
```

# Limitando o número de documentos retornados

- limit()

Você pode limitar o número de documentos retornados por uma consulta utilizando o método limit(). Esse método é semelhante à declaração LIMIT em um banco de dados que utiliza SQL.

Uma utilização comum do limit() é para maximizar a performance e evitar que o MongoDB retorne mais resultados do que o necessário para o processamento.
O método limit() é utilizado da seguinte forma:
```
db.collection.find(<query>).limite(<numer>)
```

Deve-se especificar um valor numérico no limit().

Um exemplo utilizando a coleção bios:
```
db.bios.find().limit(5)
```

Será retornado os 5 primeiros documentos da coleção

- pretty()

Com o método pretty() você pode deixar os resultados exibidos no MongoDB Shell um pouco mais legíveis. Esse método aplica uma indentação na exibição dos resultados no console.

- skip()

Acione o método skip() para controlar a partir de que ponto o MongoDB começará a retornar os resultados. Essa abordagem pode ser bastante útil para realizar páginação dos resultados.

O método skip() precisa de um parâmetro númerico que determinará quantos documentos serão "pulados" antes de começar a retornar.

Exemplo pulará os dois primeiros documentos da coleção
```
db.bios.find().skip(2);
```

Pode-se combinar os meodos limite e skil, criando assim uma páginação;
```
db.bios.find().limite(5).skip(5)
```
