const mongoose=require('mongoose');

const User=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    ads:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'itemsdetails'
        }
    ],
    carts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'itemsdetails'
        }
    ],
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    pincode:{
        type:Number
    },
    userimage:{
        type:String
    }
},{
    timestamps:true
});

const Userdata=mongoose.model('user',User);

module.exports=Userdata;