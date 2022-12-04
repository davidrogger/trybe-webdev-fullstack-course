import csv


def get_orders(path_file):
    with open(path_file, "r") as file:
        file_data = csv.reader(file)
        orders = [*file_data]

    return orders


def get_clients_data(orders_data):
    clients_data = dict()
    for name, order, day in orders_data:
        if name not in clients_data:
            clients_data[name] = {"orders": {}, "days": set()}

        if order not in clients_data[name]["orders"]:
            clients_data[name]["orders"][order] = 1
        else:
            clients_data[name]["orders"][order] += 1

        clients_data[name]["days"].add(day)

    return clients_data


def get_qt_product_order_by(name, product, source):
    pass


def analyze_log(path_to_file):
    orders = get_orders(path_to_file)

    clients_data = get_clients_data(orders)
