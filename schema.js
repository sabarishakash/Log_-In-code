const mongoose=require("mongoose")
const data_schema=mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})
module.exports=mongoose.model("crud1_db",data_schema)