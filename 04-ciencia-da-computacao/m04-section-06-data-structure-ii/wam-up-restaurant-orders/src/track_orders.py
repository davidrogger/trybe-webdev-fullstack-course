class TrackOrders:
    def __init__(self) -> None:
        self.orders = dict()

    def __len__(self):
        return len(self.orders)

    def add_new_order(self, costumer, order, day):
        if costumer not in self.orders:
            self.orders[costumer] = dict()
            self.orders[costumer]["orders"] = list()
            self.orders[costumer]["days"] = set()

        self.orders[costumer]["orders"].append(order)
        self.orders[costumer]["days"].add(day)

    def get_most_ordered_dish_per_costumer(self, costumer):
        pass

    def get_dish_quantity_per_costumer(self, costumer, order):
        pass

    def get_never_ordered_per_costumer(self, costumer):
        pass

    def get_busiest_day(self):
        pass

    def get_least_busy_day(self):
        pass
