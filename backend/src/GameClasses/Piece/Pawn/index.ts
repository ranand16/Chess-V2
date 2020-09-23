/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Piece from "..";
import Board from "../../Board";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";
import Spot from "../../Spot";

export default class Pawn extends Piece{
    constructor(playerside: PlayerSide) {
        super(PieceType.PAWN, playerside)
    } 

    public calculateMovePositions = (board: Board, spot: Spot, playerSide: PlayerSide) => {
        const boardData = board.getBoard()
        let hightlightArray: Array<Object>
        const index = spot.getX()
        const jindex = spot.getY()
        if(playerSide === PlayerSide.BLACK){ // dark
            // for highlighting non attacking destinations
            if(index+1<=7 && !(boardData[index+1][jindex]).isAvailable) hightlightArray.push({ x:index+1, y:jindex, enemyCell: false })
            if(index===1 && !(boardData[index+1][jindex]).isAvailable) hightlightArray.push({ x:index+2, y:jindex, enemyCell: false });
            // for highlighting red for enemy at just diagonals
            if(index+1<=7 && jindex-1>=0 && (boardData[index+1][jindex-1]).isAvailable && (boardData[index+1][jindex-1]).pieceColor !== PlayerSide.BLACK) hightlightArray.push({ x:index+1, y:jindex-1, enemyCell: true })
            if(index+1<=7 && jindex+1<=7 && (boardData[index+1][jindex+1]).isAvailable && (boardData[index+1][jindex+1]).pieceColor !== PlayerSide.BLACK) hightlightArray.push({ x:index+1, y:jindex+1, enemyCell: true })
        } else if(playerSide === PlayerSide.WHITE){ // white
            // for highlighting non attacking destinations
            if(index-1>=0 && !(boardData[index-1][jindex]).isAvailable) hightlightArray.push({ x:index-1, y:jindex, enemyCell: false });
            if(index===6 && !(boardData[index-1][jindex]).isAvailable) hightlightArray.push({ x:index-2, y:jindex, enemyCell: false });
            // for highlighting red for enemy at just diagonals
            if(index-1>=0 && jindex+1<=7 && (boardData[index-1][jindex+1]).isAvailable && (boardData[index-1][jindex+1]).pieceColor !== PlayerSide.WHITE) hightlightArray.push({ x:index-1, y:jindex+1, enemyCell: true })
            if(index-1>=0 && jindex-1>=0 && (boardData[index-1][jindex-1]).isAvailable && (boardData[index-1][jindex-1]).pieceColor !== PlayerSide.WHITE) hightlightArray.push({ x:index-1, y:jindex-1, enemyCell: true })
        }
    }
}