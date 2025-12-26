import express from 'express'
import { Add_fees,Get_fees } from '../Controllers/Fesscontroller.js'
const router =express.Router()

router.post("/add_fees",Add_fees)
router.get("/get_fees",Get_fees)
export default router