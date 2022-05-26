const Userdata=require('../Model/User_Schema');

module.exports.signup=function(req,res){
    if(req.isAuthenticated()){
        req.flash('success','You Are already logged In');
        return res.redirect('/shopcomPage');
    }
      return res.render('signup');
};

module.exports.addUser=function(req,res){
    if(req.body.upassword != req.body.ucpassword){
        req.flash('error','Password does not match');
        console.log("Password did not match");
        return res.redirect('back');
    }
    Userdata.findOne({email:req.body.uemail},function(err,user){
        if(err){
            console.log("Error in adding data");
            return ;
        }
        if(!user){
            Userdata.create({
                email:req.body.uemail,
                password:req.body.upassword,
                name:req.body.uname,
                userimage:"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            },function(err,newdata){
                console.log(req.body);
                if(err){
                    console.log("Error in adding email id in database");
                    return;
                }
                req.flash('success','Account Created');
                return res.redirect('/');
            });
        }
        else{
            req.flash('error','User is already created');
            console.log("User is already created");
            return res.redirect('back');
        }
    });
};