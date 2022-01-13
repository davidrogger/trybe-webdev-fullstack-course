const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);

}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  order.order.pizza.marguerita.price = 20;

  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas} e ${order.order.drinks.coke.type} é R$ ${order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price}`);

}

orderModifier(order);