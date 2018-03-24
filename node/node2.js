import { readdirSync, read, readFileSync } from 'fs';
import { join } from 'path';
let { log } = console;
let index = readFileSync(join(__dirname, 'index.js'));

newFunction();

log('Buffer is ', 'Wait! what is Buffer?')

function newFunction() {
    log(index);
}

/*
    What is Internship?
    Many Large Companies only hire inters or experienced software developers
    even though you may be familiar with the term, i think it's best if we start out by talking a little bit
    more about wht exactly an intership is?
    is usually a temprary position in an organization-paid or nopaid that is available for students or professional wo are just starting out
*/