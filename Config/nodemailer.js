const nodemailer=require('nodemailer');
const ejs=require('ejs');
const path=require('path');
const env=require('./Enviroment');
const mailerUser=env.mailerSecretuser;
const mailerPass=env.mailerSecretpass;
let transporter=nodemailer.createTransport({
    service:'gmail',
    host:'smpt.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:mailerUser,
        pass:mailerPass
    }
});


let renderTemplate=(data, relativePath)=>{
    let mailHtml;
    ejs.renderFile(
        path.join(__dirname,'../Views/mailer',relativePath),
        data,
        function(err,template){
            if(err){
                console.log("error in sending email");
                return;
            }
            mailHtml=template;
        }
    );
    return mailHtml;
};

module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
};