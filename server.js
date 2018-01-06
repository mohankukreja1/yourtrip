const express=require('express')
const path=require('path')

const addroute=require('./route/add').route
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'frontend')));

app.use('/add',addroute)
//for checking yet to be made a router
app.post('/contact',(req,res)=>{
    console.log(req);
})
app.listen(2222,()=>{
    console.log('server started at port 2222')
    }
)

