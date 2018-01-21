// js generator <=> array
const { log } = console
const rand = () => Math.floor(Math.random()*10)+1
function* values(min = 0, max = 10) {
    for (let i = min; i <= max; i++) {
        yield i
    }
}

function* genYear(to = new Date().getFullYear(), from = to - 3) {
    for (let y = to; y >= from; y--) yield y
}
console.log(Array.from(genYear()))
console.log(Array.from(genYear(), (iter, index) => iter))
console.log(Array.from(genYear(), (iter, index) => iter + index ))
console.log(Array.from(genYear(), (iter, index) => 'year:' + iter))
console.log(Array.from(genYear(), (iter, index) => `i won ${rand()} prizes in ${iter}`))




const valueArrays = Array.from(values(1, 10))
let v = values()
log('Arrays values', valueArrays)
log(v.next().value)
log(v.next().value)
log(v.next().value)
const defaultPredicate = (v, k) => v
const range = (from = 1, to = 10, predicate = defaultPredicate) => {
    to = predicate === defaultPredicate ? to : to / 2
    function* values(min = from, max = to) {
        for (let i = min; i <= max; i++) yield i
    }
    return Array.from(values(from, to), predicate)
}

log('Odd Numbers', range(2, 10, (v, k) => v + k))