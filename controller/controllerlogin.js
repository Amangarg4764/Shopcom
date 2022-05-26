module.exports.loginpage=function(req,res){
    if(req.isAuthenticated()){
        req.flash('success','You Are already logged In');
        return res.redirect('/shopcomPage');
    }
    return res.render('login');
};

module.exports.access=function(req,res){
    req.flash('success','Logged in Successfully');
    return res.redirect('/shopcomPage');
};

/*app.post('/signin',function(req,res){
    Userdata.findOne({email:req.body.uemail},function(err,user){
        if(err){
            console.log("error found");
            return;
        }
        if(user){
            if(user.password != req.body.upassword){
                //password did not matched
                return redirect('back');
            }
            res.cookie('name',user.name);
            res.redirect('/shopcomPage');
        }
        //If user is not there
        else{
            return res.redirect('back');
        }
    });
});*/