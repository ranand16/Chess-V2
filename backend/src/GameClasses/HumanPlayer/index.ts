/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Player from "../Player";
import { PlayerSide } from "../Enums/PlayerSide";
import { PlayerType } from "../Enums/PlayerType";

export default class HumanPlayer extends Player {
    constructor(playerType: PlayerType, playerName: String, playerSide?: PlayerSide, ) {
        super();
        this.setPlayerSide(playerSide)
        this.setPlayerType(playerType)
        this.setPlayerName(playerName)
    }
}