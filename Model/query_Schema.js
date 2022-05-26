const mongoose=require('mongoose');

const QuerySchema=new mongoose.Schema({
    activeuser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        unique:true
    },
    
    query:[
    {   title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    }    
    ]
},{
    timestamps:true
});

const Querydata=mongoose.model('query',QuerySchema);

module.exports=Querydata;