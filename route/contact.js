const route=require('express').Router()
const addtodb=require('../db/models').addtodb



route.post('/',(req,res)=>{
    console.log(req);
})


exports=module.exports={
    route
}