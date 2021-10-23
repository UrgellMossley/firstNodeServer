const express = require(`express`);

const router = express.Router();

const path = require(`path`)

const routeDir = require(`../util/path`)

//we can use the same path as we are using different methods. We are using path filtering in the app.js file 
//routing depends on the request method. POST/GET
router.get(`/add-product`,(req,res,next)=>{
    console.log(`first`);
    //as there is a response sent we dont need to use next()
    //nb no need to set headers nor to use res.write!
    res.sendFile(path.join(routeDir,`views`,`add-product.html`))
    //if you send a response you dont want to send next();
})

//by using routing middleware we can determine what happens according to what type of request is made ie. get v post
router.post(`/add-product`,(req,res,next)=>{
    console.log(req.body)
    res.redirect(`/`)
})

module.exports = router;