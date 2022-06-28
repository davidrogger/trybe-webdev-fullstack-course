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

