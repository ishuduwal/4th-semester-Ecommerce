import express from "express";

import {GetCart,AddCart, GetAllCart, DeleteCart} from '../controller/Cart.js'

const router = express.Router();


router.post("/get", GetCart);
router.post("/add", AddCart);
router.post("/getallcart", GetAllCart);
router.post("/delete", DeleteCart);
export default router;
