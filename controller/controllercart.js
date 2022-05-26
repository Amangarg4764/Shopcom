const Userdata=require('../Model/User_Schema');
const Postdata=require('../Model/Items_Schema');

module.exports.discart=function(req,res){   
    Userdata.findById(req.user.id).populate('carts').exec(function(err,data){
        //console.log(data.carts);
        
        return res.render('cart',{cart:data.carts,totalItem:data.carts.length});
    });   
};

module.exports.deletefromCart=function(req,res){
    Userdata.findById(req.user.id,function(err,data){
        for(var i=0;i<data.carts.length;i++){
            if(req.query.id == data.carts[i]){
                console.log(data.carts.splice(i,1));
                req.flash('success','Item is deleted from Cart');
                data.save();
            }
        }
        
        return res.redirect('back'); 
    });
};