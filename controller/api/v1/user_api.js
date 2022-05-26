const User=require('../../../Model/User_Schema');
const jwt=require('jsonwebtoken');
const env=require('../../../Config/Enviroment');
module.exports=async function (req,res){
    try{
        let user=await User.findOne({email:req.query.email});

        if(!user || user.password != req.query.password){
            return res.status(422).json({
                message:"Invalid User or Password"
            });
        }

        return res.status(200).json({
            message:"Signin sucessfully and your token is safe!",
            data:{
                token:jwt.sign(user.toJSON(),env.jwt_secret,{expiresIn:'360000'})
            }
        });
    }catch(err){
        return res.status(500).json({
            message:"Server error"
        });
    }
};