import Game from "../GameClasses/Game"
import GameSchema from "../apiV1/gameAPI/game.model";
import GameParams from "../GameClasses/Game/game.interface";
export default class DataAccess {
    constructor(){

    }

    /**
     * 
     * @param newGame New game object
     */
    public addNewGame = async (newGameParams: GameParams): Promise<Boolean> => {
        const game = new GameSchema({
            gameId: newGameParams.gameId,
            gameName: newGameParams.gameName,
            players: newGameParams.players,
            spectators: newGameParams.spectators
        })
        let saveNewGame = null
        saveNewGame = await game.save()
        return saveNewGame
    }

    /**
     * 
     * @param gameName Game id of the game to be searched
     */
    public findGameUsingName = async (gameName: String): Promise<GameParams> => {
        const game = await GameSchema.findOne({ gameName });
        return game
    }

    public updateGame = async (game: GameParams): Promise<GameParams> => {
        const gameUpdated = await GameSchema.findOneAndUpdate({gameId: game.gameId}, game)
        return gameUpdated
    }
}