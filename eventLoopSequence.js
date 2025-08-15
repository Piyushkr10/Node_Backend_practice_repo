const fs = require('fs');

console.log('1. Starting of script');

// Microtask queues (Promise)
Promise.resolve().then(() =>{
    console.log('2. Microtask queue executed');
});

// Timer queues
setTimeout(()=>{
    console.log('3. Timer queue executed');
}, 0);

//I/O queues
fs.readFile('user-details.txt','utf-8',()=>{
    console.log('4. I/O queue executed');
});

// Close queue
process.on('exit',(code)=>{
    console.log('5. Close queue executed with');
});

console.log('6. End of script');