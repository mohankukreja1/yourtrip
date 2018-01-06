const express=require('express')
const path=require('path')

const addroute=require('./route/add').route
const contactroute=require('./route/contact').route
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'frontend')));

app.use('/add',addroute)

app.use('/contact',contactroute)
app.listen(2222,()=>{
    console.log('server started at port 2222')
    }
)

