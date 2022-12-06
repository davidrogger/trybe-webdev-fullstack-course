from src.inventory_control import InventoryControl


def test_get_quantities_to_buy():
    inventory = InventoryControl()
    inventory.add_new_order("Jonas", "coxinha", "quarta-feira")
    inventory.add_new_order("Jonas", "hamburguer", "quarta-feira")
    inventory.add_new_order("modiz", "misto-quente", "quinta-feira")
    expect = {
        "pao": 2,
        "carne": 1,
        "queijo": 2,
        "molho": 0,
        "presunto": 1,
        "massa": 1,
        "frango": 1,
    }

    assert inventory.get_quantities_to_buy() == expect
