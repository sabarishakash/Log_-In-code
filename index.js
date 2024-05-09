const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const data_schema=require("./schema")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.db)
.then(()=>{
    console.log("Database is connected");
}).catch(()=>{
    console.log("Database is not connected");
})
app.use(express.json())
app.use(cors())
app.get("/get",async(req,res)=>{
    
    const find_data= await data_schema.find({})
    res.json(find_data)
})
app.post("/create",async(req,res)=>{
    sum=req.body.password.toString()
    const hasspassword=await bcrypt.hash(sum, 7)
    const data=new data_schema({
        ...req.body,
        password:hasspassword,
    })
const save_data= await data.save()
res.json(save_data)

})
app.put("/update/:id",async(req,res)=>{
    const update_data=await data_schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json({message:"updated successfully",update:update_data})
})
app.delete("/delete/:id",async(req,res)=>{
    const delete_data=await data_schema.findByIdAndDelete(req.params.id)
    res.json({message:"deleted successfully",del:delete_data})
})

app.post("/login",async(req,res)=>{
    const usermail=await data_schema.findOne({email: req.body.email})
    if(!usermail) return res.json("Usermail not valid")

    const userpassword= await bcrypt.compare(
        req.body.password,
        usermail.password
    )
    if(!userpassword)
    return res.json({message: "Not valid",})

    res.json({message: "login success"})

})

app.listen(process.env.PORT,()=>{
    console.log("Server is connected:2007");
})