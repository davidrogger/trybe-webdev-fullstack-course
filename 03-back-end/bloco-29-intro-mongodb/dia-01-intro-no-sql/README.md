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



