/** 
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import IdGenerator from "../IdGenerator"
import HumanPlayer from "../HumanPlayer"
import { PlayerSide } from "../Enums/PlayerSide"
import GameParams from "./game.interface"

export default class Game {
    private players: Array<HumanPlayer>
    private spectators: Array<HumanPlayer>
    private gameId: String
    private gameName: String
    // private gameParams: GameParams
    constructor(gameName: String) {
        this.players = []
        this.spectators = []
        this.setGameId(null)
        this.setGameName(gameName)
    }

    /**
     * 
     * @param gameName This is the new game's name
     */
    public setGameName = (gameName: String): void => {
        this.gameName = gameName
    }

    /**
     * This returns current game name
     * @returns the game name as string
     */
    public getGameName = (): String => this.gameName

    /**
     * This function will be used to generate new game id s
     */
    public setGameId = (gameId): void => {
        this.gameId = gameId?gameId:new IdGenerator().generateNewId()
    }

    /**
     * This fucntion is responsible for the 
     */
    public getGameId = (): String => this.gameId

    /**
     * This returns all the players in the game right now
     * @returns array all players: HumanPlayer
     */
    public getPlayers = (): Array<HumanPlayer> => this.players

    /**
     * This returns all the players in the game right now
     * @returns array all players: HumanPlayer
     */
    public setPlayers = (players: Array<HumanPlayer>): Array<HumanPlayer> => this.players = players

    /**
     * Return all the spectators in the current game
     * @returns array all players: HumanPlayer
     */
    public getSpectators = (): Array<HumanPlayer> => this.spectators

    /**
     * This returns all the players in the game right now
     * @returns array all players: HumanPlayer
     */
    public setSpectators = (spectators: Array<HumanPlayer>): Array<HumanPlayer> => this.spectators = spectators

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
     * @return the spectator HumanPlayer
     */
    public changeSpectatorToPlayer = (spectator: HumanPlayer): HumanPlayer => {
        spectator.setToPlayer()
        return spectator
    }

    /**
     * 
     * @param player Add this player to the game
     */
    public addPlayer = (player: HumanPlayer): void => {
        console.log(player)
        try{
            if(this.players.length>=2) return 
            // check if there is a player already
            if(!this.players.length) player.setPlayerSide(PlayerSide.WHITE) // this is not required because by default a player is assigned WHITE side
            else player.setPlayerSide(PlayerSide.BLACK)
            this.players.push(player)
        } catch (e){
            console.log(e)
            return e
        }
    }

    /**
     * 
     * @param spectatorId Remove this spectator from the spectator list 
     * @returns array of remaining spectators:HumanPlayers
     */
    public removeSpectator = (spectatorId: String): Array<HumanPlayer> => {
        console.log(this.spectators)
        // this.spectators.removeIf((each, i) => each["spectatorId"] === spectatorId )
        console.log(this.spectators)
        return this.spectators
    }

    /**
     * This function is to create new game using the db data
     * 
     * @param gameDoc - This is a game document from db
     * @returns a Game object
     */
    public setGame = (gameDoc): Game => {
        const { players, spectators, gameId, gameName } = gameDoc
        this.setPlayers(players)
        this.setSpectators(spectators)
        this.setGameId(gameId)
        this.setGameName(gameName)
        return this
    }

    /**
     * This function will return the variables in the current game to be saved in db
     * @returns all the vlariables in this game
     */
    public getGame = (): GameParams => ({
            gameId: this.gameId,
            gameName: this.gameName,
            players: this.players,
            spectators: this.spectators
    })

    /**
     * This function will be used to reset the current game
     */
    public resetGame = (): void => {

    }
}