//import express module
const express = require(`express`);

const adminData = require(`./admin`)
//use Router method
const router = express.Router();
//imports the shop controller file 
const shopController = require(`../controllers/shop`)
//passess the 

router.get('/',shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get(`/orders`,shopController.getOrdersReq)
module.exports = router;