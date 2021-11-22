//File which contains all our logic for routing and managing our product data
const Product = require(`../models/product`)
exports.addProductGetReq = (req,res,next)=>{
    //To send a static HTML file we were doing it like this:
    /* res.sendFile(path.join(routeDir,`views`,`add-product.html`)) */
    //Now we are serving dynamic templates we use the render() method. We define the template we want to serve
    //We also pass in an object with properties which are passed into the pug file for use later on
    //using path we can dynamically alter the template according to the path defined. So we can decide for example to make an li have a class 
    //..depending if the request is to the defined path in this case: /admin/add-product
    res.render(`add-product`,{
                              pageTitle: `add-products`,
                              path: `/admin/add-product`,
                              activeProduct: true,
                              formsCss: true
                            })
}

exports.addProductPostReq = (req,res,next)=>{
    const product = new Product(req.body.title)
    product.save();
    res.redirect(`/`)
}

exports.getProductReq = (req,res,next)=>{
    //takes products as an argument to callback fn and uses render middleware to generate res.
    const products = Product.fetchAll(products=>{
        res.render(`shop`,{
            prods: products,
            pageTitle: `shop`,
            path:`/`,
            hasProducts: products.length > 0.,
            activeShop: true,
            productCss: true
         });
    })  
    //we then use the render method to pass in the products variable in the form of a key value pair
    //shop refers to the ejs file we are rendering to
    //we can pass a string variable as doctitle 
    //as this is Hbs we have to push conditional logic as truthy or flasy values as Key value pair

}

