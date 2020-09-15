/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import { PlayerSide } from "../Enums/PlayerSide";
import { PieceType } from "../Enums/PieceType";

export default class Piece {
    private pieceColor: PlayerSide
    private pieceType: PieceType
    constructor(pType: PieceType, color: PlayerSide){
        this.setPieceType(pType)
        this.setPieceSide(color)
    }

    /**
     * 
     * @param pType Type of piece 
     */
    private setPieceType = (pType: PieceType): void => {
        this.pieceType = pType
    }

    /**
     * 
     * @param pColor Color of piece
     */
    private setPieceSide = (pColor: PlayerSide): void => {
        this.pieceColor = pColor
    }

}