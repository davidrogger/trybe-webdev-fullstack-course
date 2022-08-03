import Order from "./Order";
import OrderItem from "./OrderItem";
import Student from '../Student';

const batata = new OrderItem('batata', 5);
const xburger = new OrderItem('XBurger', 35);

const nyzuk = new Student('nyzk', new Date('2005'));

const pedido = new Order(nyzuk, [batata, xburger], 'card');

console.log(pedido);