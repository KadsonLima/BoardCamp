import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import customersRouter from "./customerRouter.js";
import gamesRouter from "./gameRouter.js";
import rentalRouter from "./rentalsRouter.js";


const router = Router()

router.use(categoryRouter);
router.use(customersRouter);
router.use(gamesRouter);
router.use(rentalRouter);


export default router;