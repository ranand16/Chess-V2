/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import { PlayerSide } from "../Enums/PlayerSide"
import { PlayerType } from "../Enums/PlayerType"
import IdGenerator from "../IdGenerator"

export default abstract class Player {
    public playerType: PlayerType // A player can be a bot or a human being. As of version 1, only Human
    public playerSide?: PlayerSide // Each player will have a side, WHITE or BLACK
    public isSpectator: Boolean // Each player joins as a spectator by default
    public playerName: String // Each player would have a name given by him or for a bot it will be auto generated
    public playerId: String // Each player will be assigned a playerId 
    public idGenerator: IdGenerator

    constructor() {
        this.playerType = PlayerType.HUMAN // default
        this.isSpectator = true // default
        this.idGenerator = new IdGenerator()
        this.playerId = this.idGenerator.generateNewId()
    }

    /**
     * This function returns current player id
     */
    public getPlayerId = (): String => this.playerId

    /**
     * get player's current side 'WHITE' / 'BLACK'
     */
    public getPlayerSide = (): PlayerSide => this.playerSide

    /**
     * get player's current type 'BOT' / 'HUMAN'
     */
    public getPlayerType = (): PlayerType => this.playerType

    /**
     * get player's name
     */
    public getPlayerName = (): String => this.playerName

    /**
     * get if player is spectating or playing
     */
    public getPlayerPlayStatus = (): Boolean => this.isSpectator

    /**
     * 
     * @param playerId new player id
     */
    public setPlayerId = (playerId: String) => this.playerId = playerId

    /**
     * 
     * @param playerType Set current player's type to playerType
     */
    public setPlayerType = (playerType: PlayerType): void => { 
        if(playerType===PlayerType.BOT) this.playerType = PlayerType.BOT
        if(playerType===PlayerType.HUMAN) this.playerType = PlayerType.HUMAN
    } 

    /**
     * 
     * @param playerSide Set current player's side to playerSide
     */
    public setPlayerSide = (playerSide: PlayerSide): void => { 
        this.playerSide = playerSide
    } 

    /**
     * Function to convert a spectator to a player
     */
    public setToPlayer = (): Boolean => {
        if(this.isSpectator) {
            this.isSpectator = false
            return true
        }
        return false
    }
    /**
     * set value of isSpectator
     */
    public setPlayerPlayStatus = (isSpec): Boolean => this.isSpectator = isSpec

    /**
     * 
     * @param playerName new player name
     */
    public setPlayerName = (playerName: String): String => this.playerName = playerName
}
