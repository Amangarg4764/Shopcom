const Query=require('../Model/query_Schema');


module.exports.help=async function(req,res){
    let an=await Query.find({activeuser:req.user.id});
    
    if(an.length==0){
        return res.render('help',{query:[]});
    }else{
        return res.render('help',{query:an[0].query});
    }
    
};

module.exports.addhelp=async function(req,res){
    let qy=await Query.findOne({activeuser:req.user._id});
    //console.log(req.user._id);
    let query={
        title:req.body.title,
        description:req.body.description
    };
    if(qy == null){
        await Query.create({
            activeuser:req.user._id,
            query:query
        });
    }
    else{
        //console.log(query);
        qy.query.push(query);
        qy.save();
    }
    req.flash('success','Query Added');
    return res.redirect('back');
};