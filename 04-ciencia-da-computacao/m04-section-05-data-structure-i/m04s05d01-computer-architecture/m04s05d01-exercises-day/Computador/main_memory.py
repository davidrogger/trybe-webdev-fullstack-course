class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            value = self.loaded_memory[index]
            if isinstance(value, int):
                return value

        except IndexError:
            pass

        return 0

    def clean(self):
        self.loaded_memory = []
