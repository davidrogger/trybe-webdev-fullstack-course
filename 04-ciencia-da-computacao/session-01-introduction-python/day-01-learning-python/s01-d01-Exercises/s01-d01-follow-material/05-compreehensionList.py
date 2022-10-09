# 1
from re import X


for index in range(5):
    print(index)

# 2
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

min_rating = 3.0
filtered_restaurants = [restaurant
                            for restaurant in restaurants
                            if restaurant["nota"] > min_rating]
print(filtered_restaurants)

restaurants_names = [restaurant['name']
                        for restaurant in restaurants
                    ]
print (restaurants_names)

# 3

names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name
                    for name in names_list
                    if 'a' in name
                ]
print(new_names_list)

# 4

quadrados = [x*x
                for x in range(11)
                ]
print(quadrados)
