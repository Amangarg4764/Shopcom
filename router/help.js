const express=require('express');
const router=express.Router();
const passport=require('passport');
const controller=require('../controller/controllerhelp');

router.get('/',passport.checkAuthentication,controller.help);

router.post('/queryadd',controller.addhelp);

module.exports=router;