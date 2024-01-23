const express=require('express');
const router=express.Router();

const MenuItem=require('../models/menuItem');

router.post("/",async(req,res)=>{
    try{
        const data=req.body;

        const newmenu= new MenuItem(data);


        const response1=await newmenu.save();

        console.log("data saved");

        res.status(500).json(response1);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'error occur'});
     }

})

router.get("/",async(req,res)=>{
    try{
       const data=await MenuItem.find();
       console.log("data is fatched");
       res.status(500).json(response1);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internally error'});    

    }
    
})

module.exports=router;