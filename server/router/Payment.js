import express from "express";
import { AddPayment, GetAllPayment, GetPayment, VerifyPayment } from "../controller/Payment.js";



const router = express.Router();

router.post("/get", GetPayment);
router.post("/add", AddPayment);
router.post("/getallpayment", GetAllPayment);
router.post('/verify', VerifyPayment);
export default router;