import multer from "multer";
import path from "path"

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"employee_img/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

export const employee_img= multer({
    storage,
     limits: { fileSize: 2 * 1024 * 1024 }, 
     fileFilter:(req,file,cb)=>{
        const allowed = /jpeg|jpg|png/;
        const isValid =
        allowed.test(file.mimetype) &&
        allowed.test(path.extname(file.originalname));
        cb(isValid ? null : new Error("Only images allowed"), isValid);
     }
})