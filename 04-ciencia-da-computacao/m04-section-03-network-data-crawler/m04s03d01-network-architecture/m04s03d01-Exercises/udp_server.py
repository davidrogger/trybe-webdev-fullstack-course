import socketserver


class MyUDPHandler(socketserver.DatagramRequestHandler):
    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    HOST, PORT = "localhost", 8084

    with socketserver.UDPServer((HOST, PORT), MyUDPHandler) as server:
        server.serve_forever()
