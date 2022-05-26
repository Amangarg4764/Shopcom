const fs=require('fs');
const path=require('path');
const env=require('./Enviroment');

module.exports=(app)=>{
    app.locals.assestPath=function(filepath){
        if(env.name=="DeveloperMode"){
            return filepath;
        }
       
        return '/'+JSON.parse(fs.readFileSync(path.join(__dirname,'../public/assests/rev-manifest.json')))[filepath];
    };
};