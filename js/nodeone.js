const {readFile} = require('fs');
const {join} = require('path');
const {promisify} = require('util');

const readFilePromise = promisify(readFile);

process.stdout.write(process.argv+'\n'+ process.cwd()+"\n"+__filename);


console.log(process.argv);

readFilePromise(join(process.cwd(), process.argv[2]), {encoding:'utf8'})
    .then(
        (filledData)=>{console.log('\nYour Buffer Data\n', filledData)},
        (rejectErr)=>{console.warn(rejectErr)}
    )

