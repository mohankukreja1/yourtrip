const route=require('express').Router()
const contact=require('../db/models').contact



route.post('/',(req,res)=>{
    contact.create({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    }).catch((err)=>{
        console.log(err);
    })
})


exports=module.exports={
    route
}