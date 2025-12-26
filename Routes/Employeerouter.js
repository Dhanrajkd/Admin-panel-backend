import express from 'express'
import {employeedata,get_empdata,Delete_emp,edit_emp} from '../Controllers/Employeecontroller.js'
import {employee_img} from '../Middleware/Employee_img.js'
const router=express.Router()

router.post("/add_employee",employee_img.single("image"),employeedata)
router.get("/get_empdata",get_empdata)
router.delete("/emp_delete/:id",Delete_emp)
router.put("/edit_emp/:id",edit_emp)
export default router