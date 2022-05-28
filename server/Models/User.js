const mongoose=require("mongoose");

const User = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model("users",User)