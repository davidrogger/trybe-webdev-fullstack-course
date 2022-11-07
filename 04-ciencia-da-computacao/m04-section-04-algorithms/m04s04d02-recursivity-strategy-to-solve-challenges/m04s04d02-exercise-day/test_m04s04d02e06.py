from m04s04d02e06 import reverse_list


def test_reverse_list_names():
    names = ["jonas", "mary", "carol", "onizuk"]
    expect = ["onizuk", "carol", "mary", "jonas"]
    reverse = reverse_list(names)
    assert reverse == expect
