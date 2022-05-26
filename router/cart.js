const express=require('express');
const router=express.Router();
const passport=require('passport');

//go to cart
router.get('/',passport.checkAuthentication,require('../controller/controllercart').discart);

//delete item from cart
router.get('/addtocarttodelete',passport.checkAuthentication,require('../controller/controllercart').deletefromCart);

//add item to cart
router.get('/addtocart',passport.checkAuthentication,require('../controller/controllerhome').addtocart);


module.exports=router;