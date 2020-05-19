const validator = require('validator');
const getNotes = require('./notes');

const notes = getNotes();

console.log(notes);
console.log(validator.isEmail('eagboka@opentechconsult.com'));
console.log(validator.isURL('https:/mead.io'));


// const add = require('./utils')
// const sum = add(4, -2);
// console.log(sum);