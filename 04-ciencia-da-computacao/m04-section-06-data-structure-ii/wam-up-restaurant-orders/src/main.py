import csv
from inventory_control import InventoryControl
from track_orders import TrackOrders


def print_info(tracker: TrackOrders, control: InventoryControl):
    print(tracker.get_most_ordered_dish_per_costumer("maria"))
    print(tracker.get_order_frequency_per_costumer("arnaldo", "hamburguer"))
    print(tracker.get_days_never_visited_per_costumer("joao"))
    print(control.get_quantities_to_buy())


def main():
    path = "data/orders_1.csv"

    tracker = TrackOrders()
    control = InventoryControl()

    with open(path) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for costumer, order, day in csv_reader:
            tracker.add_new_order(costumer, order, day)

    print_info(tracker, control)


if __name__ == "__main__":
    main()


# source file:
# https://github.com/lmuffato/Project-restaurant-orders-Trybe
# /blob/lmuffato-restaurant-orders/src/main.py
