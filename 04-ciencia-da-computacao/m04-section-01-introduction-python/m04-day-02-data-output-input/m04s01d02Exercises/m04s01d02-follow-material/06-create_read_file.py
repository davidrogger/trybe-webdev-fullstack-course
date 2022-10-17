def create_file():
    file = open("06-arquivo.txt", mode="w")
    file.write("Created file")
    file.close()


def read_file():
    file = open("06-arquivo.txt", mode="r")
    content = file.read()
    print(content)
    file.close()


create_file()
read_file()
