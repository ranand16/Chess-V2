/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import { PlayerSide } from "../Enums/PlayerSide"
import { PlayerType } from "../Enums/PlayerType"
import IdGenerator from "../IdGenerator"

export default abstract class Player {
    protected playerType: PlayerType // A player can be a bot or a human being. As of version 1, only Human
    protected playerSide?: PlayerSide // Each player will have a side, WHITE or BLACK
    protected isSpectator: Boolean // Each player joins as a spectator by default
    protected playerName: String // Each player would have a name given by him or for a bot it will be auto generated
    protected playerId: String // Each player will be assigned a playerId 
    protected idGenerator: IdGenerator

    constructor() {
        this.playerType = PlayerType.HUMAN // default
        this.isSpectator = true // default
        this.idGenerator = new IdGenerator()
        this.playerId = this.idGenerator.generateNewId()
    }

    /**
     * This function returns current player id
     */
    getPlayerId = (): String => {
        return this.playerId
    }

    /**
     * get player's current side 'WHITE' / 'BLACK'
     */
    public getPlayerSide = (): PlayerSide  =>{
        return this.playerSide
    }

    /**
     * get player's current type 'BOT' / 'HUMAN'
     */
    public getPlayerType = (): PlayerType  =>{
        return this.playerType
    }

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
        if(playerSide === PlayerSide.BLACK) this.playerSide = PlayerSide.BLACK
        if(playerSide === PlayerSide.WHITE) this.playerSide = PlayerSide.WHITE
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

    public setPlayerName = (playerName: String): String => {
        return this.playerName = playerName
    }
}
