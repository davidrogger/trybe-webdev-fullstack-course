from LogInScreen import LogInScreen
from Log import Log


def test_creating_log_in_screen(capsys):
    log_screen = LogInScreen()
    log = Log([log_screen])
    log.error("Test: Error message")
    captured = capsys.readouterr()
    assert "Test: Error message" in captured.out
