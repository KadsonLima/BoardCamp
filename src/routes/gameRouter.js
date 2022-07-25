import { Router } from "express";
import { getGames, postGames } from "../controllers/gameController.js";
import {validateGame} from '../middlewares/gameValidator.js'

const gamesRouter = Router();


gamesRouter.get('/games', getGames);
gamesRouter.post('/games',validateGame, postGames);


export default gamesRouter;