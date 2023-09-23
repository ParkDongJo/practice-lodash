import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

//https://lodash.com/docs/4.17.15#groupBy
// groupBy

const persons: IPerson[] = _.times(2, () => makeRandomIPerson());
const person: IPerson = makeRandomIPerson();

const them = [...persons, person, person];

// log(_.groupBy(them, (person: IPerson) => person.age));
// log(_.groupBy(them, (person: IPerson) => person.name));
log(_.groupBy(them, (person: IPerson) => person.age > 19 ? '성인' : '미성년자'));
