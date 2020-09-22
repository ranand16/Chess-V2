/**
 * @author Rishabh Anand <ranad16@gmail.com>
 */

import Piece from "../Piece";


export default class Spot {
    private piece: Piece
    private x: Number
    private y: Number
    constructor(x: Number, y: Number, piece: Piece) {
        this.setPiece(piece)
        this.setX(x)
        this.setY(y)
    }

    /**
     * 
     * @param piece piece for this spot
     */
    public setPiece = (piece: Piece): Piece => this.piece = piece

    /**
     * 
     * @param x set x for this spot
     */
    public setX = (x: Number): Number => this.x = x

    /**
     * 
     * @param y set y for this spot
     */
    public setY = (y: Number): Number => this.y = y

    public getSpot = () => ({
        piece: this.piece,
        x: this.x,
        y: this.y
    })

    /**
     * get the piece
     */
    public getPiece = (): Piece => this.piece

    /**
     * get x
     */
    public getX = (): Number => this.x

    /**
     * get y
     */
    public getY = (): Number => this.y

}