const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String
});
module.exports=mongoose.model("lists",ProductSchema);