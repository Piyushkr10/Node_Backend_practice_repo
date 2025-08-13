// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res) =>{
//     res.setHeader('Content-Type' , 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Coding</title></head>')

//     if(req.url === '/'){
//         res.write('<h1>Welcome to the Home Page</h1>');
//         res.write('<form action = "/submit-details" method = "POST">');
//         res.write('<input type ="text" id="name" name="name" placeholder = "Enter your Name"><br><br>>');
//         res.write('<label for = "gender">Gender:</label>');
//         res.write('<input type="radio" id="male" name="gender" value="male">');
//         res.write('<label for = "male">Male</label>');
//         res.write('<input type = "radio" id="female" name="gender" value="female">');
//         res.write('<label for ="female">Female</label>');
//         res.write('<button type="submit">Submit</button>');
//         res.write('</form>');
        
//         return res.end();
//     } else if(req.method == 'POST' && req.url.toLowerCase()==='/submit-details'){
//         fs.writeFileSync('user-details.txt','Piyush Kumar');
//         res.statusCode = 302;
//         res.setHeader('Location','/');
//         return res.end();
//     }

//     res.write('<body><h1>Like</h1></body>');
//     res.write('</html>');
//     return res.end();
// });

// const PORT = 3000;
// server.listen(PORT,() =>{
//     console.log(`Server is listening at Port no ${PORT}`);
// });




const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);

    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Coding</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to the Home Page</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="name" placeholder="Enter your Name"><br><br>');
        res.write('<label>Gender:</label>');
        res.write('<input type="radio" name="gender" value="male"> Male');
        res.write('<input type="radio" name="gender" value="female"> Female');
        res.write('<br><button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body></html>');
        res.end();

    } else if (req.method === 'POST' && req.url.startsWith('/submit-details')) {
        // This now matches even with / or ? in the URL
        fs.writeFileSync('user-details.txt', 'Piyush Kumar - Male');
        console.log('✅ File written successfully!');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>404 - Page Not Found</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
