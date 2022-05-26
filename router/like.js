const express=require('express');
const router=express.Router();

const likecontroller=require('../controller/controllerLike');

router.post('/toggle',likecontroller.toggleLike);


module.exports=router;