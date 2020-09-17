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
    constructor() {
        this.db = new DataAccess()
    }
    public hostAGame = async (req: Request, res: Response): Promise<any> => {
        try {
            this.io = req.app.get("io")
            this.socket = req.app["connectionSock"]
            const { roomName, userName } = req.body
            console.log(roomName, userName)
            const game = new Game(roomName)
            const player1 = new HumanPlayer(PlayerType.HUMAN, userName)
            game.addSpectator(player1)
            let newGame = await this.db.addNewGame(game.getGame())
            this.socket.join(game.getGameId())
            console.log("THis is the new room id ", game.getGameId())
            return res.status(200).send({
                success: true,
                message: "New game created!",
                data: newGame 
            });
        } catch(err) {
            res.status(500).send({
                success: false,
                message: err.message,
                stack: err.stack,
                data: err
            });
        }
    };

    public joinGame = async (req: Request, res: Response): Promise<any> => {
        try {
            console.debug("starting joinGame")
            this.io = req.app.get("io");
            this.socket = req.app["connectionSock"]
            const { roomName, userName } = req.body;
            const player2 = new HumanPlayer(PlayerType.HUMAN, userName);
            const gameDoc = await this.db.findGameUsingName(roomName);
            const intendedGame = new Game(roomName);
            intendedGame.setGame(gameDoc)
            intendedGame.addSpectator(player2)
            const updatedGame = await this.db.updateGame(intendedGame.getGame())
            this.socket.join(updatedGame.gameId);
            console.log("Joined room id ", updatedGame.gameId)
            this.io.to(updatedGame.gameId).emit('updateFrontendRoomData', { room: "someone joined this room" })
            return res.status(200).send({
                success: true,
                message: "you are added as spectator in the game!",
                data: updatedGame
            });
        } catch(err) {
            res.status(500).send({
                success: false,
                message: err.message,
                stack: err.stack,
                data: err
            })
        }
    }
}