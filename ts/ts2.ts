import { Counter } from './ts1';
import { Client } from './course';

//import * as fetch from '../node_modules/node-fetch';
type logFunc = (data: any) => string;

interface TestClass {
    user: string,
    log: logFunc
}
let x;

let myObj = { name: 'Hosam', age: 21, gender: 'male' };

let myLove = { ...myObj, lover: 'menna allah' };

console.log('%c%s', 'font-size: 25px;color: cyan', 'New Object rest params');
console.group();
console.log(myLove);

let count = () => { let x: number = 0; for (let i = 0; i < 600; i++) { x = i } return x };
/*
(async function X () {
    const t = performance.now();
    
    let x = await count();
    console.log(x);    
    console.log(performance.now()-t);
}());

*/
class Test implements TestClass {
    private _user: string = 'Hosam';
    log(x) {
        return `you have entered ${x} --Thanks Back Tecks`;
    }
    public get user() {
        return this._user;
    }
    public set user(userName: string) {
        this._user = userName;
    }
}

let testedClass = new Test();
console.log('class user ', testedClass.user);
testedClass.user = 'Menna Allah';

console.log(testedClass.user);


class NewClass extends Test {
    
    constructor() {
        super();    
        console.log('New class and super together', super.user);
    }
}

const newClass = new NewClass();

function insideOne(one, two, three, four, five, six, seven, eight) {
    //let [one, two, three , four, five, six, seven, eight] = args;
    console.log(`This is from first function ${arguments}
    five number is ${five}
    eight value is ${eight}
    `);
}

function one(one, two, three, four, five, six, seven, eight) {

    console.log(Array.prototype.slice.call(arguments), Array.from(arguments));

    ///insideOne(...arguments);

}

one('4554Hosam', 'two', 'three', 4, 'five', 'six', 7, 8);

/*
function fab() {
	let result = [];
	let first = 1;
	let last = 0;

	while (last < 100) {
		result.push(last);
		last = first;
		last += first;
	
		}
		return result;
}
console.log(fab())

}*/

//const Fetch = import('../node_modules/node-fetch')

