import _ from 'lodash'
const log = console.log;

const delay100 = (a: number) => new Promise<number>(resolve => setTimeout(() => resolve(a), 100));

const go1 = (a: any, f: any) => a instanceof Promise ? a.then(f) : f(a);
const add5 = (a: number) => a + 5;

const r1 = go1(10, add5);
// log(r1);

const r2 = go1(delay100(10), add5);
// r2.then(log);


/*
  lodash 에서는 promise 처리가 불가능하다.
  그래서 lodash로 비동기 처리는 불가능하다.
*/
// const r3 = _.chain([1, 2, 3])
//   .map((n) => delay100(n * 2))
//   .map(n => n.then(n => n))
//   .filter((n) => n > 2)
//   .value();

// log(r3);

const r4 = _.chain([1, 2, 3])
  .map((n) => delay100(n * 2))
  .value();

Promise.all(r4).then(result => {
  log(result);
  const r5 = _.chain(result)
    .filter((n) => n > 2)
    .sum()
    .value();
  log(r5);
});