from linked_list import LinkedList


def test_create_a_linked_list():
    new_linked_list = LinkedList()
    repr_expect = "LinkedList:(len=0, value=Node(value=HEAD, next=None))"

    assert str(new_linked_list) == repr_expect
