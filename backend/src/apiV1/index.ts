import { Router } from 'express';
import auth from './auth/auth.route';
import gameRouter from './game/game.route';
import users from './users/user.route';

const router: Router = Router();
router.use('/', auth);
router.use('/game', gameRouter)
router.use('/users', users);

export default router;
