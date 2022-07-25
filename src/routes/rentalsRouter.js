import { Router } from "express";
import { getRental, postRental, deleteRental, complete } from "../controllers/rentalsController.js";
import { validateRental, validateDeleteRental } from "../middlewares/rentalValidator.js";


const rentalRouter = Router();


rentalRouter.get('/rentals', getRental);
rentalRouter.post('/rentals',validateRental, postRental);
rentalRouter.delete('/rentals/:id',validateDeleteRental, deleteRental);
rentalRouter.post('/rentals/:id/return', complete);




export default rentalRouter;