import { PlayerSide } from "../Enums/PlayerSide";
import { PlayerType } from "../Enums/PlayerType";

/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

export default interface PlayerParams {
    playerType: PlayerType,
    playerSide: PlayerSide,
    isSpectator: Boolean,
    playerName: String,
    playerId: String
}