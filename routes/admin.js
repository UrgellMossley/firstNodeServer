const express = require(`express`);

const router = express.Router();
//import file from the controllers dir, which exports routing logic to this file
const adminController = require(`../controllers/admin`)


//we can use the same path as we are using different methods. We are using path filtering in the app.js file 
//routing depends on the request method. POST/GET
router.get(`/add-product`,adminController.addProductGetReq)

router.get(`/products`,adminController.getAdminProductReq)

//by using routing middleware we can determine what happens according to what type of request is made ie. get v post
router.post(`/add-product`, adminController.addProductPostReq)


//exports the router to other files which can import this routing logic
module.exports = router;

