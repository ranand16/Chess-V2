/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import IdGenerator from "../IdGenerator"
import HumanPlayer from "../HumanPlayer"
import { PlayerSide } from "../Enums/PlayerSide"

export default class Game {
    private players: Array<HumanPlayer>
    private spectators: Array<HumanPlayer>
    private gameId: String = null
    private gameName: String
    private idGenerator: IdGenerator
    constructor(gameName: String) {
        this.idGenerator = new IdGenerator()
        this.players = []
        this.generateGameId()
        this.setGameName(gameName)
    }

    /**
     * 
     * @param gameName This is the new game's name
     */
    private setGameName = (gameName: String): void => {
        this.gameName = gameName
    }

    /**
     * This function will be used to generate new game id s
     */
    private generateGameId = (): void => {
        console.log(this.idGenerator, "Game")
        if(!this.gameId) this.gameId = this.idGenerator.generateNewId()
    }

    public getGameId = (): String => {
        return this.gameId
    }

    /**
     * This function will be used to reset the current game
     */
    public resetGame = (): void => {

    }

    /**
     * 
     * @param spectator Add this spectator to this game
     */
    public addSpectator = (spectator: HumanPlayer): void => {
        this.spectators.push(spectator)
    }

    /**
     * 
     * @param spectator Change this player from spectator top player
     */
    public changeSpectatorToPlayer = (spectator: HumanPlayer): HumanPlayer => {
        spectator.setToPlayer()
        return spectator
    }

    /**
     * 
     * @param player Add this player to the game
     */
    public addPlayer = (player: HumanPlayer): HumanPlayer => {
        if(this.players.length>=2) return 
        // check if there is a player already
        if(!this.players.length) player.setPlayerSide(PlayerSide.WHITE) // this is not required because by default a player is assigned WHITE side
        else player.setPlayerSide(PlayerSide.BLACK)
        this.players.push(player)
        return player
    }

    /**
     * 
     * @param spectatorId Remove this spectator from the spectator list 
     */
    public removeSpectator = (spectatorId: String): Array<HumanPlayer> => {
        console.log(this.spectators)
        // this.spectators.removeIf((each, i) => each["spectatorId"] === spectatorId )
        console.log(this.spectators)
        return this.spectators
    }

}