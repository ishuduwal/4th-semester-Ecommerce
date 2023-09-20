import express from 'express';
import { GetAccessories, AddAccessories, DeleteAccessories } from '../controller/Accessories.js';

const router = express.Router();

router.post('/', AddAccessories);
router.get('/', GetAccessories);
router.delete('/:id', DeleteAccessories);
export default router