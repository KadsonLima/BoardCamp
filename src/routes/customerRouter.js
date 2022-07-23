import { Router } from "express";
import { getCustomers, postCustomers } from "../controllers/customerController.js";
import { customerVerify } from "../middlewares/middlewareCustomer.js";


const customersRouter = Router();


customersRouter.get('/customers', getCustomers);
customersRouter.post('/customers',customerVerify, postCustomers);


export default customersRouter;