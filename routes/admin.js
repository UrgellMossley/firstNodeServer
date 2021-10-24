const express = require(`express`);

const router = express.Router();

const products = []

//we can use the same path as we are using different methods. We are using path filtering in the app.js file 
//routing depends on the request method. POST/GET
router.get(`/add-product`,(req,res,next)=>{
    //To send a static HTML file we were doing it like this:
    /* res.sendFile(path.join(routeDir,`views`,`add-product.html`)) */
    //Now we are serving dynamic templates we use the render() method. We define the template we want to serve
    //We also pass in an object with properties which are passed into the pug file for use later on
    //using path we can dynamically alter the template according to the path defined. So we can decide for example to make an li have a class 
    //..depending if the request is to the defined path in this case: /admin/add-product
    res.render(`add-product`,{prod: products,
                              pageTitle: `add-products`,
                              path: `/admin/add-product`,
                              activeProduct: true,
                              formsCss: true
                            })
})

//by using routing middleware we can determine what happens according to what type of request is made ie. get v post
router.post(`/add-product`,(req,res,next)=>{
    products.push({title: req.body.title});
    res.redirect(`/`)
})


//exports the router to other files which can import this routing logic
/* module.exports = router; */
//We are doing this another way (will learn more later)
exports.routes = router;
exports.products = products;