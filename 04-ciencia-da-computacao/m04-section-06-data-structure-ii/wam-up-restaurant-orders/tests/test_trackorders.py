from src.track_orders import TrackOrders


def test_start_length_track():
    track_orders = TrackOrders()

    assert len(track_orders) == 0


def test_add_new_order():
    track_orders = TrackOrders()
    track_orders.add_new_order("Jonas", "misto-quente", "segunda-feira")
    assert len(track_orders) == 1
