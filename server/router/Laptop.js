import express from 'express';
import { GetLaptop, AddLaptop, DeleteLaptop, EditLaptop} from '../controller/Laptop.js';

const router = express.Router();

router.post('/', AddLaptop);
router.get('/', GetLaptop);
router.put('/:id', EditLaptop);
router.delete('/:id', DeleteLaptop);
export default router