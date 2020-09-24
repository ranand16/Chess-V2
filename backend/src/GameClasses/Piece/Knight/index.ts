/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Piece from "..";
import Board from "../../Board";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";
import Spot from "../../Spot";

export default class Knight extends Piece {
    constructor(playerSide: PlayerSide) {
        super(PieceType.KNIGHT, playerSide)
    }

    public calculateMovePositions = (board: Board, spot: Spot, playerSide: PlayerSide): Array<Object> => {
        let hightlightArray: Array<Object>
        return hightlightArray
    }
}