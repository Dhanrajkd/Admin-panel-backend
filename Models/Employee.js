import mongoose from "mongoose";

const employeeschema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    role:{type:String,required:true},
    Specilization:{type:String,required:true},
    image:{type:String}
})

export default mongoose.model("Employee",employeeschema)