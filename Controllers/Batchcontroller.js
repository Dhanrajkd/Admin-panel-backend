import Batch from '../Models/Batchmodels.js'

export const Add_batch=async (req,res)=>{
    try{
        let user=await new Batch(req.body)
        await user.save()
        res.json({success:true, message:"Data added"})
    }
    catch(err){
        console.log(err)
    }
}
export const Get_batch=async (req,res)=>{
    try{
        let data=await Batch.find()
        if(!data){
            console.log("error")
        }
        res.json({success:true,data})
    }
    catch(err){
        console.log(err)
    }
}