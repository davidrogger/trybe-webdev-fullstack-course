import csv


def get_orders(path_file):
    with open(path_file, "r") as file:
        file_data = csv.reader(file)
        orders = [*file_data]

    return orders


def analyze_log(path_to_file):
    orders = get_orders(path_to_file)
