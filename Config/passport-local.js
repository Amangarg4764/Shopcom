const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../Model/User_Schema');


passport.use(new LocalStrategy({
    usernameField : 'email',
    passReqToCallback:true
},
    function(req,email,password,done){
        User.findOne({email:email},function(err,user){
            
            if(err){
                console.log('err');
                return done(null,false);
            }
            if(!user || user.password!=password){
                req.flash('error',"Invalid Email / Password");
                console.log('Invalid User');
                return done(null,false);
            }
            return done(null,user);
        });
    }

));


passport.serializeUser(function(user,done){
    done(null,user.id);
});




passport.deserializeUser(function(id,done){
    //de
    User.findById(id,function(err,user){
        if(err){
            console.log('err');
            return;
        }
        return done(null,user);
    });
});


passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/');
};


passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
};

module.exports = passport;