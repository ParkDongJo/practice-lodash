import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'

// 지연평가 테스트

const persons: IPerson[] = _.range(10).map(makeRandomIPerson);
// console.log('persons', persons);

const names: string[] = _.chain(persons)
  .filter((person) => {
    console.log('filter', person.age)
    return person.age >= 20 && person.age < 30
  })
  .map((person) => {
    console.log('map', person.age)
    return person.name
  })
  .take(2)
  .value();

console.log('names', names);
