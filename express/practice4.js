/* Create a new project 
1 Install nodemon and express
2 Add two dummy middleware that logs the request path and request method respectively
3 Add a third middleware that returns a response
4 Now add handling using two more middleware that handle path /, a request to 
 /contact-us page also
5 Contact us should return a form with name and email as input fields that 
  submit to /contact-us page also
6 Also handle POST incoming request to /contact-us path using a separate
  middleware.
*/

const express = require('express');
const app = express();

// Needed to parse form POST data
app.use(express.urlencoded({ extended: true }));

// Middleware 1: Log request path
app.use((req, res, next) => {
    console.log("First Middleware:", req.path);
    next();
});

// Middleware 2: Log request method
app.use((req, res, next) => {
    console.log("Second Middleware:", req.method);
    next();
});

// Route: Home page
app.get('/', (req, res,next) => {
    console.log("Third Middleware: Sending home page");
    res.send('<p>Welcome to Express</p>');
    next();
});

// Route: Contact Us page (GET)
app.get('/contact-us', (req, res,next) => {
    console.log("Fourth Middleware: Contact Us page");
    res.send(`
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <button type="submit">Submit</button>
        </form>
    `);
    next();
});

// Route: Contact Us form handler (POST)
app.post('/contact-us', (req, res,next) => {
    console.log("Fifth Middleware: Handling POST /contact-us");
    const { name, email } = req.body;
    res.send(`<p>Thank you, ${name}! We have received your email: ${email}</p>`);
    next();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
