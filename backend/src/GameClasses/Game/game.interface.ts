/** 
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import PlayerParams from "../Player/player.interface";
import PieceParams from "../Piece/pieceparams.interface";

/**
 * This is an interface for Game object params
 */
export default interface GameParams {
    gameId: String
    gameName: String,
    players: Array<PlayerParams>
    spectators: Array<PlayerParams>
    gameChance: String,
    boardData: Array<Array<PieceParams>>
}