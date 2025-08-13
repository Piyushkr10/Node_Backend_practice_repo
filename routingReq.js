const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Coding</title></head>');
    if(req.url === '/'){
        res.write('<h1>Welcome to home page</h1>');
        return res.end();
    } else if(req.url.toLowerCase ==='/product') {
        res.write('<h1>Product</h1>');
       return  res.end();
    }
    res.write('<body><h1>Like</h1></body>');
    res.write('</html>');
    return res.end();
})

const PORT = 3000;
server.listen(PORT,()=>{
     console.log(`Server running at ${PORT}`);
})