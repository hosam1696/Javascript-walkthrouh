//@ts-check
// is this an node http server
let http = require('http');



http.createServer((req, res)=> {
	if (req.url == 'name'){
		res.write('name is Hosam');
		res.end();
	 }else {

		res.writeHead(200, {'Content-Type': 'application/json'});
		
		res.write(res);
		res.end();
}
}).listen(3000, (err)=>{

	console.log('you are listening on port 3000')
});


