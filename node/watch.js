const {spawn} = require('child_process');
const {promisify} = require('util');
const {watch} = require('fs');
const {resolve} = require('path'); 

const watchPromise = promisify(watch);

function hWatch(fileName) {
    let path = resolve(__dirname, fileName||'event.js');
    console.log(path);
    watch(path,{percistent:true,recursive:true}, ()=>{
            console.log('new change happens!');
//            console.warn(err, 'you have to define a file');
    
    }
    )
}


// hWatch(process.argv[2]); for Dev

module.exports = hWatch;