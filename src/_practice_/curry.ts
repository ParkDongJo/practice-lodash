import _ from 'lodash'
const log = console.log;

type Product = {
  name: string,
  price: number,
  quantity: number,
};

const products = [
  {name: '반팔티', price: 15000, quantity: 1},
  {name: '긴팔티', price: 20000, quantity: 2},
  {name: '핸드폰케이스', price: 15000, quantity: 3},
  {name: '후드티', price: 30000, quantity: 4},
  {name: '바지', price: 25000, quantity: 1}
];

const go = (...fns: any[]) => _.reduce(fns, (a, fn) => fn(a));
const map = _.curry((fn: any, iter: Iterable<any>) => _.map(iter, fn));
const reduce = _.curry((fn: any, iter: Iterable<any>) => _.reduce(iter, fn));

const add = (a: number, b: number) => a + b

const sum = _.curry(<T>(fn: any, iter: Iterable<T>) => go(
  iter,
  map(fn),
  reduce(add)
));


const totalQuantity = sum((p: Product) => p.quantity);
const totalPrice = sum((p: Product) => p.price * p.quantity);

log(totalQuantity(products));
log(totalPrice(products));
