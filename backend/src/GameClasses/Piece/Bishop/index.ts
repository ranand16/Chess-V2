/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Piece from "..";
import Board from "../../Board";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";
import Spot from "../../Spot";

 export default class Bishop extends Piece {
    constructor(playerSide: PlayerSide) {
        super(PieceType.BISHOP, playerSide) 
    }

    public calculateMovePositions = (board: Board, spot: Spot, playerSide: PlayerSide): Array<Object> => {
        let hightlightArray: Array<Object> = []
        console.log("This is bishop of ", playerSide)
        return hightlightArray
    }
 }