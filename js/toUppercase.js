
(async function testQuoka() {
    function X(){
        let j = {name: 'Hosam', _body:{status: 200, method: 'post'}};
       return Promise.resolve(j);
   }
    let type = await X();
    
    let y = type.name;

    y
    
}())



/*"ahoifhs".replace(/./g,'$&.toCamelCase()')
"ahoifhs".replace(/.{1}/g,'$&.toCamelCase()')
"ahoifhs".replace(/.{1}/g,$&.toCamelCase())

String.call('afsd').toLowerCase()
"aHGUYH".toLowerCase()
"ahoifhs".replace(/.{1}/g,'$&'.toUpperCase())
"ahoifhs".replace(/.{1}/g,'$&.toUpperCase()')
"ahoifhs".replace(/.{1}/g,$&.toUpperCase())

"ahoifhs".replace(/.{1}/g,'$&'.toUpperCase())
"ahoifhs".replace(/[A-z]/g,'$&'.toUpperCase())
"ahoifhs".replace(/[A-z]/g,'$&S'.toUpperCase())
"ahoifhs".replace(/\s[A-z]/g,'$&S'.toUpperCase())
"ahoifhs".replace(/\S[A-z]/g,'$&S'.toUpperCase())
"ahoifhs".replace(/^[A-z]/g,'$&S'.toUpperCase())
String.prototype.toUpperCase.call('asddas')
"ahoifhs".replace(/^[A-z]/g,Sting.prototype.toUpperCase.call($&))

"ahoifhs".replace(/^[A-z]/g,String.prototype.toUpperCase.call($&))

"ahoifhs".replace(/^[A-z]/g,String.prototype.toUpperCase.call('$&'))

"ahoifhs".replace('f',String.prototype.toUpperCase.call($&))
*/
"ahoifhs".replace('f','$&');
"ahoifhs".replace('f','$&sa');
"ahoifhs".replace('f','$&'.toUpperCase());
"ahoifhs".replace('f','$&'.toUpperCase.call(this));
"ahoifhs".replace('f','$&'.toUpperCase.call(this, '$&'));

"ahoifhs".replace('f','$&'.toUpperCase.call(this, '$&'));
"ahoifhs".replace('f','$&'.toUpperCase());
let x = 'start of the string or start of line in multi line pattern';
/*x.match(/\<[a-z]\>/)
x.match(/\<[a-z]\>/g)
x.match(/\b[a-z]/g)
x.match(/\b[a-z]/)
x.replace(/\b[a-z]/g, '$')
x.replace(/\b[a-z]/g, '$,')
x.replace(/\b[a-z]/g, '$.')
x.replace(/\b[a-z]/g, '$`')
x.replace(/\b[a-z]/g, '$+')
x.replace(/\b[a-z]/g, '$&')
x.replace(/\b[a-z]/g, '.')
x.replace(/\b[a-z]/g, '\1')
x.replace(/\b[a-z]/g, '&$')
x.replace(/\b[a-z]/g, '$1')
x.replace(/\b[a-z]/g, '$&')
x.replace(/\b[a-z]/g, String.prototype.toUpperCase.call('s'))
x.replace(/\b[a-z]/g, String.prototype.toUpperCase.call('$&'))
x.replace(/\b[a-z]/g, '$&'.toUpperCase.call(this))
x.replace(/\b[a-z]/g, '$&'.toUpperCase.call(this, '$&'))
x.replace(/\b[a-z]/g, '$&'.toUpperCase.call('$&')) */
const chalk = require('chalk');
x.replace(/\b[a-z]/g, '$&'.toUpperCase());
let blue = s=>chalk.underline(chalk.blue(s));
let red = s=>chalk.underline(chalk.red(s));

let quote = '\" programming is the art of telling other programmers what you want computer do \"';
//let t1 = performance.now();
let first = s=>s.split(' ').map(x=>red(x[0].toUpperCase()).concat(x.slice(1))).join(' ');
//let t2 = performance.now();


//console.log('the time this function take '+t2 - t1 +' milleseconds');
/*let second = s=>{let toUp=x=>blue(x.toUpperCase());return s.replace(/\b[a-z]/g, toUp)};
console.log(quote,'\n\b',first(quote),'\n\b',second(quote));
*/







//toUp('afas');
//x.replace(/\b[a-z]/g, toUp);
