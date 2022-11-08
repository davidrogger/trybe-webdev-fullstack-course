from requests import HTTPError, ReadTimeout
import requests
import time
from parsel import Selector


def fetch(url):
    headers = {"user-agent": "Fake user-agent"}
    try:
        response = requests.get(url, headers=headers, timeout=3)
        response.raise_for_status()
        time.sleep(1)
    except (HTTPError, ReadTimeout):
        return None
    else:
        return response.text


def scrape_novidades(html):
    selector = Selector(html)
    news_links = selector.css(".entry-title a::attr(href)").getall()
    return news_links


def scrape_next_page_link(html):
    selector = Selector(html)
    next_page_link = selector.css(".next::attr(href)").get()
    return next_page_link
