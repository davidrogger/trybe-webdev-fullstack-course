from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

options = webdriver.FirefoxOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")
# options.add_argument("--headless")  # remove a visualização pelo
# navegador, realiza todo scrap em background

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)

# response = firefox.get("https://www.python.org/")

# response = firefox.get("https://www.google.com.br/")
# search_input = firefox.find_element_by_tag_name("input")
# search_input.send_keys("selenium")


def scrape(url):
    firefox.get(url)

    books = []

    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        new_item = dict()

        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        books.append(new_item)

    return books


print("Grab your coffee lets dig in!")

firefox.get("https://books.toscrape.com/")

all_books = []

url2request = "https://books.toscrape.com/"

while url2request:
    try:
        print("Page: " + url2request)
        all_books.extend(scrape(url2request))
        url2request = (
            firefox.find_element(By.CLASS_NAME, "next")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
    except NoSuchElementException:
        print("exception handled")
        break


print(all_books)
