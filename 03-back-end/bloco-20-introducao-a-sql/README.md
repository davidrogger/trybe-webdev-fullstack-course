# Instalando MySQL Server

Ferramentas que serão usadas: **MySQL Server** e **MySQL Workbench**

instalação guiada para distribuição linux ubuntu:
```
sudo apt update

sudo apt install mysql-server

mysql --version
```

Para acessar o mysql é necessário definir um acesso seguro, com o comando:
```
sudo mysql_secure_installation
```

O terminal apresentará uma sequencia de perguntas:

1. Pergunta se você deseja iniciar a configuração de seguranção.

2. Definir o Nível de complexibilidade da senha, 0 para mais fraca e 2 para mais forte.

3. Seguindo do campo onde será digitado a senha.

4. Validação da senha digitada anteriormente.

5. Remover usuário anonimos existentes

6. Desabilitar o login de usuário root remotamente.

7. Resetar o banco de teste padrão.

8. Reiniciar privilegio das tabelas.

Caso ocorra um erro para criar a validação de senha com o comando secure_installation, pode-se usar o seguinte comando

acessando o mysql sem senha:
```
sudo mysql
```

Dentro do terminal do mysql, uso do seguinte comando:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SetRootPasswordHere';
```

Comando para criar um novo usuário:

CREATE USER 'trybe'@'localhost' IDENTIFIED BY 'trybe12345';

[Link interessante para lidar com password policy](https://stackoverflow.com/questions/43094726/your-password-does-not-satisfy-the-current-policy-requirements)

SHOW VARIABLES LIKE 'validate_password%';
The output should be something like that :

+--------------------------------------+-------+
| Variable_name                        | Value |
+--------------------------------------+-------+
| validate_password.check_user_name    | ON    |
| validate_password.dictionary_file    |       |
| validate_password.length             | 6     |
| validate_password.mixed_case_count   | 1     |
| validate_password.number_count       | 1     |
| validate_password.policy             | LOW   |
| validate_password.special_char_count | 1     |
+--------------------------------------+-------+
then you can set the password policy level lower, for example:

SET GLOBAL validate_password.length = 6;
SET GLOBAL validate_password.number_count = 0;

Comando para verificar se o serviço do mysql está rodando:
```
sudo systemctl status mysql
```

Deve retornar uma mensagem de active

Caso o serviço esteja parado use o comando:
```
systemctl start mysql
```

Comando para parar:
```
systemctl stop mysql
```

# Configurando Inicialização MYSQL

Por padrão após a instalação o servidor vai estar configurado para iniciar junto ao sistema.

Para desativar essa inicialização automática:
```
sudo systemctl disable mysql
```

# Desinstalando o MySQL server

Removendo todos os pacotes:
```
sudo apt-get remove mysql-server mysql-client mysql-common
```

Removendo arquivos de dependências:
```
sudo apt-get autoremove
sudo apt-get autoclean
```

Removendo os arquivos do mysql:
```
sudo rm -rf /var/lib/mysql
sudo rm -rf /etc/mysql
```

Para confirmar a remoção dele: `mysql --version`

# Instalando uma interface gráfica (MySQL WorkBench)

[Link para download](https://dev.mysql.com/downloads/workbench/)

Não é necessário criar uma conta. Procure pelo link "No thanks, just start my download" e faça o download.

Onde foi feito o download, rode o comando a seguir e aceite a instalação:
```
sudo apt install ./nome-do-arquivo
#ex no Ubuntu 20.04: sudo apt install ./mysql-workbench-community_8.0.21-1ubuntu20.04_amd64.deb
```

Recursos Adicionais:

1. [Resetar Senha de Usuário](https://stackoverflow.com/questions/42153059/mysqld-safe-directory-var-run-mysqld-for-unix-socket-file-dont-exists)
2. 