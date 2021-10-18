//import express module
const express = require(`express`);

const app = express();

//parser middleware usually defined before routing. 
//used to be body-parser but has now been depreciated,
app.use(express.urlencoded({extended:true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(`/`,(res,req, next)=>{
    console.log(`this runs by default`);
    next();
})

app.use(`/add-product`,(req,res,next)=>{
    console.log(`first`);
    //as there is a response sent we dont need to use next()
    //nb no need to set headers nor to use res.write!
    res.send(`<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">click me</button></form>`)
    //if you send a response you dont want to send next();
})
//by using routing middleware we can determine what happens according to what type of request is made
app.post(`/product`,(req,res,next)=>{
    console.log(req.body)
    res.redirect(`/`)
})

app.use(`/`,(req,res,next)=>{
    console.log(`second`);
    //as there is a response sent we dont need to use next()
    //nb no need to set headers nor to use res.write!
    res.send(`<h1>Finished!</h1>`)
})
//Create server constant and store the http object in it
//use express obj and listen method to initialise and listen for the Port. 
//No need to define server or use the http module like: const server = http.createServer(app);
//added an Listener Event on port 3000. When a request is made server console.log the request
app.listen(3000); 
 

