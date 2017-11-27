//@ts-check

console.log('Hey there can i find an answer to this');

const random = (min, max)=> Math.floor(Math.random()*(max-min))+min;
const len = ds => ds.length;

let x = Array(25).fill(random(0,5));

function makeTuple(input) {

    //let answer = Array(len(input)**(len(input)-1));
    let answer = [];
    for (let x=0;x<len(input)-1;x++) {
        for (let y = 0; y<len(input)-x-1;y++) {
            answer.push([input[x],input[x+y+1]]);
        }
    }
    return answer;
}

let xt = makeTuple([1,2,3,4,5])
xt

let ll = len([1,2,3,4])


let basicRecursion = (min, max)=> {
    if (min>max)return ;
    console.log(min);
    basicRecursion(++min, max);
}

basicRecursion(1,5);

function fibonacci(n) {
    if(n<=2) {
        return 1
    } else {
        return fibonacci(n-1)+ fibonacci(n-2)
    }
}

function forFibonnaci(n) {
    let s, a = 1,b = 0;
    if(n==1) return 1;
    while(n>1) {
        s= b;
        a= b+a;
        b=a+s;
        console.log(a);
        --n;
    }
}

let fofibo = forFibonnaci(4);

fofibo

let fibo = fibonacci(7);

fibo;

