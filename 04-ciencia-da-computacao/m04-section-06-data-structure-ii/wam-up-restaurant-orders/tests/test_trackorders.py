from src.track_orders import TrackOrders


def test_start_length_track():
    track_orders = TrackOrders()

    assert len(track_orders) == 0


def test_add_new_order():
    track_orders = TrackOrders()
    track_orders.add_new_order("Jonas", "misto-quente", "segunda-feira")
    assert len(track_orders) == 1


def test_get_most_ordered_dish_per_costumer():
    track_orders = TrackOrders()
    track_orders.add_new_order("Jonas", "coxinha", "segunda-feira")
    track_orders.add_new_order("Jonas", "pizza", "terça-feira")
    track_orders.add_new_order("Jonas", "coxinha", "quarta-feira")
    track_orders.add_new_order("Jonas", "hamburguer", "sexta-feira")

    expect = "coxinha"
    most_ordered = track_orders.get_most_ordered_dish_per_costumer("Jonas")

    assert most_ordered == expect
