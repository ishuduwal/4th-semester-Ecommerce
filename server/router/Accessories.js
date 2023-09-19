import express from 'express';
import { GetAccessories, AddAccessories, DeleteAccessories } from '../controller/Accessories.js';

const router = express.Router();

router.post('/', AddAccessories);
router.get('/', GetAccessories);
router.delete('/', DeleteAccessories);
export default router