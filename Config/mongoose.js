const mongoose=require('mongoose');
const env=require('./Enviroment');


mongoose.connect(process.env.SHOPCOM_db || env.db);

const db=mongoose.connection

db.on('error',console.error.bind(console,'error in database connection'));

db.once('open',function(){
    console.log("Successful Connected to datbase");
});