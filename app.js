//use express obj and listen method to initialise and listen for the Port. 

//import express module
const express = require(`express`);
//import the path module we exported
const path = require(`path`);
//define the express object and store in the app variable
const app = express();

//set global config value for the entire express application
//We are telling express we want to compile dynamic templates with the template engine and where to find them (views)

//the view engine name must match the app engine name assigned above. However we define the engine is the file type needed for files in our views directory. i.e. 404.handlebars
app.set(`view engine`,`ejs`);
//The views config value is set to default in views but we are doing this for show
app.set(`views`, `views`);
//import Router modules from routes folder which contain routing logic
const adminRoutes = require(`./routes/admin`);
const shopRoutes = require(`./routes/shop`);
const { extname } = require("path");
const errorRoutes = require(`./controllers/404`)

//parser middleware usually defined before routing. 
//used to be body-parser but has now been depreciated,
app.use(express.urlencoded({extended:true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
//serves static files using the static core module (comes with express.js), path module and path imported module for each site
app.use(express.static(path.join(__dirname,`public`)));
//using path filtering we can initiate a common start point (/admin), which does not need to be repeated for our Admin files
//css files for each page served by one line of code!
app.use(`/admin`,adminRoutes);
app.use(shopRoutes);
//using render within our app middleware serves dynamic templates from designated directory
//NB the way that we pass data into our template engines does not change. Always Key value pairs
app.use((req,res,next)=>{
    res.status(404).render(`404`,errorRoutes.get404);
});
//Create server constant and store the http object in it
//No need to define server or use the http module like: const server = http.createServer(app);
//added an Listener Event on port 3000. When a request is made server console.log the request
app.listen(3000); 
 

