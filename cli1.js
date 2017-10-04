const argv = require('yargs').argv;
const fetch = require('node_fetch');
const url = 'http://api.animalfarmgame.com/animals/5';

fetch(url)
    .then(data=>{
        console.log(data);
    })

console.log(argv);


