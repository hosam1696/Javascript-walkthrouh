/*
@@@ Become a ninja with angular 
@@@ CHAPTER9: Dependency Injection

- DI your self

 to be able to register a dep you need a few things
 * a way to register a dep to make it available to injection in another component
 * a way to declare what dep are needed in the current component 






*/


let fetch = require('node-fetch');
const dogsApi = 'https://dog.ceo/api/breeds/list/all';
const animalsApi = 'http://api.animalfarmgame.com/animals/';

const getJSON = res=>res.json();

console.log('node fetch');
fetch(dogsApi)
    .then(getJSON)
    .then(data=> {
        //let fetched = getJSON(data);
        let terrier = data.message.terrier;

        //terrier

        console.log('dogs response', terrier);

        let terrLen = terrier.length

        console.log('length of the response',terrLen);
	});


console.log('......this is line is written after the promise.....');

let fibonacci = {
    [Symbol.iterator]() {
      let pre = 0, cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { done: false, value: cur }
        }
      }
    }
  }
  
  for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
      break;
    console.log(n);
  }
