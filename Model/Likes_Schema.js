const mongoose=require('mongoose');

const likeModel=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    //this define the object id of the liked object
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'itemsdetails'
        //required:true,
        //refPath:'onModel'
    },
    //this define the type of object which is like able
    /*onModel:{
        type:String,
        required:true,
        enum:['itemsdetails']
    }*/
});

const Like=mongoose.model('Like',likeModel);

module.exports=Like;