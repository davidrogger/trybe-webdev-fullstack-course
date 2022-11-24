from linked_list import LinkedList


def test_create_a_linked_list():
    new_linked_list = LinkedList()
    repr_expect = "LinkedList:(len=0, value=Node(value=HEAD, next=None))"

    assert str(new_linked_list) == repr_expect


def test_insert_first_element_linked_list():
    linked_list = LinkedList()
    expect_first_element = "new_Header"
    expect_last_element = "Jonas"

    linked_list.insert_first("Jonas")
    linked_list.insert_first("Teste")
    linked_list.insert_first("new_Header")

    assert linked_list.get_head() == expect_first_element
    assert linked_list.get_tail() == expect_last_element


def test_insert_last_element_linked_list():
    linked_list = LinkedList()
    expect_first_element = "Header"
    expect_last_element = "new_Last"

    linked_list.insert_first("Header")
    linked_list.insert_last("Teste1")
    linked_list.insert_last("Teste2")
    linked_list.insert_last("new_Last")

    assert linked_list.get_head() == expect_first_element
    assert linked_list.get_tail() == expect_last_element


def test_get_at_position_linked_list():
    linked_list = LinkedList()

    linked_list.insert_first("Header")
    linked_list.insert_last("Teste1")
    linked_list.insert_last("Teste2")
    linked_list.insert_last("new_Last")

    assert linked_list.get_element_at(0) == "Header"
    assert linked_list.get_element_at(1) == "Teste1"
    assert linked_list.get_element_at(2) == "Teste2"
    assert linked_list.get_element_at(3) == "new_Last"
