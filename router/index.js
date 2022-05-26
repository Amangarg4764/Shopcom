const express=require('express');
const router=express.Router();
const passport=require('passport');


//Display login page
router.get('/',require('../controller/controllerlogin').loginpage);

//access to user on login
router.post('/signin',passport.authenticate('local',{failureRedirect : '/'}),require('../controller/controllerlogin').access);

//display all selling item on shopcom home page
router.get('/shopcomPage',passport.checkAuthentication,require('../controller/controllerhome').dis);

//Display signup page
router.get('/signup',require('../controller/controllersignup').signup);

//Add user to database
router.post('/adduser',require('../controller/controllersignup').addUser);

//signout by user
router.get('/signout',require('../controller/controllersignout'));

router.use('/',require('./sell'));
router.use('/api',require('./api'));
router.use('/user',require('./google_login'));
router.use('/likes',require('./like'));
router.use('/help',require('./help'));
router.use('/cart',require('./cart'));
router.use('/ads',require('./ads'));

module.exports=router;