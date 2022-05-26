const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../Model/User_Schema');
const env=require('./Enviroment');

passport.use(new googleStrategy({
        clientID:env.googleclient,
        clientSecret:env.googleSecret,
        callbackURL:env.googleCallback
    },
    function(accessToken,refreshToken,profile,done){
        User.findOne({email:profile.emails[0].value}).exec(function(err,user){
            if(err){
                console.log("error in google oauth");
                return;
            }
            //console.log(accessToken,refreshToken);
            if(user){
                return done(null,user);
            }
            else{
               
                console.log(profile);
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex'),
                    userimage:profile.photos[0].value
                },function(err,data){
                    if(err){
                        console.log("error in adding data using google oauth");
                        return;
                    }
                    return done(null,data);
                });
            }
        });
    })
);

module.exports=passport;