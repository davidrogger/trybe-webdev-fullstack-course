USE hr;
-- 1. Escreva uma query que exiba o maior salário da tabela.

SELECT MAX(salary) AS 'Biggest Salary' FROM employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(salary) - MIN(salary) AS 'Difference between biggest and smaller salary' FROM employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.

SELECT job_id, AVG(salary) AS 'Average_Salary' FROM employees
GROUP BY job_id
ORDER BY Average_Salary DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT SUM(salary) AS 'Total Employee Salaries' FROM employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).

SELECT job_id, COUNT(1) AS 'quantity' FROM employees
GROUP BY job_id
HAVING job_id LIKE 'it_prog';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).

SELECT job_id, SUM(salary) AS Salary_Need FROM employees
GROUP BY job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).

SELECT job_id, SUM(salary) AS Salary_Need FROM employees
GROUP BY job_id
HAVING job_id LIKE 'it_prog';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).

SELECT job_id, AVG(salary) AS Average_Salary FROM employees
GROUP BY job_id
HAVING job_id != 'it_prog';

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

SELECT department_id, COUNT(1) AS quantity, AVG(salary) FROM employees
GROUP BY department_id
HAVING quantity > 10;

-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

UPDATE employees
	SET phone_number = REPLACE(phone_number, 515, 777)
    WHERE employee_id IN (
		SELECT employee_id FROM (
			SELECT employee_id FROM employees WHERE phone_number LIKE '515%'
        ) AS substring
    );

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) > 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).

SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT employee_id, first_name, DAY(hire_date) FROM employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).

SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT UCASE(first_name) FROM employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT last_name, hire_date FROM employees
WHERE DATE(hire_date) LIKE '1987-07%';

-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

SELECT
  first_name,
  last_name,
  DATEDIFF(CURRENT_DATE(), DATE(hire_date)) AS 'Days since hired'
FROM employees;
