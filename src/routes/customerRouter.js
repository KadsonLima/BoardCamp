import { Router } from "express";
import { getCustomers, postCustomers , getCustomer, updateCustomer} from "../controllers/customerController.js";
import { customerVerify } from "../middlewares/middlewareCustomer.js";


const customersRouter = Router();


customersRouter.get('/customers', getCustomers);
customersRouter.post('/customers',customerVerify, postCustomers);
customersRouter.get('/customers/:id', getCustomer);
customersRouter.put('/customers/:id', updateCustomer);


export default customersRouter;