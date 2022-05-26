const Userdata=require('../Model/User_Schema');
const Postdata=require('../Model/Items_Schema');
const adsPublish=require('../mailer/adsPublish');

const publishemailworker=require('../worker/publishmails');
const queue=require('../Config/kue');

module.exports.addtosell=function(req,res){
    console.log(req.body);
    //Append ad to user account if he or she delete account the ads is also deleted
    Userdata.findById(req.user._id,function(err,ad){
        if(err)
        {
            console.log("err in find user to add ad");
        }
        if(ad){
            Postdata.create({
            activeuser:req.user._id,
            brand:req.body.brand,
            title:req.body.title,
            category:req.body.coption,
            price:req.body.price,
            description:req.body.description,
            image:req.file.path
            },async function(err,post){
                if(err){
                    console.log("add post on error");
                    return;
                }
                //console.log(post);
                ad.ads.push(post);
                ad.save();
               
                
                //adsPublish.newads(ad,post);

                let job=queue.create('publish',{ad:ad,post:post}).save(function(err){

                    if(err){
                        console.log("error in job worker");
                        return;
                    }
                    
                    console.log(job);
                });
                
                req.flash('success',"Your Ad is Published");
                return res.redirect('/shopcomPage');
            });
        }
        });
};

module.exports.cancel=function(req,res){
    return res.redirect('/shopcomPage');
};

module.exports.sellads=function(req,res){
    return res.render('shopcomsell');
};