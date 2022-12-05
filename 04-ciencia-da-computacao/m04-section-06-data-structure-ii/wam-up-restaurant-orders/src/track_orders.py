class TrackOrders:
    def __init__(self) -> None:
        self.costumers = dict()
        self.menu = set()
        self.open_days = dict()
        self.busiest_day = None
        self.less_busy_day = None

    def __len__(self):
        return len(self.costumers)

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
        if costumer not in self.costumers:
            self.costumers[costumer] = dict()
            self.costumers[costumer]["orders"] = dict()
            self.costumers[costumer]["days"] = set()
            self.costumers[costumer]["most_ordered"] = None

        self.menu.add(order)
        self.add_movement_day(day)
        self.update_costumer_orders(costumer, order)

        self.costumers[costumer]["days"].add(day)

    def update_costumer_orders(self, costumer, order):
        orders = self.costumers[costumer]["orders"]

        if order not in orders:
            orders[order] = 1
        else:
            orders[order] += 1

        self.update_most_ordered_dish(costumer, order)

    def update_most_ordered_dish(self, costumer, order):
        costumer_data = self.costumers[costumer]
        if not self.costumers[costumer]["most_ordered"]:
            costumer_data["most_ordered"] = order
        else:
            order_qt = costumer_data["orders"][order]
            most_ordered_qt = costumer_data["orders"][
                costumer_data["most_ordered"]
            ]

            if order_qt > most_ordered_qt:
                costumer_data["most_ordered"] = order

    def get_most_ordered_dish_per_costumer(self, costumer):
        return self.costumers[costumer]["most_ordered"]

    def get_order_frequency_per_costumer(self, costumer, order):
        return self.costumers[costumer]["orders"][order]

    def get_never_ordered_per_costumer(self, costumer):
        ordered_dishes = set(self.costumers[costumer]["orders"])

        return self.menu.difference(ordered_dishes)

    def get_days_never_visited_per_costumer(self, costumer):
        visited_days = self.costumers[costumer]["days"]
        open_days = set(self.open_days)

        return open_days.difference(visited_days)

    def get_busiest_day(self):
        return self.busiest_day

    def get_least_busy_day(self):
        return self.less_busy_day
