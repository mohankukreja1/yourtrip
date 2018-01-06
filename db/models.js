const sequelize=require('sequelize')
const datatypes=sequelize.DataTypes

const db=new sequelize('trip','tripuser','trippass',{
    host:'localhost',
    dialect:'mysql'
})

const addtodb=db.define('addtodb',{
    id:{
        type:datatypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,

    },
    adults:{
        type:datatypes.STRING
    },
    check_in:{
        type:datatypes.STRING
    },
    check_out:{
        type:datatypes.STRING
    },
    children:{
        type:datatypes.STRING
    },
    comfort:{
        type:datatypes.STRING
    },
    country:{
        type:datatypes.STRING
    },
    email:{
        type:datatypes.STRING
    },
    hotel:{
        type:datatypes.STRING
    },
    message:{
        type:datatypes.STRING
    },
    name:{
        type:datatypes.STRING
    },
    rooms:{
        type:datatypes.STRING
    },





})

const contact=db.define('contact',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },
    message:{
        type:datatypes.STRING
    },
    name:{
        type:datatypes.STRING
    },
    email:{
        type:datatypes.STRING
    }
})
db.sync({force:true})

exports=module.exports={
    addtodb,contact
}
