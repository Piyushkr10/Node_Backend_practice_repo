const http = require('http');

const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Coding</title></head>')

    if(req.url === '/'){
        res.write('<h1>Welcome to the Home Page</h1>');
        res.write('<form action = "/submit-details" method = "POST">');
        res.write('<input type ="text" id="name" name="name" placeholder = "Enter your Name"><br><br>>');
        res.write('<label for = "gender">Gender:</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for = "male">Male</label>');
        res.write('<input type = "radio" id="female" name="gender" value="female">');
        res.write('<label for ="female">Female</label>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        
        return res.end();
    } else if(req.url.toLowerCase() === '/product'){
        res.write('<h1>Product</h1>');
        return res.end();
    }

    res.write('<body><h1>Like</h1></body>');
    res.write('</html>');
    return res.end();
});

const PORT = 3000;
server.listen(PORT,() =>{
    console.log(`Server is listening at Port no ${PORT}`);
});