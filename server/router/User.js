import express from 'express'
import {GetUser, Signup} from '../controller/User.js'

const router = express.Router();

router.post('/signup',Signup)
router.get('/',GetUser);
export default router