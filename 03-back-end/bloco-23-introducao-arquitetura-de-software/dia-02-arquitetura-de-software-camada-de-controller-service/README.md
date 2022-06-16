anotações pessoais do dia...

# Camadas de controller e Service

## Camada dos controllers

A camada dos controllers é a primeira em uma API. É por meio dela que os dados da requisição do cliente serão recebidos e tratados, para depois serem passados para as próximas camadas.

O controller recebe as requisições feitas à API e então consulta o service, enviando na resposta aquilo que o service deve ternar: uma mensagem de erro ou as informações pedidas. Ao comunicar-se com o service, o controller não deve passar toda a request, ou seja, as informações devem ser extraídas e apenas  o que for necessário para determinada ação deve ser transferido.

# Camada dos Services

A medida que projetos crescem, os modelos tornam-se cada vez mais complexo, pois passam a acumular mais regras de negócio. Por isso, é comum vermos uma nova camada sendo adicionada, projetos que exigem uma regra de negócio mais comeplxa.
O services fica situada entra as camadas de controller e mode, sendo responsável pela nossa regra de negócio. Quando é adicionado uma camada de Services, a camada model fica com menos atribuições, ou seja, terá como responsabilidade somente o acesso a dados. Quebramos a camada de modelo em outras duas partes, a de controler, e a de serviço. Cada um com sua responsabilidade.

Uma boa camada de serviço faz:
- centraliza o acesso aos dados e funções externas
- abstrai regras de negócio complexas do seu modelo

O que ela não deve fazer:
- não deve ter nenhum tipo de informação sobre o acesso a camada de dados. (não ter nenhuma query SQL).
- Não receber nada relacionado ao HTTP, seja o request ou o response.
- O controller deve mandar apenas o necessário para o service.

# Mais sobre regra de negocio.

É a regra que diz respeito ao como o programa deve realizar sua função principal.
Essas verificações podem ser dividas em dois tipos:

- Simples: Não é possível cadastrar um produto que o nome tenha menos de 5 letras. Não é possível cadastrar um produto que já exista ou só é permitido listar todos os usuários sendo administrador.
- Complexa: Só é possível vender produtos que tenham estoque ou não é permitido parcelar compras em mais de 5x para valores abaixo de #$100,00.

São definições feitas pelo cliente.

São todas as validações e regras que um negócio impõe em sua operação.
[Mais sobre regra de negocio](http://www.linhadecodigo.com.br/artigo/3205/regras-de-negocio-por-que-voce-deveria-se-importar-com-isso.aspx);