// // core module
// const http = require('http');

// // External module
// const express = require('express');

// const app = express();

// //adding middleware 
// app.use((req,res,next)=>{
//     console.log("First Middleware",req.url,req.method);
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Second Middleware",req.url,req.method);
//     res.send('<p>Welcome to Express </p>')
// });

// // const server  = http.createServer(app);

// const PORT = 3000;
// // server.listen(PORT, () =>{
// //     console.log(`server listening at http://localhost:${PORT}`);
// // });

// app.listen(PORT,()=>{
//        console.log(`server listening at http://localhost:${PORT}`);
// })




// // Handling Routes

// // core module
// const http = require('http');

// // External module
// const express = require('express');

// const app = express();

// //adding middleware 
// app.use('/', (req,res,next)=>{
//     console.log("Hello Worlds");
//     next();
// });

// app.use('/submit-details' ,(req,res,next) =>{
//     console.log("Second Middleware",req.url,req.method);
//     res.send('<p>Welcome to Submit Details page</p>')
//     // res.end()
// })

// app.use('/',(req,res,next)=>{
//     console.log("Third Middleware",req.url,req.method);
//     res.send('<p>Welcome to Express </p>')
// });





// Handling Routes

// core module
const http = require('http');

// External module
const express = require('express');

const app = express();

//adding middleware 
app.post('/', (req,res,next)=>{
    console.log("Hello World");
    next();
});

app.use('/submit-details' ,(req,res,next) =>{
    console.log("Second Middleware",req.url,req.method);
    res.send('<p>Welcome to Submit Details page</p>')
    // res.end()
})

app.use('/',(req,res,next)=>{
    console.log("Third Middleware",req.url,req.method);
    res.send('<p>Welcome to Express </p>')
});


const PORT = 3000;
app.listen(PORT,()=>{
       console.log(`server listening at http://localhost:${PORT}`);
});
