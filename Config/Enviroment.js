require('dotenv').config();

const fs=require('fs');
const rfs=require('rotating-file-stream');
const path=require('path');

const logDirector=path.join(__dirname,'../Production_logs');
fs.existsSync(logDirector) || fs.mkdirSync(logDirector);

const accesslogStream=rfs.createStream('access.log',{
    interval:'1d',
    path:logDirector
});

const development={
    name:"DeveloperMode",
    sessionSecret:"#cD234",
    db:"mongodb://127.0.0.1:27017/Shopcom",
    mailerSecretuser:"amangarg4764102@gmail.com",
    mailerSecretpass:"Amangarg102#$",
    googleclient:"352736610955-a64l86hu08sf418ro9hu1ptb7vj60e3t.apps.googleusercontent.com",
    googleSecret:"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",
    googleCallback:"http://localhost:8000/user/auth/google/callback",
    jwt_secret:"$5jsy$%",
    morgan:{
        mode:'dev',
        option:{stream:accesslogStream}
    },
    assests:path.join(__dirname,'../assests')
};

const production={
    name:"ProductionMode",
    sessionSecret:process.env.SHOPCOM_sessionSecret,
    db:process.env.SHOPCOM_db,    
    mailerSecretuser:process.env.SHOPCOM_MAILER_user,
    mailerSecretpass:process.env.SHOPCOM_MAILER_pass,
    googleclient:process.env.SHOPCOM_googleclient,
    googleSecret:process.env.SHOPCOM_googleSecret,
    googleCallback:process.env.SHOPCOM_googleCallback,
    jwt_secret:process.env.SHOPCOM_jwt_secret,
    morgan:{
        mode:'combined',
        option:{stream:accesslogStream}
    },
    assests:path.join(__dirname,'../public/assests')
};
//module.exports=development;
module.exports=eval(process.env.NODE_ENV)== undefined ? development: eval(process.env.NODE_ENV);
