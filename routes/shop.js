//import express module
const express = require(`express`);

//import path core module that allows us to build the correct path to serve file from Root of directory we are working in
const path = require(`path`)

const routeDir = require(`../util/path`)

//use Router method
const router = express.Router();

router.get(`/`,(req,res,next)=>{
    console.log(`shop front page`);
    //as there is a response sent we dont need to use next()
    //nb no need to set headers nor to use res.write!
    //dirname points to the path to the file in which we use it. In this case routes
    //../tells path to go up one level which means the root folder
    //Next argument is views folder, and finally tells it to server shop.html file
    res.sendFile(path.join(routeDir ,`views`, `shop.html`));
})

module.exports = router;