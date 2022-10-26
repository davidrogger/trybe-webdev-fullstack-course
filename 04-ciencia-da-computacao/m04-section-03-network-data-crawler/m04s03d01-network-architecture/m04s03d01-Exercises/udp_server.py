import socketserver


class MyUDPHandler(socketserver.StreamRequestHandler):
    def handler(self):
        self.wfile.write(b"Hello, World!\n")

        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("ascii").strip())


if __name__ == "__main__":
    HOST, PORT = "localhost", 8084

    with socketserver.UDPServer((HOST, PORT), MyUDPHandler) as server:
        server.serve_forever()
