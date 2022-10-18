from Person import Person

def test_person_creation():
    jonas = Person('Jonas', 1000)
    assert jonas.name == 'Jonas'
    assert jonas.wallet == 1000
    assert jonas.has_fridge == False