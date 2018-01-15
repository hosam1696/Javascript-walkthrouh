
const fetch = require('node-fetch');

console.log('Native javascript Fetch Api');

/*


fetch('https://randomuser.me/api/?results=10')
	.then(res=>res.json())
	.then(users=>{
		console.log('All users i have got: \n', users.results.map(user=>user.login.username));
    });
  */  

async function getUsers(number= 10) {
    return fetch('https://www.randomuser.me/api/?results='+number)
}

async function getJson(response, promise = true) {
    return promise ?await response.json():response.json();
}

async function getRandomUsers() {
    
    const randomUsers = await getUsers();

    let jsonUsers = (await getJson(randomUsers)).results;
    
	const getPhones = users => users.phone;
    
    const getLoginData = users => users.login;

    let mapedData = jsonUsers
        .map((results=>{
            return {
                phones: getPhones(results),
                userInfo: getLoginData(results)
            }
        }));
        console.log(mapedData)
    return mapedData

}


getRandomUsers();



//console.log(getRandomUsers()) //await





