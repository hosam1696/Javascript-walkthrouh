let arr1 = [1,2,3,4];

for (let i=0;i<arr1.length;i++) {
    arr1[i] <<= i; 
}

console.log(arr1)
// fibonacci numbers with while
function fibo (n = 10) {

    let a =b=c= 1;
    let fibs = [];
    while (n>0) {
        //console.log(c);
        fibs.push(c);
        c =  a ; // 1,1
        a = c + b;
        b = c; // 1,2
        n--        
    }
    return fibs.pop();
}

console.log(fibo())


function fib(n) {
    let phi = (1 + Math.sqrt(5))/2;
    let asymp = Math.pow(phi, n) / Math.sqrt(5);

    return Math.round(asymp);
}

console.log(fib(10));


function fibIterative(n) {
  let [a, b] = [1, 0];
  while (n-- > 0) {
    [a, b] = [b + a, a];
  }
  return b;
}


console.log(fibIterative(10))


function fiboRecu(n=10) {
    return (n <= 2)?1:fiboRecu(n-2)+fiboRecu(n-1)
}

console.log(fiboRecu(10))