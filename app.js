//Importing the http module from node
const http = require(`http`);
//Create server constant and store the http object
//use create server method and callback function to log the request
const server = http.createServer((req,res)=> console.log(req));
//added an Listener Event on port 3000. When a request is made server console.log the request
server.listen(3000);