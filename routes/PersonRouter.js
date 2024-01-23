const express=require('express');
const router=express.Router();

const person=require('./../models/person');

router.post("/",async(req,res)=>{
    try{
       const data=req.body;

       const newperson= new person(data);


       const response=await newperson.save();

       console.log("data saved");

       res.status(500).json(response);
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'internal error'});
    }
})

router.get("/",async(req,res)=>{
    try{
        const data= await person.find();
        console.log("data fatched");

        res.status(500).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal error'});
    }
})

module.exports=router;
