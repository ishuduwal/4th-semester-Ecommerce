import express from 'express';
import { GetLaptop, AddLaptop } from '../controller/Laptop.js';

const router = express.Router();

router.post('/', AddLaptop);
router.get('/', GetLaptop);
export default router