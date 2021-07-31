const express=require("express")
const routers=express.Router()
const Subscriber=require('../models/subscriber')

//get the subscribers
routers.get("/",async (req,res)=>{
    try{
   const subscribers=await Subscriber.find()
   res.json(subscribers)
}
   catch(err){
       res.json({message:err.message})
   }
})
//get the specific subscribers
routers.get("/:id",getSubscriber,(req,res)=>{
   res.json({message:res.subf})
})
//creating one of the subscribers
routers.post("/",async (req,res)=>{
    const {name,subscribeToChannel}=req.body
    const newSubscriber=new Subscriber({
        name:name,
        subscribeToChannel:subscribeToChannel,
    })
    try{
          const subsnew=await newSubscriber.save()
          res.json(subsnew)
    }
    catch(err){

    }
   
})
//update the subscribers
routers.patch("/:id",(req,res)=>{
   
})
//delete the subscribers
routers.delete("/:id",(req,res)=>{
   
})
async function getSubscriber(req,res,next){
    let sub1
    try{
        sub1=await Subscriber.findById(req.params.id)
        if(sub1===null)
        {
            return res.json({message:"subscriber not found"})
        }
    }
    catch(err){
        res.json({message:err.message})
    }
    res.subf=sub1
    next()
}

module.exports=routers