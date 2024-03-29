from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __call__(self):
        self_copy = LinkedList()
        element_position = 0
        while len(self_copy) < len(self):
            element = self.get_element_at(element_position)
            self_copy.insert_at(element, element_position)
            element_position += 1
        return self_copy

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        last_position = self.__length - 1
        current_value = self.__get_node_at(last_position)

        if current_value is None:
            return self.insert_first(value)

        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        current_value = self.__get_node_at(position - 1)

        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()
        last_position = self.__length - 1
        previous_to_be_removed = self.__get_node_at(last_position - 1)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)
            return value_returned

    def index_of(self, value):
        current_index = 0
        value_found = self.head_value
        last_position = self.__length - 1
        while current_index <= last_position:
            if value_found.value == value:
                return current_index
            else:
                current_index += 1
                value_found = value_found.next
        return -1

    def __get_node_at(self, position):
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def clean_duplicate(self):
        position = self.__length

        while position > 0:
            current_node = self.remove_first()
            if self.index_of(current_node.value) == -1:
                self.insert_last(current_node.value)
            position -= 1

        return self

    def is_empty(self):
        return not self.__length

    def clear(self):
        while not self.is_empty():
            self.remove_first()


if __name__ == "__main__":
    linked_list = LinkedList()

    linked_list.insert_last(1)
    linked_list.insert_last(2)
    linked_list.insert_last(3)
    linked_list.insert_last(10)
    linked_list.insert_last(10)
    linked_list.insert_last(15)

    print(linked_list)

    linked_list.clean_duplicate()

    print(linked_list)
