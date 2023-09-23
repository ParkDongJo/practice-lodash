import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

// https://lodash.com/docs/4.17.15#zip
// zip
// zipObject
// unzip

const persons: IPerson[] = _.times(6, () => makeRandomIPerson());

_.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

const keys = _.keys(persons);
log(keys);
const values = _.values(persons);
log(values);
const ob = _.zipObject(keys, values);
log(ob);


var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
_.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
