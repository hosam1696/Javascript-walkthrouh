/*

    basic node cli application that create a pattern into your cmd/bash
    based on the number you eval

*/

const chalk = require('chalk');
const readline = require('readline');
const range = (start, end)=>Array.from({length:end-start+1},(a,b)=>b+start);

let rd = readline.createInterface(process.stdin,process.stdout);

rd.question(chalk.green('what numbers of colums do you need?\n'), (d)=>{
    (function makePattern(d) {
        //console.log(d, typeof d);
        let r10 = range(0,Number(d));
        for (let i = 0;i<r10.length/3;i++) {
            for (let y = 0;y<r10.length;y++) {
                process.stdout.write(Math.random()>0.5?chalk.cyan('/'):chalk.bold('\\'));
            }
            process.stdout.write('\n');
        }
        rd.on('line',(s)=>{
            //console.log(s);
            if (s == 'close' || Number(s) == 0)
                rd.close();
            else
                makePattern(s)
        });
    })(d);
});


