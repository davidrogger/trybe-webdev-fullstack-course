def unpack_example():
    a, b = "cd"
    print(a, b)

    head, *tail = (1, 2, 3)
    print(head)
    print(tail)


unpack_example()
