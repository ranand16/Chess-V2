/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Piece from "..";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";

export default class Pawn extends Piece{
    constructor(playerside: PlayerSide) {
        super(PieceType.PAWN, playerside)

    } 
}