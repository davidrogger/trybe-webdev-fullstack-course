# Exercício 1: Com o Selenium, faça uma requisição para
# o endpoint “https://quotes.toscrape.com/“ e imprima a
# primeira citação que aparece na página.

from docker_selenium import firefox
from selenium.webdriver.common.by import By

firefox.get("https://quotes.toscrape.com/")

print(firefox.find_element(By.CLASS_NAME, "text").get_attribute("innerHTML"))
