import { Router } from "express";
import { getCustomers, postCustomers } from "../controllers/customerController.js";


const customersRouter = Router();


customersRouter.get('/customers', getCustomers);
customersRouter.post('/customers', postCustomers);


export default customersRouter;