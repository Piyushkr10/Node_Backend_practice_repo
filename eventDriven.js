
// Blocking and Asynchronous (non-blocking) Operations

const fs = require('fs');

console.log('1 Starting of Script');

// Synchronous (blocking) operation
console.log('2 Reading file synchronously');
const dataSync = fs.readFileSync('user-details.txt','utf-8');
console.log('3 Synchronous read complete');

// Asynchronous (non-blocking) operation
console.log('4 Reading file asynchronously');
fs.readFile('user-details.txt','utf-8',(err,dataAsync) =>{
    if(err)  throw err;
    console.log('5 Asynchronous read complete');
});

console.log('6 End of Script');