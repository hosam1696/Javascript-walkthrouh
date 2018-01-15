const rx = require('rxjs');
const path = require('path');
const lp = require('locate-path');

console.log(process.cwd(), lp(process.cwd()));
rx.Observable.of(5,2, 47)
    .subscribe(s=>{
        console.log(s);
    });

    console.log(path.parse(__dirname))