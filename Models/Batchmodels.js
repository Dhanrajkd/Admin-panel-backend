import mongoose from 'mongoose'

const Batchschema=mongoose.Schema({
    batchName: {type:String,require:true},
    course: {type:String,require:true},
    trainer: {type:String,require:true},
    startDate: {type:String,require:true},
    time:{type:String,require:true},
    studentsCount: {type:String,require:true},
    status: {type:String,require:true},
})

export default mongoose.model("Batch",Batchschema)