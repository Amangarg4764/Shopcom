const mongoose=require('mongoose');
const env=require('./Enviroment');
mongoose.connect(`mongodb://localhost:27017/${env.db}`);

const db=mongoose.connection

db.on('error',console.error.bind(console,'error in database connection'));

db.once('open',function(){
    console.log("Successful Connected to datbase");
});