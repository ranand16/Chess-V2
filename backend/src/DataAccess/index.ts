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
            spectators: newGameParams.spectators,
            gameChance: newGameParams.gameChance,
            boardData: newGameParams.boardData
        })
        let saveNewGame = null
        saveNewGame = await game.save()
        return saveNewGame
    }

    /**
     * 
     * @param gameName Game name of the game to be searched
     */
    public findGameUsingName = async (gameName: String): Promise<GameParams> => await GameSchema.findOne({ gameName });

    /**
     * 
     * @param gameId Game id of the game to be searched
     */
    public findGameUsingId = async (gameId: String): Promise<GameParams> => await GameSchema.findOne({ gameId });

    /**
     * 
     * @param game contains all the variables in the Game object
     */
    public updateGame = async (game: GameParams): Promise<GameParams> => await GameSchema.findOneAndUpdate({gameId: game.gameId}, game)
}