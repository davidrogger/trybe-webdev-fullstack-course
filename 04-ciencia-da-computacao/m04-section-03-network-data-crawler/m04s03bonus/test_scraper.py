from scraper import fetch


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
