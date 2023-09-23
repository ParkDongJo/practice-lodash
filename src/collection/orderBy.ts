import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

//https://lodash.com/docs/4.17.15#orderBy
// orderBy

const persons: IPerson[] = _.times(2, () => makeRandomIPerson());
const person: IPerson = makeRandomIPerson();

const them = [...persons, person, person];

log(_.orderBy(them, ['age', 'name'], ['asc', 'desc']));
