import express from 'express';
import { GetLaptop, AddLaptop, DeleteLaptop } from '../controller/Laptop.js';

const router = express.Router();

router.post('/', AddLaptop);
router.get('/', GetLaptop);
router.delete('/:id', DeleteLaptop);
export default router