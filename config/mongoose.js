const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chetanbeast:Chetan%4054@cluster0.vlsaoth.mongodb.net/xenon");


const db = mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to database"));

db.once('open',function(){
    console.log('connected to Database : MongoDB')
});
module.exports=db;