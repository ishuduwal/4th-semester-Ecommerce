import express from 'express';
import { GetDesktop, AddDesktop } from '../controller/Desktop.js';

const router = express.Router(); 

router.post('/', AddDesktop);
router.get('/', GetDesktop);

export default router;