const mongoose=require('mongoose');

const ItemSchema=new mongoose.Schema({
    activeuser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    brand:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ]
},{
    timestamps:true
});

const Itemsdata=mongoose.model('itemsdetails',ItemSchema);

module.exports=Itemsdata;