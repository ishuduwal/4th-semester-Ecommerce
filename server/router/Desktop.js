import express from 'express';
import { GetDesktop, AddDesktop, DeleteDesktop } from '../controller/Desktop.js';

const router = express.Router(); 

router.post('/', AddDesktop);
router.get('/', GetDesktop);
router.delete('/:id', DeleteDesktop);

export default router;