
import mongoose from "mongoose"
const studentschema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    course:{type:String,required:true},
    image:{type:String},
},
    {
        timestamps:true
    }
)

 export default mongoose.model("Student",studentschema)