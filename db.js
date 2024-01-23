const mongoose=require('mongoose');

const mongoURL='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,               //'some parameter you need to write'
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to mongodb server");
});

db.on('error',(err)=>{
    console.log("mongodb connection error");
});
db.on('disconnected',()=>{
    console.log("mongodb disconnected");
})

//Export the database

module.exports=db;

