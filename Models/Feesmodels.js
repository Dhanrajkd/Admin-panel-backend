import mongoose  from "mongoose";

const Fessschema=mongoose.Schema({
    studentName: {type:String,require:true},
    course: {type:String,require:true},
    totalFees: {type:String,require:true},
    paidAmount: {type:String,require:true},
    paymentMode: {type:String,require:true},
},
    {
        timestamps:true
    }
)

export default mongoose.model("Fees",Fessschema)