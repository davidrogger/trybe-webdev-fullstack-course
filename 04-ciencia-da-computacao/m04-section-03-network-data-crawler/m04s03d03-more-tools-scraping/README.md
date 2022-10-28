# Selenium

É um conjunto de ferramentas para automação de navegadores da web, que permite controlar remotamente instâncias de navegadores e emular a interação de um usuário com o navegador.

Devido ao WebDriver que se encontra no núcleo do Selenium que ele suporta a automação dos principais navegadores do mercado definindo uma interface para controlar o comportamento dos navegadores web.

Cada navegador possui uma implementação específica do WebDriver, chamada de driver, que é o componente responsável por delegar e manipular a comunicação entre o Selenium e o navegador.

Para o uso do Selenium é preciso instalar as bibliotecas de acordo com a linguagem que será utilizada, além do navegador que será usado juntamente com o driver correspondente.

Em casos de single Page applications(react), só após uma requisição para a página é que o conteúdo será montado e as informações estarão disponíveis para serem consultadas. Simulando um acesso de uma pessoa real ao site, o Selenium pode evitar que o resultado da consulta volte vazio nesses casos.

O selenium cria uma instância de uma pessoa acessando o site pelo nevador normalmente, e somente após o site terminar de carregar é que o scrape é feito.

# Instalação do Selenium

Pode-se usa-lo diretamente na máquina ou por meio de um container Docker.

## Docker

Imagem usada é selenium/standalone-firefox:
```
docker pull selenium/standalone-firefox:4.3.0-20220706
```

Na seção de Using your browser (no VNC client is needed), que permite inspeção visual da atividade do container através do navegador é recomendando o seguinte comando:
```
docker run -d -p 4444:4444 -p 7900:7900 --shm-size 2g --name firefox selenium/standalone-firefox:4.3.0-20220706
```

Significado das flags:
- `-d`: serve para rodar o container em segundo plano
- `-p`: vincula uma porta do SO a outra prota dentro do container
- `--shm-size`: aumenta o limite de quantidade de memória compartilhada com o container
- `--name`: define um nome para o container
- `--platform`: diz ao docker qual a plataforma deve ser usada (processadors m1 devem ter essa flag)

Acessando o navegador FireFox na porta 7900, poderemos conferir se o container está rodando corretamente. Conforme a documentação, será necessário apenas utilizar a senha `secret` para ter acesso ao container.

## Instalação Local
```
python3 pip install selenium
```

Para usar a ferramenta é necessário também instalar o [driver](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/) do browser.

É essencial que tanto o driver quando o navegador estejam no path. **

Nas distros linux e no macos, deve-se extrair o arquivo baixado e movê-lo para o diretório '/usr/bin'. Para isso, abra no terminal o diretório onde está o arquivo recém baixado e utilize o comando:
```
sudo mv geckodriver /usr/bin
```

Em ambiente virtual o diretório bin do ambiente é adicionado ao path automaticamente, então pode-se mover o binário para lá:
```
mv geckodriver .venv/bin
```
