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

