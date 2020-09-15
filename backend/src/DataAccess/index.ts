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
        let saveNewGame = await game.save()
        if(!saveNewGame) throw new Error("Failed to save new game in database!")
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
        console.log("game object before update")
        console.log(game)
        // const gameUpdated = await GameSchema.findByIdAndUpdate(game.gameId, game);
        const gameUpdated = await GameSchema.findOneAndUpdate({gameId: game.gameId}, game)
        console.log("game object after update")
        console.log(gameUpdated)
        return gameUpdated
    }
}



