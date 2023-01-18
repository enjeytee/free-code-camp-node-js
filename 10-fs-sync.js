const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);
// Hello this is first text file. Hello this is second text file.

writeFileSync('./content/result-sync.txt', 
  `Here is the result: ${first} ${second}`);
// if file doesn't exist, node js will create the file
// if the file does exist, node nj will overwrite the file

// to append the file
writeFileSync('./content/result-sync.txt', 
  `Here is the result: ${first} ${second}`, 
  { flag: 'a'});
console.log('done with this task')
console.log('starting the next one')