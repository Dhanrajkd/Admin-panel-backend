import express from "express"
import { Addadmin,get_admin,check_admin,check_email,new_password } from "../Controllers/Admincontroller.js"
const router =express.Router()

router.post("/add_admin",Addadmin)
router.get("/get_admin",get_admin)
router.post("/check_admin",check_admin)
router.post("/check_email",check_email)
router.patch("/new_password",new_password)
router.get("/test", (req, res) => {
  res.send("admin route working");
});
export default router