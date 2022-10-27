import pathlib
import ssl
import http.server

ROOT_PATH = pathlib.Path(__file__).parent.resolve()
CERT_PATH = f"{ROOT_PATH}/cert.pem"
KEY_PATH = f"{ROOT_PATH}/key.pem"

PORT = 8000
ADDRESS = "localhost"

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(CERT_PATH, KEY_PATH)

Handler = http.server.SimpleHTTPRequestHandler
httpd = http.server.HTTPServer((ADDRESS, PORT), Handler)

httpd.socket = context.wrap_socket(
    httpd.socket,
    server_side=True,
)

print(f"serving {ADDRESS} at port {PORT}")
httpd.serve_forever()
