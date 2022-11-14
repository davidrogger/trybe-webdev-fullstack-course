from scraper import (
    fetch,
    scrape_novidades,
    scrape_next_page_link,
    scrape_noticia,
    get_last_n_news_links,
    get_tech_news,
)
import pytest


@pytest.fixture
def fake_page():
    return """
        <a class="category-style" href="#">
            <span class="label">Notícias</span>
        </a>
        <h1 class="entry-title">Title Test</h1>
        <span class="author">
            <a class="url fn n" href="#">Allan Camilo</a>
        </span>
        <li class="meta-date">15/06/2022</li>
        <div class="entry-content">
            <p>Paragrafo Teste</p>
        </div>
        <div class="pk-share-buttons-wrap" data-share-url="https://teste.com">
        """


def test_fetch_timeout():
    expect = None
    url = "http://httpbin.org/delay/3"
    response = fetch(url)
    assert response == expect


def test_fetch_status_code():
    expect = None
    url = "http://httpbin.org/status/404"
    response = fetch(url)
    assert response == expect


def test_fetch_header_user_agent():
    expect = '"user-agent": "Fake user-agent"'
    url = "http://httpbin.org/user-agent"
    response = fetch(url)
    assert expect in response


def test_fetch_html_response():
    expect = "html"
    url = "https://blog.betrybe.com/"
    response = fetch(url)
    assert expect in response


def test_scrape_news_valid_url():
    url = "https://blog.betrybe.com/"
    html = fetch(url)
    links = scrape_novidades(html)
    assert len(links) == 12
    for link in links:
        assert "http" in link


def test_scrape_news_invalid_url():
    expect = []
    url = "https://davidrogger.github.io/"
    html = fetch(url)
    links = scrape_novidades(html)
    assert links == expect


def test_scrape_next_page_link_found():
    url = "https://blog.betrybe.com/"
    html = fetch(url)
    next_page_link = scrape_next_page_link(html)
    assert "http" in next_page_link


def test_scrape_next_page_link_not_found():
    url = "https://blog.betrybe.com/page/76/"
    html = fetch(url)
    next_page_link = scrape_next_page_link(html)
    assert next_page_link is None


def test_scrape_noticias(fake_page):
    expect = {
        "url": "https://teste.com",
        "title": "Title Test",
        "timestamp": "15/06/2022",
        "writer": "Allan Camilo",
        "comments_count": 0,
        "summary": "Paragrafo Teste",
        "tags": [],
        "category": "Notícias",
    }

    data = scrape_noticia(fake_page)
    assert data == expect


def test_get_last_n_news_links():
    news_quantity = 16
    expect = news_quantity
    news_info = get_last_n_news_links(news_quantity)

    assert len(news_info) == expect


def test_get_tech_news():
    news_infos = get_tech_news(2)

    assert news_infos == ""
