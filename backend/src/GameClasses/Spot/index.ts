/**
 * @author Rishabh Anand <ranad16@gmail.com>
 */

import Piece from "../Piece";
import SpotParams from "./spot.interface";

export default class Spot {
    private piece: Piece
    private x: number
    private y: number
    constructor(x: number, y: number, piece?: Piece) {
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
    private setX = (x: number): number => this.x = x

    /**
     * 
     * @param y set y for this spot
     */
    private setY = (y: number): number => this.y = y

    /**
     * get the spot details to be stored in db
     */
    public getSpot = (): SpotParams => ({
        piece: this.piece,
        x: this.x,
        y: this.y
    })

    /**
     * 
     * @param spot spot to be set
     */
    public setSpot = (spot: Spot) => {
        this.setX(spot.x)
        this.setX(spot.y)
        this.setPiece(spot.piece)
    }

    /**
     * get the piece
     */
    public getPiece = (): Piece => this.piece

    /**
     * get x
     */
    public getX = (): number => this.x

    /**
     * get y
     */
    public getY = (): number => this.y
}