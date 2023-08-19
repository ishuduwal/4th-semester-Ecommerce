import express from 'express';
import { GetAccessories, AddAccessories } from '../controller/Accessories.js';

const router = express.Router();

router.post('/', AddAccessories);
router.get('/', GetAccessories);
export default router