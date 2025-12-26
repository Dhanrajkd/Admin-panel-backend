import Employee from '../Models/Employee.js'

export const employeedata=async(req,res)=>{
    try{
        const imageurl=req.file ?
        `http://localhost:4000/employee_img/${req.file.filename}`
        :""
        const employee=new Employee({
            name:req.body.name,
            email:req.body.email,
            role:req.body.role,
            Specilization:req.body.Specilization,
            image:imageurl
        })
        console.log("working")
        await employee.save()
        res.json({success:true,message:'Data added'})
    }
    catch(err){
        console.log(err)
    }
}
export const get_empdata=async (req,res)=>{
    try{
        const data=await Employee.find()
        console.log("working")
        res.json({success:true,data})
    }
    catch{
        console.log("working")
    }
}
export const Delete_emp=async (req,res)=>{
    try{
        const {id}=req.params
        await Employee.findByIdAndDelete(id)
        res.json({success:true})
    }
    catch(err){
        console.log(err)
    }
}
export const edit_emp=async(req,res)=>{
    try{
        const {id}=req.params
        console.log(id)
       let data= await Employee.findByIdAndUpdate(id,req.body,{new:true})
       console.log(data)
        res.json({success:true})
    }
    catch(err){
        console.log(err)
    }
}