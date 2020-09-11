import * as mongoose from "mongoose"
import Game from "../GameClasses/Game"
import GameSchema from "../apiV1/gameAPI/game.model";
export default class DataAccess {
    constructor(){

    }

    public addNewGame = async (newGame: Game): Promise<Boolean> => {
        const game = new GameSchema({
            gameId: newGame.getGameId(),
            gameName: newGame.getGameName(),
            players: newGame.getPlayers(),
            spectators: newGame.getSpectators()
        })
        let saveNewGame = await game.save()
        if(!saveNewGame) throw new Error("Failed to save new game in database!")
        return saveNewGame
    }
}