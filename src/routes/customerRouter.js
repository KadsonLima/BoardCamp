import { Router } from "express";
import { getCustomers, postCustomers , getCustomer, updateCustomer} from "../controllers/customerController.js";
import { validateCustomer } from "../middlewares/customerValidator.js";


const customersRouter = Router();


customersRouter.get('/customers', getCustomers);
customersRouter.get('/customers/:id', getCustomer);
customersRouter.post('/customers',validateCustomer, postCustomers);
customersRouter.put('/customers/:id',validateCustomer, updateCustomer);


export default customersRouter;