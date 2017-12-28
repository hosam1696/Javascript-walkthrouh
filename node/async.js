const {readFile} = require('fs');
const {promisify} = require('util');
const chalk = require('chalk');


const readFilePromise = promisify(readFile);

readFile(__dirname+'/cli1.js',{encoding:'utf8'}, (err, data)=> {
    if (err === null)
        console.log('There is No error');
    console.log(data);
});


async function  DealingWithFile(filename = 'node1.js') {

    let fileContent = await readFilePromise(__dirname+'/'+filename, {encoding: 'utf8'});

    console.log('file content from async function\n', chalk.red(fileContent));

    console.log('there are '+fileContent.match(/\n/g).length+' lines in this file');

}

DealingWithFile();