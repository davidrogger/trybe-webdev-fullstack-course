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


def test_ordering_more_than_the_stock():
    inventory = InventoryControl()

    for _ in range(10):
        inventory.add_new_order("Jonas", "pizza", "sabado")
        inventory.add_new_order("Modiz", "pizza", "sabado")
        inventory.add_new_order("Onizuk", "pizza", "sabado")
        inventory.add_new_order("Bahdok", "pizza", "sabado")
        inventory.add_new_order("Isa", "pizza", "sabado")

    success_ordered = inventory.add_new_order("Denji", "coxinha", "domingo")

    assert success_ordered is False
