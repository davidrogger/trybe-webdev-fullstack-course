# Selenium

É um conjunto de ferramentas para automação de navegadores da web, que permite controlar remotamente instâncias de navegadores e emular a interação de um usuário com o navegador.

Devido ao WebDriver que se encontra no núcleo do Selenium que ele suporta a automação dos principais navegadores do mercado definindo uma interface para controlar o comportamento dos navegadores web.

Cada navegador possui uma implementação específica do WebDriver, chamada de driver, que é o componente responsável por delegar e manipular a comunicação entre o Selenium e o navegador.

Para o uso do Selenium é preciso instalar as bibliotecas de acordo com a linguagem que será utilizada, além do navegador que será usado juntamente com o driver correspondente.

Em casos de single Page applications(react), só após uma requisição para a página é que o conteúdo será montado e as informações estarão disponíveis para serem consultadas. Simulando um acesso de uma pessoa real ao site, o Selenium pode evitar que o resultado da consulta volte vazio nesses casos.

O selenium cria uma instância de uma pessoa acessando o site pelo nevador normalmente, e somente após o site terminar de carregar é que o scrape é feito.

