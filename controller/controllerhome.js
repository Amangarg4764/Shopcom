const Userdata=require('../Model/User_Schema');
const Postdata=require('../Model/Items_Schema');


//display item on home page
module.exports.dis=function(req,res){
    //Populate fetch the data of the user from the _id given in activeuser 
   /* Postdata.find({}).populate('activeuser').exec(function(err,data){
        console.log(data);
        return res.render('shopcomPage',{postdata:data});
    });*/

    Postdata.find({},function(err,data){
        //console.log(data);
        return res.render('shopcomPage',{postdata:data});
    });
};

//add item to cart page
module.exports.addtocart=function(req,res){
    //console.log("add to cart"+req.query.id);
    Postdata.findById(req.query.id,function(err,data){
        if(err){
            req.flash('error',"error in finding post");
            console.log("error in finding post");
            return res.redirect('back');
        }
        //console.log(data);
        Userdata.findById(req.user.id,function(err,dates){
            if(err){
                console.log("error in finding user");
                return res.redirect('back');
            }
            var flag=0;
            for(var i=0;i<dates.carts.length;i++){
                if(dates.carts[i] == data.id){
                    req.flash('error','Item is already add to the Cart');
                    flag=1;
                }
            }
            if(flag==0){
                req.flash('success','Item is add to the Cart');
                dates.carts.push(data);
                dates.save();
            }
            //req.flash('success','Item is add to the Cart');
            return res.redirect('back');
        });
    });
    
};