from linked_list import LinkedList


def test_create_a_linked_list():
    new_linked_list = LinkedList()
    repr_expect = "LinkedList:(len=0, value=Node(value=HEAD, next=None))"

    assert str(new_linked_list) == repr_expect


def test_insert_first_element_linked_list():
    linked_list = LinkedList()
    repr_expect = (
        "LinkedList:"
        "(len=3"
        ", value=Node(value=new_Header"
        ", next=Node(value=Teste"
        ", next=Node(value=Jonas, next=None))))"
    )

    linked_list.insert_first("Jonas")
    linked_list.insert_first("Teste")
    linked_list.insert_first("new_Header")

    assert str(linked_list) == repr_expect
