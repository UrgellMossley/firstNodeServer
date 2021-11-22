const express = require(`express`);

const router = express.Router();
//import file from the controllers dir, which exports routing logic to this file
const productController = require(`../controllers/products`)


//we can use the same path as we are using different methods. We are using path filtering in the app.js file 
//routing depends on the request method. POST/GET
router.get(`/add-product`,productController.addProductGetReq)

//by using routing middleware we can determine what happens according to what type of request is made ie. get v post
router.post(`/add-product`, productController.addProductPostReq)


//exports the router to other files which can import this routing logic
module.exports = router;

