/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Piece from "..";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";

 export default class Queen extends Piece {
    constructor(playerSide: PlayerSide) {
        super(PieceType.QUEEN, playerSide)
    }
 }