import Admin from '../Models/Adminmodels.js'

export const Addadmin=async (req,res)=>{
        try{
            let user=new Admin(req.body)
            await user.save()
            res.json({success:true,message:"Data added"})
        }
        catch(err){
            console.log(err)
        }
}
export const get_admin=async (req,res)=>{
    try{
        let data=await Admin.find()
        if(!data){
            console.log("No data found")
        }
        res.json({success:true,data})
    }
    catch(err){
        console.log(err)
    }
}
export const check_admin=async (req,res)=>{
    try{
        console.log("Verify_working")
        const {email,password}=req.body
        const isemail=await Admin.findOne({email:email})
        const ispassword=await Admin.findOne({password:password})
        const name=isemail.name
        console.log(name)
        if(!isemail){
            return res.json({success:false})
        }
        if(!ispassword){
            return res.json({success:false})
        }
         res.json({success:true,name})
    }
    catch(err){
        
    }
}
export const check_email=async (req,res)=>{
    try{
        const {email}=req.body
       
        const isemail=await Admin.findOne({email:email})
        
         console.log(isemail)
        if(isemail){
            return res.json({success:true})
        }
        return res.json({success:false})
    }
    catch(err){
        console.log(err)
    }
}
export const new_password=async (req,res)=>{
    try{
        const {email,password}=req.body
        const id=await Admin.findOne({email:email})
        console.log(id)
        if(id){
            await Admin.findOneAndUpdate({email},{password},{new:true})
            return res.json({success:true})
        }
        return res.status(200).res.json({success:true})
    }
    catch(err){
        console.log(err)
    }
}