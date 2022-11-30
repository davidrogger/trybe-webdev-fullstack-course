from m04s06d02e01 import bluff_game


def test_bluff_game():
    players = {
        "Clara": [0, 1, 5, 9, 10],
        "Marco": [0, 2, 8, 9, 10],
    }
    expect_winner = "Marco"

    assert bluff_game(players) == expect_winner
