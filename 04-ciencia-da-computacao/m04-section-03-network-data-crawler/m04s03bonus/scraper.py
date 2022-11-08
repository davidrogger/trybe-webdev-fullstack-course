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


def scrape_noticia(news_html):
    selector = Selector(news_html)

    news_info = {}

    news_info["url"] = selector.css(
        ".pk-share-buttons-wrap::attr(data-share-url)"
    ).get()
    news_info["title"] = selector.css(".entry-title::text").get()
    news_info["timestamp"] = selector.css(".meta-date::text").re_first(
        r"\d{2}/\d{2}/\d{4}"
    )
    news_info["writer"] = selector.css(".author a::text").get()
    news_info["comments_count"] = int(
        selector.css(".post-comments .title-block::text").re_first(r"\d")
        or "0"
    )
    news_info["summary"] = selector.css(".entry-content p::text").get()
    news_info["tags"] = selector.css(".post-tags a::text").getall()
    news_info["category"] = selector.css(".category-style .label::text").get()

    return news_info
