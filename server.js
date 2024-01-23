const express = require('express')

const app = express()

const db=require('./db');

const bodyparser=require('body-parser');

app.use(bodyparser.json());

const personRoute=require('./routes/PersonRouter');
app.use('/person',personRoute);

const menuRoutes=require('./routes/menuRouter');
app.use('/menu',menuRoutes);


/*app.get("/",function(req,res){
    res.send("Hello world");
})*/


app.listen(3000,()=>{
    console.log("Listening on port 3000");

})                 //port number app