const fs = require('fs');
fs.watchFile(__dirname+'/ser.js',(d)=>{
    console.log(d);
})