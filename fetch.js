
const fetch = require('node-fetch');

console.log('Native javascript Fetch Api');

fetch('https://randomuser.me/api/?results=10')
	.then(res=>res.json())
	.then(users=>{
		console.log('All users i have got: \n', users.results.map(user=>user.login.username));
	});

async function getRandomUsers() {
	const randomUsers = await fetch('https://randomuser.me/api/?results=10')

	let jsonUsers = (await randomUsers.json()).results
	const getPhones = users => users.phone;
	const getLoginData = users => users.login;

    let mapedData = jsonUsers
        .map((results=>{
            return {
                phones: getPhones(results),
                userInfo: getLoginData(results)
            }
        }));

    return mapedData

}

console.log(getRandomUsers()) //await





