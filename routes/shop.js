//import express module
const express = require(`express`);

const adminData = require(`./admin`)
//use Router method
const router = express.Router();
//imports the product controller file
const productController = require(`../controllers/products`)
//passess the 
router.get(`/`,productController.getProductReq)

module.exports = router;