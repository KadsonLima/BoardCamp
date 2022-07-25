import { Router } from "express";
import { getRental, postRental, deleteRental } from "../controllers/rentalsController.js";
import { rentalsVerify } from "../middlewares/middlewareRentals.js";


const rentalRouter = Router();


rentalRouter.get('/rentals', getRental);
rentalRouter.post('/rentals',rentalsVerify, postRental);
rentalRouter.delete('/rentals/:id', deleteRental);



export default rentalRouter;