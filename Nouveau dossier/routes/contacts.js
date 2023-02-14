const express=require("express");
const contact = require("../models/contact.js");
const router =express.Router();

router.get('/',(req,res,next)=>{
    res.json({message:'hello'});
});

router.post('/',(req,res,next)=>{
    var Contact=new contact({fullName:req.body.contactName,phone:req.body.num});
    Contact.save((err,newContact)=>{
            if(err){
                console.log(`There is an error ${err}`);
            } else {
                //console.log(newContact);
                res.json(newContact);
            }
    });
    // res.json({message:"hello"});
})


module.exports=router;