const path =require('path');
const fs = require('fs');
/*
let n = require('./node');
let hosam = n.events;
hosam.on('walking', hosam.walkEvent);
hosam.walk();
*/
//console.log(path.dirname(module.))

fs.lstat(path.join(__dirname,'index.js'), (err, s)=> {
    
    console.log(s.isFile(), 'hi');
})