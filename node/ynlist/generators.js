/*
 Generators is a special type o functions 
 that instead of excuting a dull function 
*/


function* bear() {
    yield console.log('grizzle')
    yield console.log('polar')
    return 'done'
}

let b = bear()

b.next()
b.next()
b.next()


function* fibo() {
    let [a, b] = [0, 1]
    while (true) {
        yield b;
        [a, b] = [b, a+b]
    }
}
function* fibolimit(limit) {
    let [a, b] = [0, 1]
    while (b<limit) {
        yield b;
        [a, b] = [b, a + b]
    }
}
console.log('Array from',Array.from(fibolimit(10)))
let f = fibo()

function getFibo(num = 1) {
    let fib = fibo(),
        fibArr = [];
    for (let i = 1; i <= num; i++) {
        fibArr.push(fib.next().value)
    }
    return fibArr
}

function getFiboVal(index = 1) {
    return getFibo(index).slice(-1)[0]
}

console.log(getFibo(9))
let d = Date.now()
console.log(getFiboVal(90))
console.log(Date.now() - d)