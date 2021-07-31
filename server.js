require("dotenv").config()
const express=require("express")
const app=express()
const mongoose=require("mongoose")

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useNewUrlParser:true,
useCreateIndex: true,
useUnifiedTopology:true,
useFindAndModify:false})

const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>{
    console.log("database connected")
})
app.use(express.json())

const subsRouters=require('./routes/subscribers')
app.use('/subscribers',subsRouters)
app.listen(3000,()=>{
    console.log("server started")
})