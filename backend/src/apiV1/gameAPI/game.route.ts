/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import { Router } from 'express'
import GameController from './game.controller'

const gameRouter: Router = Router()
const gameController = new GameController();

// Host a new game
gameRouter.post('/host', gameController.hostAGame)
gameRouter.post('/join', gameController.joinGame)

export default gameRouter