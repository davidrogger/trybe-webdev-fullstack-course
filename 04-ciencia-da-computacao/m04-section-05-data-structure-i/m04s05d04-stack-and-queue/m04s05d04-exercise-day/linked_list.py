from node import Node


class LinkedList:
    def __init__(self):
        self.initial_format()

    def __len__(self):
        return self.__length

    def __repr__(self):
        return f"LinkedList:(len={self.__length}, value={self.__head})"

    def initial_format(self):
        self.__head = Node("HEAD")
        self.__tail = self.__head
        self.__head.next = None
        self.__length = 0

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        old_header = self.__head
        self.__head = Node(value)

        if not self.is_empty():
            self.__head.next = old_header

        if self.is_empty():
            self.__tail = self.__head

        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            self.insert_first(value)
        else:
            self.__tail.next = Node(value)
            self.__tail = self.__tail.next

            self.__length += 1

    def get_head(self):
        if self.is_empty():
            return None
        return self.__head.value

    def get_tail(self):
        if self.is_empty():
            return None
        return self.__tail.value

    def get_node_at(self, position):
        last_position = self.__length - 1
        if position > last_position or position < 0:
            raise IndexError
        elif position == last_position:
            return self.__tail
        elif position == 0:
            return self.__head

        current_element = self.__head
        while position > 0:
            current_element = current_element.next
            position -= 1
        return current_element

    def get_element_at(self, position):
        element_found = self.get_node_at(position)
        return element_found.value

    def insert_at(self, position, value):
        if position >= self.__length:
            self.insert_last(value)
        elif position <= 0:
            self.insert_first(value)

        previous_element = self.get_node_at(position - 1)
        old_element = previous_element.next
        previous_element.next = Node(value)
        previous_element.next.next = old_element
        self.__length += 1

    def remove_first(self):
        if self.is_empty():
            return None
        else:
            element_removed = self.__head
            self.__head = element_removed.next
            self.__length -= 1

            if len(self) == 0:
                self.initial_format()

            return element_removed.value

    def remove_last(self):
        if self.is_empty():
            return None
        elif len(self) == 1:
            return self.remove_first()
        else:
            last_position = self.__length - 1
            element_removed = self.__tail
            previous_element_tail = self.get_node_at(last_position - 1)
            previous_element_tail.next = None
            self.__tail = previous_element_tail
            self.__length -= 1

            return element_removed.value

    def remove_at(self, position):
        last_position = self.__length - 1
        if self.is_empty():
            return None
        elif position == 0:
            self.remove_first
        elif position == last_position:
            self.remove_last
        else:
            previous_to_be_removed = self.get_node_at(position - 1)
            element_to_be_removed = previous_to_be_removed.next
            previous_to_be_removed.next = element_to_be_removed.next
            self.__length -= 1

            return element_to_be_removed

    def clear(self):
        self.initial_format()
