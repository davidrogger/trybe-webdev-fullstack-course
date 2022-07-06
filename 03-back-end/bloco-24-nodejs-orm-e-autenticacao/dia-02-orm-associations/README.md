anotaçẽso do dia...

# Eager Loading

Esse método carrega todos os dados na mesma resquest.

# Lazy Loading

Possibilita o uso de termos dois usos para o mesmo endpoint. Não especificando uma propeidade includes no momento de realizar a query no banco.

# Transações

Uma transação simboliza uma unidade de trabalho indivísivel executada do banco de dados de forma confiável e independente de outras transações. As ações dessa unidade de trabalho não podem ser mescladas com ações de outroas transações. O conceito de uma unida de trabalho indivísivel é chamado de atomicidade. Dessa forma, uma unidade de trabalho atõmica é indivisível.

Uma transação atômica ou ambas acontecem ou nada acontece.

Uma transação de banco de dados relacional, por definição, deve ser atômica, consistente, isolada e durável, mais conhecida pela sigla ACID:

- Atomicidade: todas as operações definidas na transação devem ser concluídas com sucesso. Se algo falhar, a transação inteira falha;
- Consistência: todas as regras do banco de dados devem ser respeitadas, ou seja, estrutura de tabelas, chaves estrangeiras, campos restritos. etc.;
- Isolamento: uma transação não pode interferir em outra transação. Cada transação deve ser comportar de forma totalmetne isolada das demais transações do banco de dados;
- Durabilidade: uma vez que a transação foi finalizada, os dados ali modificados devem ser armazenados de forma permanente, ou seja, só será possível alterá-los caso uma nova transação seja executada posteriormente.

O uso de transações, irá fornecer dados mais confiáveis, diminuindo as chances de erro. O sequelize não usa, por padrão transações, é necessário configurá-lo para utilizar as transações.

Existem dois tipos de transação dentro do sequelize: Unmanaged transactions e Managed transactions.

# Unmanaged transactions

Para esse tipo de transaction é preciso indicar manualmente a circunstância em que uma transação deve ser finalizada ou revertida.

Exemplo de código:
Nota para funcionar a configuração do sequelize deve estar com extensão JS "config.js", para que tenha acesso as informações contidas dentro do arquivo.
```
// const express = require('express');
// const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// const { Addresses, Employees } = require('./models');
const config = require('./config/config');

// const app = express();
// app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);

// ...

app.post('/employees', async (req, res) => {
  // Primeiro iniciamos a transação
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
// ...
```

# Managed Transactions

O próprio sequelize controla quando deve finalizar ou reverter uma transação:
```
// ...
app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });

      return res.status(201).json({ message: 'Cadastrado com sucesso' });
    });

    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
```


[Exercicio do dia 24.2](https://github.com/davidrogger/exercise-sequelize-associations);