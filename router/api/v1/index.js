const express=require('express');
const router=express.Router();

router.use('/loginUser',require('./userlogin'));

module.exports=router;