/* Create a calculator
1. Create a new Node.js project named "Calculator"
2. On the Home page (route "/"), show a welcome message and a link to calculator page
3. On the "/calculator" page, display a form with two input fields and a "sum" button
When the user click the "sum" button, they should be taken to the "/calculator-result" page,
which shows the sum of the two numbers
   -> Make sure the request goes to the server.
   -> Create a separate module for the additions function
   -> create another module to handle incoming request
   -> on the "/calculate-result" page, parse the user input, use the 
   addition module to calculate the sum, and display the result on a new HTML
   page */


   const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);

    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <html>
                <head><title>Home page</title></head>
                <body>
                    <h1>Welcome to Home page</h1>
                    <ul>
                        <li><a href="/calculator">Calculator</a></li>
                    </ul>
                </body>
            </html>
        `);
    }

    else if (req.method === 'GET' && req.url === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <html>
                <head><title>Calculator page</title></head>
                <body>
                    <h1>Welcome to Calculator page</h1>
                    <form action="/calculator" method="POST">
                        <input type="number" name="num1" placeholder="Enter first number"><br><br>
                        <input type="number" name="num2" placeholder="Enter second number"><br><br>
                        <button type="submit">Sum</button>
                    </form>
                </body>
            </html>
        `);
    }

    else if (req.method === 'POST' && req.url === '/calculator') {
        let body = '';
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const params = new URLSearchParams(body);
            const num1 = parseFloat(params.get("num1"));
            const num2 = parseFloat(params.get("num2"));
            const sum = num1 + num2;

            res.setHeader('Content-Type', 'text/html');
            res.end(`
                <html>
                    <head><title>Calculator Result</title></head>
                    <body>
                        <h1>Result: ${sum}</h1>
                        <a href="/calculator">Back to Calculator</a>
                    </body>
                </html>
            `);
        });
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 Not Found</h1>');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
