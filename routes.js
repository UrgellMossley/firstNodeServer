//allow user to input data which we will then store in a file in server
//imports the fs module, for file creation and manipulation
const fs = require(`fs`)
//function to handle our server requests
const requestHandler = (req,res)=>{
    //store request method/url as variables for future use using core methods
    const url = req.url;
    const method = req.method;
    //If default page accessed on local host
    if (url === `/`){
        //creates HTML file with Form that initiates a POST request
        res.write(`<html>`);
        res.write(`<head><title>Enter Message</title></head>`);
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</form></body>`)
        res.write(`</html>`);
        //return to close this execution context and leave the if statement after end
        return res.end();
    };
    if (url === `/message` && method === `POST`){
        //create variable for request body, which will be an empty arr
        const body = []
        //On method is a listner that lets us listen for data event
        //data event fires when a new chunk of data is to be read takes 2 args event and callback
        req.on(`data`, (chunk)=>{
            console.log(chunk)
            body.push(chunk);
        });
        //new listner to work with data once the stream is finish and all chunks have been parsed
        return req.on(`end`,()=>{
            //concat all data chunks using th buffer set to str and save in const
            const parsedBody = Buffer.concat(body).toString();
            //isolate user input
            const message = parsedBody.split(`=`)[1]
            //using the fs module, we use the writeFileSync method to create a txt file, called message.txt. 
            fs.writeFile(`message.txt`, message, err => {
              //set response's status code
              res.statusCode = 302
              //Sets a header value for the header obj. In this case sends user to /
              res.setHeader(`Location`,`/`);
              return res.end();
            });
        });    
    } 

    //setHeader() is a cumbersome way to set headers as we choose
    res.setHeader(`Content-Type`, `text/html`);
    //write()
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title></head>`);
    res.write(`<h1>Hello I'm George and this is a Server Response!</h1>`)
    res.write(`</html>`);
    return res.end();
    }
//A few ways to define module and export them:
//pass the function into the module itself   
/* module.exports = requestHandler */

//define the module obj
/* module.exports = {
    handler: requestHandler,
    text: `this is a welcome message`
} */
//Destructuring <3
module.exports.handler = requestHandler
module.exports.text = `program initialised`