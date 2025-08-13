/*Create a page that shows a navigations bar of Myntra with following links:
1. Home  "/"
2. Men  "/men"
3. Women "/women"
4. Kids  "/kids"
5. Sale  "/sale"
6. Cart  "/cart"
Clicking on each link should redirect to a different page with the name of the section in the title.*/


const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
   if (req.method ==='GET' && req.url === '/') {
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myntra Home page</title></head>');
    res.write('<body>');
    res.write('<nav>');
    res.write('<ul>');
    res.write('<li><a href = "/">Home</a></li>');
    res.write('<li><a href = "/men">Men</a></li>');
    res.write('<li><a href = "/women">Women</a></li>');
    res.write('<li><a href = "/kids">Kids</a></li>');
    res.write('<li><a href = "/sale">Sale</a></li>');
    res.write('<li><a href = "/cart">Cart</a></li>');
    res.write('</ul>');
    res.write('</nav>');
    res.write('</body>');
    res.write('</html>');
    res.end();
   }else if (req.method ==='GET' && req.url === '/men') {
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myntra Men page</title></head>');
    res.write('<body>');
    res.write('<h1>Men Section</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
   }else if (req.method ==='GET' && req.url === '/women') {
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myntra Women page</title></head>');
    res.write('<body>');
    res.write('<h1>Women Section</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
   }else if (req.method ==='GET' && req.url === '/kids') {
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myntra Kids page</title></head>');
    res.write('<body>');
    res.write('<h1>Kids Section</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
   }else if (req.method ==='GET' && req.url === '/sale') {
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myntra Sale page</title></head>');
    res.write('<body>');
    res.write('<h1>Sale Section</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
   }else if (req.method ==='GET' && req.url === '/cart') {
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myntra Cart page</title></head>');
    res.write('<body>');
    res.write('<h1>Cart Section</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
   }

});

const PORT = 3000;
server.listen(PORT,()=>{
   console.log( `server are listing are at ${PORT}`)
});