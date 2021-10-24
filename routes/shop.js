//import express module
const express = require(`express`);

const adminData = require(`./admin`)
//use Router method
const router = express.Router();

router.get(`/`,(req,res,next)=>{
    //create a products variable to pass into our template so we can render dynamic data
    //In this variable we import our adminData router module, which has access to to products property which renders an arr of products 
    const products = adminData.products;
    //we then use the render method to pass in the products variable in the form of a key value pair
    //shop refers to the pug file we are rendering to
    //we can pass a string variable as doctitle 
    res.render(`shop`,{
                       prods: products,
                       pageTitle: `shop`,
                       path:`/`
                });
})

module.exports = router;