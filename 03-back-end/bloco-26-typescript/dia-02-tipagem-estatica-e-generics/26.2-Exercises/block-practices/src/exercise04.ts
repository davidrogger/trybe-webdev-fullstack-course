import { Pizza } from "./exercise03";

interface PizzaComum extends Pizza {
  flavor: 'Calabrase' | 'Frango' | 'Pepperoni';
}

interface PizzaVegeterian extends Pizza {
  flavor: 'Marguerita' | 'Palmito' | 'Mushroom'
}

interface PizzaSweet extends Pizza {
  flavor: 'Nutela' | 'Cheese Guava Paste' | 'Marshmallow'
  slices: 4
}

const pepperotni: PizzaComum = {
  flavor: "Frango",
  slices: 6
}

const palmito: PizzaVegeterian = {
  flavor: "Palmito",
  slices: 8
}

const marshmallow: PizzaSweet = {
  flavor: "Marshmallow",
  slices: 4
}

