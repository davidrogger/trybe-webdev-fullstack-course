def create_file():
    file = open("08-arquivo.dat", mode="wb")
    file.write(b"C\xc3\xa1ssio 30")
    # o prefixo b em uma string indica que seu valor está codificado em bytes
    file.close()


def read_file():
    file = open("08-arquivo.dat", mode="rb")
    content = file.read()
    print(content)
    file.close()


create_file()
read_file()
