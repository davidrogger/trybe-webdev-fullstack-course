# Arquitetura de Software

Para mair facilidade na manutenção e escala de um projeto o ideal é que o código siga um padrão organizacional, facilitando a possibilidade de modificações, criações entre membros novos e antigos da equipe.

## Arquiteturas

- Camadas
- Hexagonal

Entre outras mais, cada uma tem suas próprias características e é adequada para diferentes tipos de cenários.

# Arquitetura de Camadas

Não necessariamente elas são limitada as camadas que serão abordadas abaixo, que serão Model, Service e Controller.

- `Model`: agrupa todo relacionamento de leitura ou escrita de dados. Ela é a única a acessar diretamente as ferramentas de armazenamento de dados, seja um banco de dados ou algum sistema de arquivos.
- `Service`: agrupa as regras de negócio da aplicação. As regras de negocio são normalmente regras ligadas ao domínio da aplicação, em uma aplicação que gerencia um almoxarifado. Cada vez que alguém solicita um item é realizada uma checagem na quantidade do item, e se ele estiver abaixo da quantidade mínima é enviado um email para o setor de compras solicitando uma reposição. Essa camada é que possui os métodos/funções que aplicando essa ação em forma de código.
- `Controller`: agrupa a comunicação/interação da aplicação com o mundo exterior, onde o usuário/cliente interage para realizar alguma ação, sendo um requisição feita por uma aplicação frontend ou outra API. Num contexto mais especifico de API RESTful, as funções presentes nessa camada lidam com requisições HTTP e devem devolver uma resposta. Para isso, essa camada valida o formato dos dados recebidos e interage com as demais camadas para aplicar alguma regra de negócio ou acessar dados.

# Model

Responsável por toda comunicação com os dados, ela pode conversar com vários tipos de bancos de dados ou arquivos, não há uma regra que limite isso, em um mesmo model poderíamos, acessar um MySQL, Postgres um arquivo json.
Além disso ela também tem a responsabilidade de modelagem de informação, as vezes um banco ou arquivo possui um formato diferente do necessário na aplicação, exemplo seria um banco mysql usando o padrão de snake case, toda requisição ao banco chegaria com esse formato, e se a aplicação usar o padrão camel case, ela teria que realizar a modelagem padronizando esse formato conforme a necessidade padrão.
