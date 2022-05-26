const express=require('express');
const router=express.Router();
const passport=require('passport');

//display all user ads on its ads page
router.get('/',passport.checkAuthentication,require('../controller/controllerads').ads);

//delete user ads by user
router.get('/deleteAds',require('../controller/controllerads').deleteAds);

//edit your ads
router.post('/editAds',require('../controller/controllerads').editads);

module.exports=router;