import _ from 'lodash'
const log = console.log;

var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };
 
var values = _.memoize(_.values);
log(values(object));
// => [1, 2]
 
log(values(other));
// => [3, 4]
 
object.a = 2;
log(values(object));
// => [1, 2]
 
// 캐시가 되어있는 값을 변경하려면 `_.memoize.Cache`를 변경해야 한다.
// 이때, set 메서드를 사용해야한다.
// 책에서 배운 memoize와는 다르다. 책에 있는 memoize를 구현하는데 사용하는 것도 나쁘지 않을 것 같다.
values.cache.set(object, ['a', 'b']);
log(values(object));
// => ['a', 'b']
 

// set 외에도 아래의 메서드가 제공된다.
// clear, delete, get, has
values.cache.clear?.();
values.cache.has(object);
values.cache.delete(object);


// Replace `_.memoize.Cache`.
// _.memoize.Cache = WeakMap;