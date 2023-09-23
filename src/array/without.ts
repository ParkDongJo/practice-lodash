import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

// https://lodash.com/docs/4.17.15#without
// without
// 레퍼런스도 비교하여 제거 가능하다.

log(_.without([2, 1, 2, 3], 1, 2));
// => [3]

const person1: IPerson = makeRandomIPerson();
const person2: IPerson = makeRandomIPerson();
const person3: IPerson = makeRandomIPerson();

log(_.without([person1, person2, person3], person1));
// => [person2, person3]
