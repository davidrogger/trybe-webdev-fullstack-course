from src.track_orders import TrackOrders
import pytest


@pytest.fixture
def file_data():
    orders = [
        ("Jonas", "coxinha", "segunda-feira"),
        ("Jonas", "pizza", "terça-feira"),
        ("Jonas", "coxinha", "quarta-feira"),
        ("Modiz", "miojo", "quarta-feira"),
        ("Modiz", "coxinha", "quinta-feira"),
        ("Jonas", "hamburguer", "sexta-feira"),
        ("Modiz", "camarao", "sabado"),
    ]
    track_orders = TrackOrders()

    for name, dish, day in orders:
        track_orders.add_new_order(name, dish, day)

    return track_orders


def test_start_length_track():
    track_orders = TrackOrders()

    assert len(track_orders) == 0


def test_add_new_order():
    track_orders = TrackOrders()
    track_orders.add_new_order("Jonas", "misto-quente", "segunda-feira")
    assert len(track_orders) == 1


def test_get_most_ordered_dish_per_costumer(file_data: TrackOrders):
    expect = "coxinha"
    most_ordered = file_data.get_most_ordered_dish_per_costumer("Jonas")

    assert most_ordered == expect


def test_get_never_ordered_per_costumer(file_data: TrackOrders):
    expect = set(["camarao", "miojo"])
    nerver_ordered = file_data.get_never_ordered_per_costumer("Jonas")

    assert nerver_ordered == expect


def test_get_days_never_visited_per_costumer(file_data: TrackOrders):
    expect = set(["quinta-feira", "sabado"])
    days_never_visited = file_data.get_days_never_visited_per_costumer("Jonas")

    assert days_never_visited == expect
