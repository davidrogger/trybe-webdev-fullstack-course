from collections import Counter


class TrackOrders:
    def __init__(self) -> None:
        self.orders = dict()
        self.menu = set()
        self.open_days = dict()
        self.busiest_day = None
        self.less_busy_day = None

    def __len__(self):
        return len(self.orders)

    def update_busiest_day(self, day):
        if not self.busiest_day:
            self.busiest_day = day
        else:
            busiest_day_moviment = self.open_days[self.busiest_day]
            day_moviment = self.open_days[day]

            if day_moviment > busiest_day_moviment:
                self.busiest_day = day

    def update_less_busy_day(self, day):
        if not self.less_busy_day:
            self.less_busy_day = day
        else:
            less_busy_day_moviment = self.open_days[self.less_busy_day]
            day_moviment = self.open_days[day]

            if day_moviment < less_busy_day_moviment:
                self.less_busy_day = day

    def add_movement_day(self, day):
        if day not in self.open_days:
            self.open_days[day] = 1
        else:
            self.open_days[day] += 1

        self.update_busiest_day(day)
        self.update_less_busy_day(day)

    def add_new_order(self, costumer, order, day):
        if costumer not in self.orders:
            self.orders[costumer] = dict()
            self.orders[costumer]["orders"] = list()
            self.orders[costumer]["days"] = set()

        self.menu.add(order)
        self.add_movement_day(day)

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
        open_days = set(self.open_days)

        return open_days.difference(visited_days)

    def get_busiest_day(self):
        return self.busiest_day

    def get_least_busy_day(self):
        return self.less_busy_day
