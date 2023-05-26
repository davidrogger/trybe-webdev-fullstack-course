comandos usados no projeto:
```
npm i express mysql2 sequelize dotenv
npm i -D nodemon sequelize-cli
```
Depois de configurado o sequelize:

Criando banco com o sequelize:
```
npx sequelize db:create
```

Criando um model:
```
npx sequelize migrate:generate --name book title:string
```

Depois de configurado os campos necessários dentro da tabela Books
```
npx sequelize db:migrate
```