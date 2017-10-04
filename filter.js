 console.log('Hi');

let string = 'August 15, 2017';


let replaceFunc = (matched, g1, g2, g3, index, all)=> {return `\
first match is  : ${g1}
second match is : ${g2}
third match is  : ${g3}
the desired date is [ ${g2} ${g1} ${g3} ]
`};

let filtered = string.replace(/([A-z]*) ?([0-9]*,) ?([0-9]*)/g, replaceFunc);


console.log(filtered);
