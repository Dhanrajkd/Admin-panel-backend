import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import multer from 'multer'
import studentroutes from "./Routes/Studentrouter.js"
import Employeerouter from "./Routes/Employeerouter.js"
import Admins from './Routes/Adminrouter.js'
import Course from "./Routes/Courcerouter.js"
import Batch from "./Routes/Batchrouter.js"
import Fees from './Routes/Feesrouter.js'
const app=express()
const PORT = process.env.PORT || 4000;
app.use(express.json())
app.use(cors({
  origin: "*",
}));
app.listen(PORT,()=>{
    console.log(`server running in${PORT}`)
})
app.get('/',(req,res)=>{
    res.send("server is running")
})


mongoose.connect("mongodb+srv://dhanrajd158_db_user:test1234@cluster0.dmc0nz2.mongodb.net/")
.then(()=>{
    console.log("Db connected")
})
.catch((err)=>{
    console.log(err)
})
app.use("/api/admin", Admins);
app.use("/api/admin/uploads", express.static("uploads"));
app.use("/employee_img",express.static("employee_img"))
app.use('/api/admin',studentroutes)
app.use("/",Employeerouter)
app.use("/",Course)
app.use("/",Batch)
app.use("/",Fees)