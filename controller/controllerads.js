const Userdata=require('../Model/User_Schema');
const Postdata=require('../Model/Items_Schema');
const fs=require('fs');
const path=require('path');

module.exports.deleteAds=function(req,res){
    Postdata.findById(req.query.id,function(err,post){
        //.id means coverting object id into String
        if(!post){
            req.flash('error','Error in finding the Ad');
            return res.redirect('back');
        }
        if(post.activeuser == req.user.id){
            Userdata.findById(req.user.id,function(err,data){
                for(var i=0;i<data.ads.length;i++){
                    //console.log(post.id == data.ads[i]);
                    if(post.id == data.ads[i]){
                        data.ads.splice(i,1);
                        data.save();
                    }
                }
            });
            if(post.image){
                fs.unlinkSync(path.join(__dirname,'../',post.image));
            }
            post.remove();
            req.flash('success','Ad deleted');
            return res.redirect('back');
        }
        else{
            req.flash('error','You cannot delete this Ad');
            return res.redirect('back');
        }
    });
};

module.exports.ads=function(req,res){
    //console.log(req.user._id);
    Postdata.find({activeuser:req.user._id},function(err,data){
        return res.render('ads',{postdata:data});
    });
};

module.exports.editads=function(req,res){
    Postdata.findById(req.query.id,function(err,post){

        if(post.activeuser == req.user.id){
            Postdata.findByIdAndUpdate(req.query.id,{
                    brand:req.body.brand,
                    title:req.body.title,
                    category:req.body.coption,
                    price:req.body.price,
                    description:req.body.description
            },function(err){
                req.flash('success','Your Ad is Updated');  
                return res.redirect('back');
            });
        }
        else{
            req.flash('error','You cannot Edit this Ad');
            return res.redirect('back');
        }
    });
};