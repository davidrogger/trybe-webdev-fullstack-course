from scraper import fetch, scrape_novidades


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
