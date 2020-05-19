// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');

const notes = getNotes();

console.log(notes);
// console.log(validator.isEmail('eagboka@opentechconsult.com'));
// console.log(validator.isURL('https:/mead.io'));
console.log(chalk.bold.green('Success!'));



// const add = require('./utils')
// const sum = add(4, -2);
// console.log(sum);