import Course from '../Models/Courcemodels.js'

export const Add_cource=async (req,res)=>{
    try{
        console.log(req.body)
        const user=new Course(req.body)
        await user.save()
        res.json({success:true,message:"Data added"})
    }
    catch(err){
        console.log(err)
    }
}
export const Cource_data=async (req,res)=>{
    try{
        let data=await Course.find()
        if(!data){
           return console.log("error")
        }
        console.log("working")
        res.json({success:true,data})
    }
    catch(err){
        console.log(err)
    }
}