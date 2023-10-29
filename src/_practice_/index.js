const log = console.log;

const apply1 = f => f(1); // f, 함수와 인자를 입력받아서 함수(인자)로 실행하는 함수
const add2 = a => a+2;
log(apply1(add2)); // print 3
log(apply1(a => a -3)) // print -2
