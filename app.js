//use express obj and listen method to initialise and listen for the Port. 

//import express module
const express = require(`express`);
//import the path module we exported
const path = require(`path`)
//define the express object and store in the app variable
const app = express();

//import Router modules from routes folder which contain routing logic
const adminRoutes = require(`./routes/admin`)
const shopRoutes = require(`./routes/shop`)

//parser middleware usually defined before routing. 
//used to be body-parser but has now been depreciated,
app.use(express.urlencoded({extended:true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
//serves static files using the static core module (comes with express.js), path module and path imported module for each site
app.use(express.static(path.join(__dirname,`public`)))
//using path filtering we can initiate a common start point (/admin), which does not need to be repeated for our Admin files
//css files for each page served by one line of code!
app.use(`/admin`,adminRoutes)
app.use(shopRoutes)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,`views`,`404.html`))
})



//Create server constant and store the http object in it
//No need to define server or use the http module like: const server = http.createServer(app);
//added an Listener Event on port 3000. When a request is made server console.log the request
app.listen(3000); 
 
