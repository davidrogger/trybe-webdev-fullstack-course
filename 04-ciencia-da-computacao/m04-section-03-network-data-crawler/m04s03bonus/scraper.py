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
