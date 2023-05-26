Exercício 2 🚀:
Crie o arquivo Compose para subir um [ghost](https://ghost.org/) blog, essa plataforma é similar com o WordPress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1 - Utilize a versão “3” no arquivo;

2 - Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine;

3 - Publique a porta 2368, fazendo bind também para a 2368;

4 - Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

Exercício 3 🚀:
Por padrão o ghost utiliza um banco de dados SQLite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

1 - Crie um novo serviço db para o nosso banco de dados:

Podemos utilizar o banco de dados MySQL, utilize a imagem mysql:5.7.40;
Precisamos definir uma senha root para o banco, para isso utilize a variável de ambiente MYSQL_ROOT_PASSWORD
2 - Agora precisamos configurar nosso serviço ghost para utilizar o banco de dados:

Defina o tipo de banco de dados a ser usado pelo ghost definindo a variável de ambiente database__client para mysql;
Defina o serviço db como servidor do banco de dados na variável de ambiente database__connection__host;
Defina as credenciais para a conexão com o banco de dados
Para definir a pessoa usuária (root), utilize a variável de ambiente database__connection__user
Para definir a senha (a mesma que definimos no nosso serviço db), utilize a variável de ambiente database__connection__password
Defina o nome ghost para o nome do database no banco de dados utilizando a variável de ambiente database__connection__database;
Utilize a opção depends_on para criar relações de dependências entre os serviços.
3 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.