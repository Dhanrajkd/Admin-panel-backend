import mongoose from 'mongoose'

const adminschema=mongoose.Schema({
    name:{type:String,require:true},
    password: {type:String,require:true},
    email:{type:String,require:true},
    role:{type:String,require:true},
})

export default mongoose.model("Admin",adminschema)