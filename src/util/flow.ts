import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

const add = (a: number, b: number) => a + b;
const square = (n: number) => n * n;

/**
 * lodash 에 있는 flow 함수는 함수들을 인자로 받아서 함수를 리턴한다.
 * 유인동 강사의 pipe() 와 동일한 역할을 한다.
 * 
 * 만약 배열을 가공하고자 한다면,
 * _.chain() 을 사용하면 된다.
 */
const addSquare = _.flow([add, square, log]);
addSquare(1, 3);
// => 9

