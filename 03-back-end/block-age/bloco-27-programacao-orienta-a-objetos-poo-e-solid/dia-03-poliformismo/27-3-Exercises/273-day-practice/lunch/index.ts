import Order from "./Order";
import OrderItem from "./OrderItem";
import Student from '../Student';
import OrderRespository from "./OrderRepository";

const batata = new OrderItem('batata', 5);
const xburger = new OrderItem('XBurger', 35);
const coca = new OrderItem('Coca-Cola', 10);

const nyzuk = new Student('nyzk', new Date('2005'));
const jonas = new Student('jonas', new Date('2010'));
const juka = new Student('juka', new Date('1960'));

const order1 = new Order(nyzuk, [xburger, batata], 'card');
const order2 = new Order(jonas, [xburger, batata, coca], 'card');
const order3 = new Order(juka, [xburger, xburger, batata, batata, coca, coca], 'card');
const order4 = new Order(nyzuk, [xburger, batata], 'card');

const orders = new OrderRespository([]);

console.log(orders.orders);
console.log('------------');
orders.addOrder(order1);
orders.addOrder(order2);
// console.log(orders.orders);
console.log(orders.listByClient('nyzk'));
