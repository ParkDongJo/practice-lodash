import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

const numbers = [1, 2, 3, 1, 1, 3];

const howMany = _.countBy(numbers, (n) => n);
log(howMany);
// [1]: 3

_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The `_.property` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }