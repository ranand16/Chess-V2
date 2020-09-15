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
            this.io = req.app["io"];
            this.socket = req.app["connectionSock"];
            const { roomName, userName } = req.body;
            console.log(roomName, userName)
            const game = new Game(roomName);
            const player1 = new HumanPlayer(PlayerSide.WHITE, PlayerType.HUMAN, userName);
            game.changeSpectatorToPlayer(player1)
            game.addPlayer(player1)
            let newGame = await this.db.addNewGame(game.getGame())
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
            console.debug("starting joinGame")
            this.io = req.app["io"];
            this.socket = req.app["connectionSock"];
            const { roomName, userName } = req.body;
            const player2 = new HumanPlayer(PlayerSide.BLACK, PlayerType.HUMAN, userName);
            const gameDoc = await this.db.findGameUsingName(roomName);
            const intendedGame = new Game(roomName);
            intendedGame.setGame(gameDoc)
            console.log("fetchedGame : - ",intendedGame)
            player2.setToPlayer();
            console.log("updatedNewGame_1: - ",intendedGame)
            intendedGame.addPlayer(player2)
            console.log("updatedNewGame_2 : - ",intendedGame)
            const updatedGame = await this.db.updateGame(intendedGame.getGame())
            this.socket.join(updatedGame.gameId);
            this.socket.broadcast.to(updatedGame.gameId).emit('updateFrontendRoomData', { room:"THis is the room id" })
            console.log("updatedGame : - ",updatedGame)
            return res.status(200).send({
                success: true,
                message: "you are player 2 in the game!",
                data: updatedGame
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