from m04s01d03e02 import phone_convertion


def test_phone_convertion_empty_input():
    assert phone_convertion('') == ''


def test_phone_convertion_cataloged_input():
    number1 = phone_convertion('1-HOME-SWEET-HOME')
    number2 = phone_convertion('MY-MISERABLE-JOB')
    assert number1 == '1-4663-79338-4663'
    assert number2 == '69-647372253-562'


def test_phone_convertion_uncataloged_inputs():
    number1 = phone_convertion('123456')
    number2 = phone_convertion('-/*+,')
    assert number1 == '123456'
    assert number2 == '-/*+,'


def test_phone_convertion_bigger_than_30_inputs():
    number1 = phone_convertion('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')
    assert number1 == '843 78425 27696 369 58677 6837 843 5299 364'
