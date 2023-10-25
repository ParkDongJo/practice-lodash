import _ from 'lodash'
const log = console.log;

type Product = {
  name: string,
  price: number
};

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

const add = (a: number, b: number) => a + b;

/**
 * 유인동 강사의 아래 코드는 lodash 로 구현 가능하다.
 */
// log(
//   reduce(
//     add,
//     map(p => p.price,
//       filter(p => p.price < 20000, products))));
log(_.reduce(
  _.map(_.filter(products, p => p.price < 20000), p => p.price),
  add,
))

// 좀더 개선 해볼까?
