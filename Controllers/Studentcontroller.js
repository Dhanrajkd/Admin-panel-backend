import Student from '../Models/Studentsdata.js'

export const studentdata=async(req,res)=>{
    try {
      const imageUrl = req.file
        ? `http://localhost:4000/uploads/${req.file.filename}`
        : "";

      const student = new Student({
        name: req.body.name,
        email: req.body.email,
        course: req.body.course,
        image: imageUrl,
      });
      await student.save();
      res.json({success:true})
    }
    catch(err){
        console.log(err)
    }
}
export const get_studentdata=async(req,res)=>{
    try{
        const data=await Student.find()
        if(!data){
            return res.json({success:false})
        }
        console.log("data received")
        res.json({success:true,data})
    }
    catch(err){
        res.status(500).json({message:false})
    }
}
export const Delete_stu=async (req,res)=>{
    try{
        const {id}=req.params
        await Student.findByIdAndDelete(id)
        res.json({success:true})
    }
    catch(err){
        console.log(err)
    }
}
export const edit_stu=async(req,res)=>{
    try{
        const {id}=req.params
        console.log(id)
       let data= await Student.findByIdAndUpdate(id,req.body,{new:true})
       console.log(data)
        res.json({success:true})
    }
    catch(err){
        console.log(err)
    }
}