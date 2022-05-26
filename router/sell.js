const passport=require('passport');
const express=require('express');
const sellrouter=express.Router();

const multer=require('multer');
const path=require('path');

//add upload image folder
const Stroage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now()+"-"+file.originalname);
    }
});

const upload=multer({storage:Stroage});

//display selling add btn on shopcom home page
sellrouter.get('/sellBucket',passport.checkAuthentication,require('../controller/controllersell').sellads);

sellrouter.post('/additem',upload.single('testimage'),require('../controller/controllersell').addtosell);

sellrouter.get('/cancel',require('../controller/controllersell').cancel);

module.exports=sellrouter;