from linked_list import LinkedList
import pytest


@pytest.fixture
def linked_list():
    linked_list = LinkedList()

    linked_list.insert_first("Header")
    linked_list.insert_last("Teste1")
    linked_list.insert_last("Teste2")
    linked_list.insert_last("new_Last")

    return linked_list


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


def test_insert_last_element_linked_list(linked_list: LinkedList):
    expect_first_element = "Header"
    expect_last_element = "new_Last"

    assert linked_list.get_head() == expect_first_element
    assert linked_list.get_tail() == expect_last_element


def test_get_at_position_linked_list(linked_list: LinkedList):
    assert linked_list.get_element_at(0) == "Header"
    assert linked_list.get_element_at(1) == "Teste1"
    assert linked_list.get_element_at(2) == "Teste2"
    assert linked_list.get_element_at(3) == "new_Last"

    with pytest.raises(IndexError):
        linked_list.get_element_at(4)
    with pytest.raises(IndexError):
        linked_list.get_element_at(-1)


def test_insert_at_position_linked_list(linked_list: LinkedList):
    expected_inserted_element = "Insert Test"
    expected_old_element = "Teste2"
    linked_list.insert_at(2, expected_inserted_element)

    assert linked_list.get_element_at(2) == expected_inserted_element
    assert linked_list.get_element_at(3) == expected_old_element


def test_remove_first(linked_list: LinkedList):
    first_expect = "Teste1"
    second_expect = "Teste2"

    linked_list.remove_first()

    assert linked_list.get_head() == first_expect
    assert len(linked_list) == 3

    linked_list.remove_first()

    assert linked_list.get_head() == second_expect
    assert len(linked_list) == 2


def test_remove_last(linked_list: LinkedList):
    first_expect = "Teste2"
    second_expect = "Teste1"

    linked_list.remove_last()

    assert linked_list.get_tail() == first_expect
    assert len(linked_list) == 3

    linked_list.remove_last()

    assert linked_list.get_tail() == second_expect
    assert len(linked_list) == 2
