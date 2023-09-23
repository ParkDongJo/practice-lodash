import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;


const persons_times: IPerson[] = _.times(6, () => makeRandomIPerson());
log(persons_times);
const persons_range: IPerson[] = _.range(6).map(makeRandomIPerson);
log(persons_range);
