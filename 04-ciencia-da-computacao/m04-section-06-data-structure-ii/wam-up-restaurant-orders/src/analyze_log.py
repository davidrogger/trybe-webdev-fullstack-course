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


def get_most_ordered_by(name, source):
    first_item = 0
    client_orders = source[name]["orders"]

    products_order = [*client_orders.keys()]
    most_ordered = products_order[first_item]

    for index in range(1, len(products_order)):
        if client_orders[most_ordered] < client_orders[products_order[index]]:
            most_ordered = client_orders[products_order[index]]

    return most_ordered


def get_qt_product_order_by(name, product, source):
    product_quantity = 0
    client_orders = source[name]["orders"]
    if product in client_orders:
        product_quantity = client_orders[product]
    return product_quantity


def get_never_order_by(name, source):
    client_orders = source[name]["orders"]
    client_set_orders = set(client_orders)
    menu = {"hamburguer", "pizza", "misto-quente", "coxinha"}

    return menu.difference(client_set_orders)


def get_open_days():
    week_days = ["segunda", "terça"]
    open_days = set(["sabado"])

    for day in week_days:
        open_days.add(f"{day}-feira")

    return open_days


def get_days_off(name, source):
    open_days = get_open_days()
    client_present_days = source[name]["days"]

    return open_days.difference(client_present_days)


def generate_log_file(log, file_path):
    with open(file_path, "w") as file:
        file.write(log)


def analyze_log(path_to_file):
    orders = get_orders(path_to_file)

    clients_data = get_clients_data(orders)

    maria_most_ordered = get_most_ordered_by("maria", clients_data)

    arnaldo_order_hamburguer = get_qt_product_order_by(
        "arnaldo", "hamburguer", clients_data
    )

    joao_never_order = get_never_order_by("joao", clients_data)

    joao_never_come = get_days_off("joao", clients_data)

    log_data = (
        f"{maria_most_ordered}\n"
        f"{arnaldo_order_hamburguer}\n"
        f"{joao_never_order}\n"
        f"{joao_never_come}"
    )

    generate_log_file(log_data, "data/mkt_campaign.txt")
