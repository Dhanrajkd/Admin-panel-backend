import Fees from '../Models/Feesmodels.js'

export const Add_fees=async(req,res)=>{
    try{
        let user=new Fees(req.body)
        await user.save()
        res.json({success:true,message:"Data added"})
    }
    catch(err){
        console.log(err)
    }
}
export const Get_fees=async (req,res)=>{
    try{
        const data=await Fees.find()
        if(!data){
            console.log("error")
        }
        res.json({success:true,data})
    }
    catch(err){
        console.log("error")
    }
}