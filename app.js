//Importing the http module from node
const http = require(`http`);
//import our custom module from routes.js file 
const routes = require(`./routes`)
//Create server constant and store the http object in it
//use create server method and callback function to log the request
const server = http.createServer(routes.handler)
//prints out text so that I can see in terminal if its working or not
console.log(routes.text)
//added an Listener Event on port 3000. When a request is made server console.log the request
server.listen(3000); 
 

