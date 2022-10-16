def created_file():
    file = open("07-arquivo.txt", mode="w")
    LINES = ["Hello\n", "pretty\n", "python's\n", "world\n"]
    file.writelines(LINES)
    file.close()


def read_file():
    file = open("07-arquivo.txt", mode="r")
    for line in file:
        print(line)
    file.close()


created_file()
read_file()
