const nodemailer=require('../Config/nodemailer');

module.exports.newads=function(ad,post){
    //console.log('inside node mailer',ad);
    let htmlString=nodemailer.renderTemplate({ad:post},'/new_ads_mailer.ejs');
    
    nodemailer.transporter.sendMail({
        from:"amangarg4764102@gmail.com",
        to:ad.email,
        subject:"New ads Published!",
        html:htmlString
    },function(err,info){
        if(err){
            console.log("error in send the mail",err);
            return;
        }
        //console.log("mail send to : ",info);
        return;
    });
};