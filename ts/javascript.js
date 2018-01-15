// I discovered that to be a good programmer you have to use the good parts not the bad parts
/*
    Naming a variable can not be a name of one of these reserved keywords

    abstract boolean break byte case catch char class const continue debugger default delete do double
    space
    tab
    line end
    whitespace
    Numbers | 7
    else enum export extends false final finally float for function goto if implements import in instanceof int interface long native new null package private protected public return short static super switch synchronized this throw throws transient true try typeof var volatile void while with



*/ 
/*
    > Closures

    The good news about scope is that inner functions get access to the parameters and variables of the functions they are defined within (with the exception of this and arguments). This is a very good thing.
*/
const chalk = require('chalk');

let tab = 'Hosam';

console.log(chalk.underline.cyan(`javacsript The Good ${chalk.green.bold(tab)}`));
