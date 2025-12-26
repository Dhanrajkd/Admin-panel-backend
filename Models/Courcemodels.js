import mongoose  from "mongoose";

const Courceschema=mongoose.Schema({
    name: {type:String,require:true},
    duration: {type:String,require:true},
    fee: {type:String,require:true},
    status: {type:String,require:true},
})

export default mongoose.model("Course",Courceschema)