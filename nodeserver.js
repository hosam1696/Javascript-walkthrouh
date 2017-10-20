let http = require('http');
const fs= require('fs');

http.createServer((req,res)=>{
    console.log(req);
    res.write('Hjosa');
    res.end();
}).listen(3000,()=>{
    console.log('u are listening on port 3000')
})


console.log(fs.readFileSync(__dirname+'\ser.js'));