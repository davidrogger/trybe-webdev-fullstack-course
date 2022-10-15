import random

random_number = random.randint(1, 10)
guess = ""

while guess != random_number:
    guess = int(input("Type a message "))
    print('try again!')

print(f"The number was {guess}")
