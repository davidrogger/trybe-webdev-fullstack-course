from m04s04d02e05 import is_number_prime


def test_is_number_prime():
    primes = [2, 3, 5, 7, 97]
    for prime in primes:
        is_prime = is_number_prime(prime)
        assert is_prime is True


def test_is_not_number_prime():
    not_primes = [4, 6, 8, 9, 95]
    for not_prime in not_primes:
        is_prime = is_number_prime(not_prime)
        assert is_prime is False
