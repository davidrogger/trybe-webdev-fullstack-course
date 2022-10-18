from Eletrodomestics import Microwave, Stove, Mixer


def test__creating_eletrodomestics():
    white_microwave = Microwave('white', 500, 227, 1000)
    black_stove = Stove('black', 10, 227, 1500)
    orange_mixer = Mixer('orange', 500, 227, 500)

    'Should have the right color'
    assert white_microwave.color == 'white'
    assert black_stove.color == 'black'
    assert orange_mixer.color == 'orange'

    'Should have the right price'
    assert white_microwave.price == 1000
    assert black_stove.price == 1500
    assert orange_mixer.price == 500
