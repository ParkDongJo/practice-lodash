import _ from 'lodash'
const log = console.log;

/**
 * 유인동 강사의 강의중 세션 4에서 나오는 go와 pipe 그리고 함수 조합은
 * 아래의 lodash 내장 함수들로 구현 가능하다.
 */

const pipe = (...fns: any[]) => _.flow(fns);
const go = (...fns: any[]) => _.reduce(fns, (a, fn) => fn(a));

const add = (a: number, b: number) => a + b;
const square = (n: number) => n * n;

const addSquare = pipe(add, square, log);
addSquare(1, 3);
go(add(1, 3), square, log);
