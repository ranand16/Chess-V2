/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Piece from "..";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";

export default class Rook extends Piece {
    constructor(playerSide: PlayerSide) {
        super(PieceType.ROOK, playerSide)
    }
}