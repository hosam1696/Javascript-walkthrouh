/**
 * # SYMBOLS
 *  is a unique and immutable data type and may be used to identifier for an object properties
 *  
 */
const { log } = console;
let first = Symbol('fisrt symbol');
first
let type = typeof first
type
let e1 = Symbol.for('event')
let e2 = Symbol.for('event2')

console.log(e1 )
let s1 = Symbol.for('s1');
log(Symbol.keyFor(s1));

let article = {
    name: 'white sharks',
    [Symbol.for('article')]: "My Article"
};

log(article[Symbol.for('article')]);

let values = [54, 45, 144];
values[Symbol.isConcatSpreadable] = true;
log([].concat(values))
log(NaN==NaN, Object.is(NaN, NaN), Object.is([],0),Number([]),Object.is([],![]))
log('fsdf\u0301n'.normalize())

