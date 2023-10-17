import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

// 여기서 첫

let p = _.wrap(_.escape, function(func, text: string) {
  return '<p>' + func(text) + '</p>';
});
 
log(p('fred, barney, & pebbles'))
