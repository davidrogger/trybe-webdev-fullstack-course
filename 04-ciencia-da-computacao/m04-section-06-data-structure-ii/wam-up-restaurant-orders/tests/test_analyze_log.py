from src.analyze_log import analyze_log


def test_analyze_log_file_creation():
    path_data_file = "data/orders_1.csv"
    path_file_create = "data/mkt_campaign.txt"

    analyze_log(path_data_file)

    with open(path_file_create) as file:
        first_line, second_line, third_line, fourth_line = file.read().split(
            "\n"
        )

    assert first_line == "hamburguer"
    assert second_line == "1"
    assert eval(third_line) == {"pizza", "coxinha", "misto-quente"}
    assert eval(fourth_line) == {"sabado", "segunda-feira"}
