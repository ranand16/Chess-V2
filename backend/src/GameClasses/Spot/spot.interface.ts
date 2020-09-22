import { PieceType } from "../Enums/PieceType";
import { PlayerSide } from "../Enums/PlayerSide";
import Piece from "../Piece";

/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

export default interface SpotParams {
    piece: Piece,
    x: number,
    y: number
}