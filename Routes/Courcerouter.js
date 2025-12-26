import express from "express"
import {Add_cource,Cource_data} from '../Controllers/Courcecontroller.js'
const router=express.Router()

router.post("/add_cource",Add_cource)
router.get("/cource_data",Cource_data)
export default router