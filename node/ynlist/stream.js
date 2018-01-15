// js generator <=> array
const { log } = console

function* values(min = 0, max = 10) {
    for (let i = min; i <= max; i++) {
        yield i
    }
}

const valueArrays = Array.from(values(1, 10))
let v = values() 
log('Arrays values',valueArrays)
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

log('Odd Numbers',range(2,10, (v, k)=>v+k))