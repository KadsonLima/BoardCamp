import { Router } from "express";
import { getRental, postRental } from "../controllers/rentalsController.js";


const rentalRouter = Router();


rentalRouter.get('/rentals', getRental);
rentalRouter.post('/rentals', postRental);


export default rentalRouter;