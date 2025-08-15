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
       
        //Reading Chunks
        // req.on("data",(chunk) =>{
        //     console.log(chunk);
        // })
        
        //Buffering Chunks
        // const body =[];
        // req.on("data",(chunk) =>{
        //     console.log(chunk);
        //     body.push(chunk)
        // });
        // req.on("end",() =>{
        //     const parsedBody = Buffer.concat(body).toString();
        //     console.log(parsedBody);
        // });

        //Parsing Request
        const body =[];
        req.on("data",(chunk) =>{
            console.log(chunk);
            body.push(chunk)
        });
        req.on("end",() =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);

            // Parsing Request
            const param = new URLSearchParams(parsedBody);
            const jsonObject = {};
            for(const [key,value] of param.entries()){
                jsonObject[key] = value;
            }
            const jsonString = JSON.stringify(jsonObject);
            console.log(jsonString)
            fs.writeFileSync('user-details.txt', 'Piyush Kumar - Male');
        });

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
