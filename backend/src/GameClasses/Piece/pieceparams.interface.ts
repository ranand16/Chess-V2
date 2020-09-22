import { PieceType } from "../Enums/PieceType";
import { PlayerSide } from "../Enums/PlayerSide";

/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

export default interface PieceParams {
    pieceType: PieceType,
    pieceColor: PlayerSide,
    isAvailable: Boolean
}