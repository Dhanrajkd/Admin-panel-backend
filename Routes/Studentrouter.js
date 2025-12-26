
import express from 'express'
import {studentdata,get_studentdata,Delete_stu,edit_stu} from '../Controllers/Studentcontroller.js'
import { upload } from '../Middleware/Uploadfile.js'
const router=express.Router()
router.post("/addstudent",upload.single("image"),studentdata)
router.get("/get_studentdata",get_studentdata)
router.delete("/stu_delete/:id",Delete_stu)
router.put("/edit_stu/:id",edit_stu)
export default router