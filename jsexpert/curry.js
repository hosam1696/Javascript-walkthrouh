const curry = (fn, ...a)=>f.length>a.length?(...b)=>curry(...[...fn, ...a,...b]):fn.length?f(...a):f;
const scurry = fn => (...a)=>(...b)=>fn(...a,...b);
let add  = a => b => (Math.random()*a)+b

let add5 = add(5)

let s= Math.round(add5(5))

//s
console.log(s)



let fd = scurry(add5)(50)()
//fd

console.log(~~fd);

console.log('i want to work i want to earn more money numbers is every thing numbers is ahead of my eye on every thing i see ')
