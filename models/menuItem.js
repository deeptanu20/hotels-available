const mongose=require('mongoose');
const menuItemSchema=new mongose.Schema({
      name:{
        type:String,
        required:true,
      },

      price:{
        type:Number,
        required:true,
      },

      taste:{
        type:String,
        enum:["sweet","sour","spicy"],
        required:true,
      }

})

const MenuItem=mongose.model('MenuItem',menuItemSchema);
module.exports=MenuItem;