/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import { Request, Response } from 'express';
import * as express from 'express';
import * as socketio from 'socket.io';
import Game from '../../GameClasses/Game';
import HumanPlayer from '../../GameClasses/HumanPlayer';
import { PlayerSide } from '../../GameClasses/Enums/PlayerSide';
import { PlayerType } from '../../GameClasses/Enums/PlayerType';
import DataAccess from '../../DataAccess';

export default class GameController {
    public express: express.Application = express();
    public io: socketio; 
    public socket;
    public db: DataAccess
    public hostAGame = async (req: Request, res: Response): Promise<any> => {
        try {
            this.io = req.app["io"];
            this.socket = req.app["connectionSock"];
            this.db = new DataAccess()
            const { roomName, userName } = req.body;
            console.log(roomName, userName)
            const game = new Game(roomName);
            const player1 = new HumanPlayer(PlayerSide.WHITE, PlayerType.HUMAN, userName);
            game.changeSpectatorToPlayer(player1)
            game.addPlayer(player1)
            let newGame = await this.db.addNewGame(game)
            this.socket.join(game.getGameId());
            return res.status(200).send({
                success: true,
                message: "New game created!",
                data: newGame 
            });
        } catch(err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

    public joinGame = async (req: Request, res: Response): Promise<any> => {
        try {
            this.io = req.app["io"]
            this.socket = req.app["connectionSock"]
            
            return res.status(200).send({
                success: true,
                message: "New game created!",
                data: {  }
            });
            // this.socket.broadcast.to(req.body.roomID).emit('updateFrontendRoomData', { room:"THis is the room id" })
        } catch(err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            })
        }
    }
}