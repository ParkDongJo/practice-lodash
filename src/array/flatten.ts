import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

// flatten
// flattenDeep
// flattenDepth
/*
  배열에 대한 depth를 평탄화 해준다.
*/


const array = [1, [2, [3, [4]], 5]]
log(_.flatten(array));
log(_.flattenDeep(array));
log(_.flattenDepth(array, 1));
log(_.flattenDepth(array, 2));
log(_.flattenDepth(array, 3));


const persons: IPerson[] = _.times(2, () => makeRandomIPerson());
const person1: IPerson = makeRandomIPerson();
const person2: IPerson = makeRandomIPerson();

const them = [...persons, [ person1, [ person2]]]

log(_.flatten(persons));
log(_.flattenDeep(them));

