enum EX {
    x,
    y,
    z
}

for (let x of Object.keys(EX)) {
    console.log('EX['+x+'] = '+EX[x]);
}

let x: string = 'this is string';
const y: object = {};

y['va'] = "s";

console.log('Has own property',y.hasOwnProperty('va'));

console.log(y)

y['va'] = "va";

console.log(y)

// What is Tail Recursion

// properties and methods that''s behaves like static variables

export class Counter{
	private static _counter = 0;
	constructor(){
	setInterval(()=>{
	          //this.increment();
		  //console.log('Counter Value = ',this.Value)
		}, 1000)	

	}
	
	private changeBy(val:number):void {
		Counter._counter += val;
	}

	get Value():number {
		return Counter._counter;
	}

	public increment() {
		this.changeBy(1)
	}

	public decrement() {
		this.changeBy(-1)
	}

}


let counter = new Counter();

console.log('counter Value',counter.Value, counter.);

type callback = (item?:any, index?:number|string, arr?:any[])=>any;

let map = function(arr:any[], callback:callback) {
	let length = arr.length;
	let returned:any[] = [];
	for(let index in arr) {
		returned.push(callback(arr[index], index, arr))
	}
	console.log(returned);
}

map([1, 2, 5], (item, index, arr)=>{
	return item*5
})