const express=require('express');
const router=express.Router();

router.post('/',require('../../../controller/api/v1/user_api'));

module.exports=router;