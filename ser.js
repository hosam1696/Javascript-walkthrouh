//@ts-check

let http = require('http');



http.createServer((req, res)=> {
	if (req.href == 'name') 
		res.end('name');
	 else {

		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(req);
}
}).listen(3000, (err)=>{

	console.log('you are listening on port 3000')
});


