from src.track_orders import TrackOrders


class InventoryControl:
    INGREDIENTS = {
        "hamburguer": ["pao", "carne", "queijo"],
        "pizza": ["massa", "queijo", "molho"],
        "misto-quente": ["pao", "queijo", "presunto"],
        "bauru": ["pao", "queijo", "presunto"],
        "coxinha": ["massa", "frango"],
    }

    MINIMUM_INVENTORY = {
        "pao": 50,
        "carne": 50,
        "queijo": 100,
        "molho": 50,
        "presunto": 50,
        "massa": 50,
        "frango": 50,
    }

    CURRENT_INVENTORY = {
        "pao": 50,
        "carne": 50,
        "queijo": 100,
        "molho": 50,
        "presunto": 50,
        "massa": 50,
        "frango": 50,
    }

    def __init__(self):
        self.orders = TrackOrders()

    def update_current_inventory(self, order):
        for ingredient in self.INGREDIENTS[order]:
            if not self.CURRENT_INVENTORY[ingredient]:
                raise ValueError("Insuficient quantity")
            else:
                self.CURRENT_INVENTORY[ingredient] -= 1

    def add_new_order(self, costumer, order, day):
        try:
            self.orders.add_new_order(costumer, order, day)
            self.update_current_inventory(order)
        except ValueError:
            return False

    def get_quantities_to_buy(self):
        quantities_to_buy = dict()

        for ingredient in self.MINIMUM_INVENTORY:
            current_quantity = self.CURRENT_INVENTORY[ingredient]
            minimum_quantity = self.MINIMUM_INVENTORY[ingredient]

            quantities_to_buy[ingredient] = minimum_quantity - current_quantity

        return quantities_to_buy

    def get_available_dishes(self):
        pass
