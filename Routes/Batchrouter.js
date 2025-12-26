import express from "express"
const router=express.Router()
import {Add_batch,Get_batch} from '../Controllers/Batchcontroller.js'

router.post("/add_batch",Add_batch)
router.get("/get_batch",Get_batch)
export default router