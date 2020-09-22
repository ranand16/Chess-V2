/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import { PlayerSide } from "../Enums/PlayerSide";
import { PieceType } from "../Enums/PieceType";

export default abstract class Piece {
    private pieceColor: PlayerSide
    private pieceType: PieceType
    constructor(pieceType: PieceType, pieceColor: PlayerSide){
        this.setPieceType(pieceType)
        this.setPieceSide(pieceColor)
    }

    /**
     * 
     * @param pieceType Type of piece 
     */
    private setPieceType = (pieceType: PieceType): PieceType => this.pieceType = pieceType

    /**
     * 
     * @param pieceColor Color of piece
     */
    private setPieceSide = (pieceColor: PlayerSide): PlayerSide => this.pieceColor = pieceColor

}