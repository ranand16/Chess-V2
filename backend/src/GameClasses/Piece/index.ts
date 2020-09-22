/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import { PlayerSide } from "../Enums/PlayerSide";
import { PieceType } from "../Enums/PieceType";
import PieceParams from "./pieceparams.interface";

export default abstract class Piece {
    private pieceColor: PlayerSide
    private pieceType: PieceType
    private isAvailable: Boolean
    constructor(pieceType: PieceType, pieceColor?: PlayerSide){
        this.setPieceType(pieceType)
        this.setPieceSide(pieceColor)
        this.isAvailable = true
    }

    /**
     * 
     * @param pieceType Type of piece 
     */
    public setPieceType = (pieceType: PieceType): PieceType => this.pieceType = pieceType

    /**
     * 
     * @param pieceColor Color of piece
     */
    public setPieceSide = (pieceColor: PlayerSide): PlayerSide => this.pieceColor = pieceColor

    /**
     * After a piece is killed make the isAvailable as false to be not visible in the frontend
     */
    public killThis = () => {
        this.isAvailable = false
    }

    /**
     * This function is used to return the piece params to be stored in db
     */
    public getPiece = (): PieceParams => ({
        pieceColor: this.pieceColor,
        pieceType: this.pieceType,
        isAvailable: this.isAvailable
    })

    /**
     * This function is used to return the piece params to be stored in db
     */
    public setPiece = (pieceDoc: PieceParams) => {
        this.pieceColor = pieceDoc.pieceColor
        this.pieceType = pieceDoc.pieceType
        this.isAvailable = pieceDoc.isAvailable
    }

    /**
     * For any specific piece all the positions where the piece can move  
     */
    // public abstract calculateMovePositions = (): Array<Spot> => {
    //     return 
    // }
}