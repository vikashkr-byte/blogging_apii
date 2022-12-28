import mongoose, { Schema } from "mongoose";
const BSchema=mongoose.Schema

const blogSchema=new BSchema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
})
export default mongoose.model("Blog",blogSchema)