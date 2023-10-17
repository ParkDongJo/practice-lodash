import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

const square = (n: number) => {
  return n * n;
}
 
log(_.map([4, 8], square));
// => [16, 64]

log(_.map({ 'a': 4, 'b': 8 }, square));
// => [16, 64] (iteration order is not guaranteed)
 
const users: IPerson[] = _.times(5, makeRandomIPerson);

// The `_.property` iteratee shorthand.
log(_.map(users, 'name'));
// => ['Barney', 'Fred', 'Pebbles', 'Barney', 'Fred']
