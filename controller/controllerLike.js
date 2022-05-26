const Like=require('../Model/Likes_Schema');
const Item=require('../Model/Items_Schema');


module.exports.toggleLike=async function(req,res){
    try{
        //like/toggle/?id=adjks&type=Post
        let likeable;
        let deleted=false;

        //it fetch the Items ---> likes array
        likeable=await Item.findById(req.query._id).populate('likes');
 

        //it will find the existing like by user
        let exsitingUser=await Like.findOne({
            user:req.user._id,
            likeable:req.query._id//,
           // onModel:req.query.type
           
        });
 
       if(exsitingUser!=null){
            await likeable.likes.pull(exsitingUser._id);
            likeable.save();  
            await Like.findByIdAndDelete(exsitingUser._id);
            deleted=true;
           
            console.log("delete");
            return res.status(200).json({
                message:"Request successfull",
                data:{
                    deleted:deleted
                }
            });
        }
        else{
            let newlike=await Like.create({
                user:req.user._id,
                likeable:req.query._id
                /*,
                onModel:req.query.type*/
            });
            console.log("publihed");
            await likeable.likes.push(newlike._id);
            likeable.save();
            return res.status(200).json({
                message:"Request successfull",
                data:{
                    deleted:deleted
                }
            });
        }
    }
    catch(err){
        console.log(err);
    }
};