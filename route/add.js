const route=require('express').Router()
const addtodb=require('../db/models').addtodb

route.post('/',(req,res)=>{
    addtodb.create({
        adults:req.body.Adults,
        check_in:req.body.Check_in,
        check_out:req.body.Check_out,
        children:req.body.Children,
        comfort:req.body.Comfort,
        country:req.body.Country,
        email:req.body.Email,
        hotel:req.body.Hotel,
        message:req.body.Message,
        name:req.body.Name,
        rooms:req.body.Rooms

    }).catch((err)=>{
        console.log(err);
    })
    }
)



exports=module.exports={
    route
}