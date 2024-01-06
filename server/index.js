import express, { application }  from "express";
import dotenv from 'dotenv';
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from './router/User.js'
import LaptopRouter from './router/Laptop.js'
import AccessoriesRouter from './router/Accessories.js'
import DesktopRouter from './router/Desktop.js'
import CartRouter from './router/Cart.js'
import SearchRouter from './router/Search.js';

const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true })) 
app.use(cors());
app.use('/user', UserRouter);
app.use('/laptop', LaptopRouter);
app.use('/accessories', AccessoriesRouter);
app.use('/desktop', DesktopRouter);
app.use('/cart', CartRouter);
app.use('/api/search', SearchRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.mongodb).then(() =>
 app.listen(PORT, () => console.log(`server is running on port ${PORT}`))).catch(err => console.log(err))

