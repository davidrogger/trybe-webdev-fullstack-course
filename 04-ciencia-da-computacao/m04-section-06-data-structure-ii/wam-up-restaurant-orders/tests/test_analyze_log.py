from src.analyze_log import analyze_log


def test_analyze_log_file_creation():
    path_data_file = "data/orders_1.csv"
    path_file_create = "data/mkt_campaign.txt"
    expect_lines = [
        "hamburguer",
        "2",
        "{'pizza', 'coxinha', 'misto-quente'}",
        "{'sabado, 'segunda-feira'}",
    ]

    analyze_log(path_data_file)

    with open(path_file_create) as file:
        file_lines = file.read().split("\n")

    for index in range(len(file_lines)):
        expect = expect_lines[index]
        line = file_lines[index]

        assert line == expect
