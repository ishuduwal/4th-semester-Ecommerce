import express from 'express'
import {GetUser, Login, Signup} from '../controller/User.js'

const router = express.Router();

router.post('/signup',Signup)
router.get('/', GetUser);
router.post('/login',Login)
export default router