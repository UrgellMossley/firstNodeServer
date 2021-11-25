//File which contains all our logic for routing and managing our product data
const Product = require(`../models/product`)
exports.addProductGetReq = (req,res,next)=>{
    //To send a static HTML file we were doing it like this:
    /* res.sendFile(path.join(routeDir,`views`,`add-product.html`)) */
    //Now we are serving dynamic templates we use the render() method. We define the template we want to serve
    //We also pass in an object with properties which are passed into the pug file for use later on
    //using path we can dynamically alter the template according to the path defined. So we can decide for example to make an li have a class 
    //..depending if the request is to the defined path in this case: /admin/add-product
    res.render(`admin/add-product`,{
                              pageTitle: `add-products`,
                              path: `/admin/add-product`,
                              activeProduct: true,
                              formsCss: true
                            })
}

exports.addProductPostReq = (req,res,next)=>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description
    const product = new Product(title,imageUrl,price,description)
    product.save();
    res.redirect(`/`)
}



exports.getAdminProductReq =(req,res,next)=>{
    const products = Product.fetchAll(products=>{
        res.render(`admin/products`,{
            prods: products,
            pageTitle: `Products`,
            path: `/admin/products`
        })
    })
}



