from requests import HTTPError, ReadTimeout
import requests
import time


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
