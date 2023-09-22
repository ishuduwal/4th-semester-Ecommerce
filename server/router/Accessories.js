import express from 'express';
import { GetAccessories, AddAccessories, DeleteAccessories, EditAccessories } from '../controller/Accessories.js';

const router = express.Router();

router.post('/', AddAccessories);
router.get('/', GetAccessories);
router.put('/:id', EditAccessories);
router.delete('/:id', DeleteAccessories);
export default router