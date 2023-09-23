import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

// https://lodash.com/docs/4.17.15#filter
// https://lodash.com/docs/4.17.15#reject

const persons: IPerson[] = _.times(2, () => makeRandomIPerson());
const person: IPerson = makeRandomIPerson();

const them = [...persons, person, person];

const isOverAge30 = (person: IPerson) => person.age > 30;

// 조건에 걸리면 가져오기
log(_.filter(them, isOverAge30))
// 조건에 걸리면 제외시키기
log(_.reject(them, isOverAge30))
