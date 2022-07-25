import { Router } from "express";
import { getCategory, postCategory } from "../controllers/categoryController.js";
import {validateCategory} from '../middlewares/categoryValidator.js'

const categoryRouter = Router();


categoryRouter.get('/categories', getCategory);
categoryRouter.post('/categories',validateCategory, postCategory);


export default categoryRouter;