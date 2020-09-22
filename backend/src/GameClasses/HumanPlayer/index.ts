/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Player from "../Player";
import { PlayerSide } from "../Enums/PlayerSide";
import { PlayerType } from "../Enums/PlayerType";
import PlayerParams from "../Player/player.interface";

export default class HumanPlayer extends Player {
    constructor(playerName: String, playerSide?: PlayerSide) {
        super();
        this.setPlayerSide(playerSide)
        this.setPlayerType(PlayerType.HUMAN)
        this.setPlayerName(playerName)
    }

    /**
     * This is the player details to be stored in db
     */
    public getPlayer = (): PlayerParams => {
        return {
            playerType: this.getPlayerType(),
            playerSide: this.getPlayerSide(),
            isSpectator: this.getPlayerPlayStatus(),
            playerName: this.getPlayerName()?this.getPlayerName():null,
            playerId: this.getPlayerId()
        } 
    }

    public setPlayer = (playerDoc) => {
        const { playerType, playerSide, isSpectator, playerName, playerId } = playerDoc
        this.setPlayerType(playerType)
        this.setPlayerSide(playerSide)
        this.setPlayerPlayStatus(isSpectator)
        this.setPlayerName(playerName)
        this.setPlayerId(playerId)
        return this
    }
}