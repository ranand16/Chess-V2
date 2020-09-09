import { Router } from 'express'
import GameController from './game.controller'
import * as io from 'socket.io';


const gameRouter: Router = Router()
const gameController = new GameController();

// Host a new game
gameRouter.post('/', gameController.hostAGame)

export default gameRouter