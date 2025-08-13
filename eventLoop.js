
// How to exit from the Event loop....
// const http = require(http);

// const server = http.createServer((req,res) =>{
//         console.log(req);
//         process.exit();    // This line will stops the event loop that were running.

// });

// const PORT = 3000;
// server.listen(PORT,() => {
//     console.log(`Server running at ${PORT}`);
// });


// UnderStand the Request Object.
const http = require(http);

const server = http.createServer((req,res) =>{
        console.log(req.url,req.method,req.headers);
});

const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Server running at ${PORT}`);
});