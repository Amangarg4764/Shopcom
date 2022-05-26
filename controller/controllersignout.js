module.exports=function(req,res){
    req.logOut();
    req.flash('success','Thank you for visiting Our site');
    return res.redirect('/');
};