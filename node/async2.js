const fetch = require('node-fetch')
const ids = [1, 2, 3]
const url = 'https://pokeapi.co/api/v2/pokedex/'

async function asyncQueue() {

    // let requests = ids.map(async (u) => {

    //     let fetched = await fetch(url + u)
    //     let res = await fetched.json()
    //     return res
    // })
    let requests = ids.map(async u => {
        let res= await fetch(url + u)
        let json = await res.json()
        return json.name
    })
    // let names = await Promise.all(requests)
    // console.log('Names: ', names)


    // let responses = await Promise.all(ids.map(i => fetch(url + i)))
    // let jsons = await Promise.all(responses.map(res=>res.json()))    
    // console.log(jsons)

}

asyncQueue()