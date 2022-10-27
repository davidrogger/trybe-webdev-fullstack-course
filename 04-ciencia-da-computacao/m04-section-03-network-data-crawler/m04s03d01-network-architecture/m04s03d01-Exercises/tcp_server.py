import socketserver


class MyTCPHandler(socketserver.StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Hello, World!\n")

        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("ascii").strip())


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085

    with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
        server.serve_forever()
