import _ from 'lodash'
const log = console.log;

function *gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
}

// 로대쉬에서는 generator를 지원하지 않는다.
// log(_.map(gen(), (a: number) => a * a));

log(_.chain(gen())
    .map((a: number) => {
      console.log('map', a);
      return a * a;
    })
    .take(3)
    .value());

const set = new Set([1, 2, 3, 4, 5]);

log(_.chain(set)
    .map((a: number) => {
      console.log('map', a);
      return a * a;
    })
    .take(3)
    .value());

for(const a of gen()) {
  log(a);
}
for(const s of set) {
  log(s);
}


const go = (...fns: any[]) => _.reduce(fns, (a, fn) => fn(a));

const test = (a: any, fn: any) => {

}
test(10, (a: number) => a * a);

go(
  10,
  (a: number) => test(a, (n: number) => n + 10),
  (a: number) => a * a,
  log
)
