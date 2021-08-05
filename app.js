//Importing the http module from node
const http = require(`http`);
//Create server constant and store the http object
//use create server method and callback function to log the request
const server = http.createServer((req,res)=> {
    console.log(req.url, req.method, req.headers);
    //res has methods which allow us to work with the server's response
    res.setHeader(`Content-Type`, `text/html`);
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title></head>`);
    res.write(`<h1>Hello I'm George and this is a Server Response!</h1>`)
    res.write(`</html>`);
    res.end();
    });
//added an Listener Event on port 3000. When a request is made server console.log the request
server.listen(3000);