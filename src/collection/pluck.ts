import _ from 'lodash'
import {IPerson, makeRandomIPerson} from '../models/person'
const log = console.log;

const users: IPerson[] = _.times(5, makeRandomIPerson);

// 4v 부터 pluck 대신 map을 사용하라고 한다.
_.map(users, 'user');
