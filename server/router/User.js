import express from 'express'
import {GetUser, Login, Signup, DeleteUser, EditUser} from '../controller/User.js'

const router = express.Router();

router.post('/signup', Signup);
router.get('/', GetUser);
router.delete('/:id', DeleteUser);
router.put('/:id', EditUser);
router.post('/login', Login);
export default router