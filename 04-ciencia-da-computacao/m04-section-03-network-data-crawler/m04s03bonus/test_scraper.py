from scraper import (
    fetch,
    scrape_novidades,
    scrape_next_page_link,
    scrape_noticia,
)


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


def test_scrape_noticias():
    url = "https://blog.betrybe.com/noticias/"
    endpoint = (
        "bill-gates-e-cetico-sobre-criptomoedas-e-nfts-entenda-o-motivo/"
    )
    url2 = "https://blog.betrybe.com/carreira/passos-fundamentais-para-aprender-a-programar/"
    html = fetch(url + endpoint)
    # html = fetch(url2)
    data = scrape_noticia(html)
    assert data == ""
