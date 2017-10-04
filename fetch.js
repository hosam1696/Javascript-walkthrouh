
const fetch = require('node-fetch');

console.log('Native javascript Fetch Api');

fetch('https://randomuser.me/api/?results=10')
	.then(res=>res.json())
	.then(users=>{
	
		console.log('All users i have got: \n', users.results.map(user=>user.login.username));
	})



