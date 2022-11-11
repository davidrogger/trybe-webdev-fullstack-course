from time import perf_counter


class Cronometro:
    def __init__(self, name="Seu algoritmo"):
        self.name = name

    def __enter__(self):
        self.start = perf_counter()

    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} demorou {elapsed} segundos")


if __name__ == "__main__":
    "How to use"

    def sum(n1, n2):
        return n1 + n2

    with Cronometro("sum"):
        sum(2, 2)
