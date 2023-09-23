import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

// https://lodash.com/docs/4.17.15#chunk
// chunk
// 배열을 지정한 크기로 이중 배열화 한다.

const persons: IPerson[] = _.times(6, () => makeRandomIPerson());

_.chunk(persons, 2).forEach((chunk: IPerson[]) => log(chunk));

// [p1, p2, p3, p4, p5, p6]
// -> [[p1, p2], [p3, p4], [p5, p6]]
