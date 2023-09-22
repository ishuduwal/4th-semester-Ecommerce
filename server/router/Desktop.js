import express from 'express';
import { GetDesktop, AddDesktop, DeleteDesktop, EditDesktop } from '../controller/Desktop.js';

const router = express.Router(); 

router.post('/', AddDesktop);
router.get('/', GetDesktop);
router.put('/:id', EditDesktop);
router.delete('/:id', DeleteDesktop);

export default router;