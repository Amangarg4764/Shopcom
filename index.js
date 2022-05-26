const port=8000;
const express=require('express');
const app=express();
require('./Config/helper_assests')(app);
const path=require('path');
const env=require('./Config/Enviroment');
const logger=require('morgan');
const cookieParser=require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const database=require('./Config/mongoose');
const flash=require('connect-flash');
const customMW=require('./Config/flashMiddleware');
const passport=require('passport');
const passportLocal = require('./Config/passport-local');
const passportJWT=require('./Config/passport-local');
const passportGoogle=require('./Config/passport-google-oauth2-strategy');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));
app.use(express.static(env.assests));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use(session({
    name : 'login',
    secret : env.sessionSecret,
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (24*7 * 10 * 100 * 100)
    },
    store : MongoStore.create({
        mongoUrl:'mongodb://localhost:27017/Shopcom',
        mongooseConnect : database,
        autoRemove : 'disable'
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(customMW.setflash);
app.use(passport.setAuthenticatedUser);
app.use(logger(env.morgan.mode,env.morgan.option));
app.use('/',require('./router/index'));

app.get('/profile',passport.checkAuthentication,function(req,res){
    return res.render('userprofile');
});


app.listen(port,function(err){
    if(err){
        console.log("err in running the server");
        return;
    }
    console.log("server is runuing at port no: ",port);
});