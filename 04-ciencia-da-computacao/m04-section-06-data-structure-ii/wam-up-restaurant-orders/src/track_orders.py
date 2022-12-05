from collections import Counter


class TrackOrders:
    def __init__(self) -> None:
        self.orders = dict()
        self.menu = set()
        self.open_days = set()

    def __len__(self):
        return len(self.orders)

    def add_new_order(self, costumer, order, day):
        if costumer not in self.orders:
            self.orders[costumer] = dict()
            self.orders[costumer]["orders"] = list()
            self.orders[costumer]["days"] = set()

        self.menu.add(order)
        self.open_days.add(day)

        self.orders[costumer]["orders"].append(order)
        self.orders[costumer]["days"].add(day)

    def get_most_ordered_dish_per_costumer(self, costumer):
        orders = self.orders[costumer]["orders"]
        counted_dishes = Counter(orders)
        dish_name, _ = counted_dishes.most_common(1)[0]

        return dish_name

    def get_dish_quantity_per_costumer(self, costumer, order):
        pass

    def get_never_ordered_per_costumer(self, costumer):
        ordered_dishes = set(self.orders[costumer]["orders"])

        return self.menu.difference(ordered_dishes)

    def get_days_never_visited_per_costumer(self, costumer):
        visited_days = self.orders[costumer]["days"]

        return self.open_days.difference(visited_days)

    def get_busiest_day(self):
        pass

    def get_least_busy_day(self):
        pass
