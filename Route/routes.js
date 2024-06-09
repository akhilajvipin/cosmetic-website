const express = require('express');

const productController = require('../Controller/productController'); 

const userController  = require('../Controller/userController')

const wishlistController = require('../Controller/wishlistContriller')

const cartController = require('../Controller/cartContolller')

const optionController = require('../Controller/optionController')


const jwtMiddleware = require('../Middleware/jwtmiddleware');


const router = new express.Router();
// to get the all products 

router.get('/all-products', productController.getAllProducts); 

//to register 
router.post('/user/register',userController.register)

//to login
router.post('/user/login',userController.login)

//to get a product
router.get('/view-product/:id',productController.getProduct)

//add to wishlist 
router.post('/wishlist',jwtMiddleware,wishlistController.addWishlist)

//get wishlist product
router.get('/get-wishlist',jwtMiddleware, wishlistController.getWishlist)

//to delete wishlist 
router.delete('/deleteitem/:id',jwtMiddleware, wishlistController.deleteFromWishlist)

//to  add to cart
router.post('/add-cart',jwtMiddleware, cartController.addtocart)

//to get cart products
router.get('/get-cart',jwtMiddleware,cartController.getCart)

//to delete cart items 
router.delete('/delete-cart/:id',jwtMiddleware,cartController.deletecart)

//increment function
router.get('/increment-cart/:id',jwtMiddleware,cartController.incrementCart)

//decrement function
router.get('/decrement-cart/:id',jwtMiddleware,cartController.decrementCart)

//suggestion
router.post('/suggestion',jwtMiddleware,optionController.suggestions)







module.exports = router;
