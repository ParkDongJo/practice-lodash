import _ from 'lodash'
// 일단 flatten 과 기능이 거의 동일해보인다.
// 게다가 추가 조사를 하다보니 ES10 부터 자체적으로 flat() 메서드를 제공해주게 됐다.
// 사용법은 아래와 같다. 비교해보자
const log = console.log;

const duplicate = (n: number) => [n, n];

const toString = (n: number) => n.toString();

const array = [1, [2, [3, [4]], 5]]

// flatMap, flatMapDeep, flatMapDepth 은 콜백함수로 중간가공이 가능하다
log(_.flatMapDeep(array));
log(_.flatMapDeep(array, toString));

// 아래 결과를 잘 비교해보자
// flat 하는 순서를 예상해볼수 잇다.
log(_.flatMapDeep(array, duplicate));
log(_.flatMapDeep([[1, 2], [3, 4]], duplicate));


// ES10 - compileOptions 에 es2019 를 추가해야한다.
log(array.flat(2));
log(array.flat(3));



// https://webisfree.com/2022-11-10/[Javascript]-Array-flat()-%EB%A9%94%EC%86%8C%EB%93%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0