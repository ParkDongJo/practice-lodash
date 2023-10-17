import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

const array: number[] = [10, 20, 30, 40, 50];
const window = 5;

const average = (array: number[]) => {
  return _.sum(array) / array.length;
}

const indices = _.range(1, 10)
const windows = indices.map((i: number) => {
  return array.slice(i, i + window);
})
const answer = windows.map(average)

log(answer)
