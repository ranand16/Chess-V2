/** 
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import HumanPlayer from "../HumanPlayer";

/**
 * This is an interface for Game object params
 */
export default interface GameParams {
    players: Array<HumanPlayer>
    spectators: Array<HumanPlayer>
    gameId: String
    gameName: String
}