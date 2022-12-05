from src.track_orders import TrackOrders


def test_start_length_track():
    track_orders = TrackOrders()

    assert len(track_orders) == 0
