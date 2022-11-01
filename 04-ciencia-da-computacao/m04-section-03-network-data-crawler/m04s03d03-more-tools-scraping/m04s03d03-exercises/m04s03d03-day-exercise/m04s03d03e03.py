# Exercício 3 Utilizando a ferramenta Selenium, no site
# “https://diolinux.com.br/“, faça a extração dos campos
# título, link para o post, trecho exibido de cada post da
# página inicial.

from docker_selenium import firefox
from selenium.webdriver.common.by import By

firefox.get("https://diolinux.com.br/")

posts = firefox.find_elements(By.CLASS_NAME, "post")

for post in posts:
    title = (
        post.find_element(By.CLASS_NAME, "entry-title")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("innerHTML")
    )
    link = post.find_element(By.TAG_NAME, "a").get_attribute("href")

    describe = post.find_element(By.CLASS_NAME, "entry-excerpt").get_attribute(
        "innerHTML"
    )

    print(f"Title: {title}\n" f"Link: {link}\n" f"Describe: {describe}\n")
