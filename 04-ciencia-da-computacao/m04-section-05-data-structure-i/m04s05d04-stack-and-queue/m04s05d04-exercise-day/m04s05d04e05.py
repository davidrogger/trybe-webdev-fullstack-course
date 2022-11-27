from m04s05d04e04 import Stack


class Garage(Stack):
    def __str__(self):
        parked_cars = ""
        for position in range(len(self.stack)):
            parked_cars += (
                f"\n{position} - {self.stack.get_element_at(position)}"
            )
        return parked_cars


default_plates = ["QUI465", "POP963", "KJQ123"]
garage = Garage()
for plate in default_plates:
    garage.push(plate)


def show_menu():
    TITLE = " MENU "
    ADD_VEHICLE = "# 1 - Add Vehicle"
    REMOVE_VEHICLE = "# 2 - Remove Vehicle"
    PARKED_VEHICLES = "# 3 - Parked Vehicle"
    CLOSE = "# 4 - Close Menu"
    FOOTER = ""
    print(
        "\n"
        f"{TITLE:#^20}\n"
        f"{ADD_VEHICLE:#>20}\n"
        f"{REMOVE_VEHICLE:#>20}\n"
        f"{PARKED_VEHICLES:#>20}\n"
        f"{CLOSE:#>20}\n"
        f"{FOOTER:#^20}"
        "\n"
    )


def add_vehicle():
    YES = "y"
    NO = "n"
    confirmation = NO

    plate_number = input("Insert the vehicle plate number to park: ")
    print(f"Please verify the number to insert: {plate_number}")
    confirmation = input("Should Insert?(y/n): ")
    if confirmation == YES:
        garage.push(plate_number)
        print("\nAdd with success!")


def remove_vehicle():
    print("Not Implemented")


def parked_vehicle():
    print("\nVehicles in the garage:", garage)


def close_menu():
    print("Have a nice day! Good Bye!")


def main():
    actions = {
        "1": add_vehicle,
        "2": remove_vehicle,
        "3": parked_vehicle,
        "4": close_menu,
    }

    options = None

    while options != "4":
        try:
            show_menu()
            options = input("Type an option number: ")
            actions[options]()
        except KeyError:
            print(
                "\n"
                "Incorrect Options, please choice an number as the menu shows"
            )


if __name__ == "__main__":
    main()
