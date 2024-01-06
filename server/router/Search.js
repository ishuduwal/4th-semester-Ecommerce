import express from 'express';
import { search } from '../controller/Search.js';

const searchRouter = express.Router();

// Define the search route
searchRouter.get('/', search);

export default searchRouter;
