# docker run -d -p 4444:4444 -p 7900:7900 --shm-size 2g
# --name firefox selenium/standalone-firefox:4.3.0-20220706

from selenium import webdriver

options = webdriver.FirefoxOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-erros=yes")
options.add_argument("--start-maximized")

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)
