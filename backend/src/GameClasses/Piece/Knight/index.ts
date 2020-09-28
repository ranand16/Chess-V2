/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Piece from "..";
import Board from "../../Board";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";
import Spot from "../../Spot";

export default class Knight extends Piece {
    constructor(playerSide: PlayerSide) {
        super(PieceType.KNIGHT, playerSide)
    }

    public calculateMovePositions = (board: Board, spot: Spot, playerSide: PlayerSide): Array<Object> => {
        let hightlightArray: Array<Object> = []
        // console.log("This is knight of ", playerSide)
        const boardData = board.getBoard()
        const index = spot.getX()
        const jindex = spot.getY()
        if(index+1<=7 && jindex+2<=7 && !(boardData[index+1][jindex+2].isAvailable)) { hightlightArray.push({ x:index+1, y:jindex+2, enemyCell: false }) } else if(index+1<=7 && jindex+2<=7 && boardData[index+1][jindex+2].isAvailable && playerSide!==boardData[index+1][jindex+2].pieceColor) { hightlightArray.push({ x:index+1, y:jindex+2, enemyCell: true }) }
        if(index+1<=7 && jindex-2>=0 && !(boardData[index+1][jindex-2].isAvailable)) { hightlightArray.push({ x:index+1, y:jindex-2, enemyCell: false }) } else if(index+1<=7 && jindex-2>=0 && boardData[index+1][jindex-2].isAvailable && playerSide!==boardData[index+1][jindex-2].pieceColor) { hightlightArray.push({ x:index+1, y:jindex-2, enemyCell: true }) }
        if(index-1>=0 && jindex+2<=7 && !(boardData[index-1][jindex+2].isAvailable)) { hightlightArray.push({ x:index-1, y:jindex+2, enemyCell: false }) } else if(index-1>=0 && jindex+2<=7 && boardData[index-1][jindex+2].isAvailable && playerSide!==boardData[index-1][jindex+2].pieceColor) { hightlightArray.push({ x:index-1, y:jindex+2, enemyCell: true }) }
        if(index-1>=0 && jindex-2>=0 && !(boardData[index-1][jindex-2].isAvailable)) { hightlightArray.push({ x:index-1, y:jindex-2, enemyCell: false }) } else if(index-1>=0 && jindex-2>=0 && boardData[index-1][jindex-2].isAvailable && playerSide!==boardData[index-1][jindex-2].pieceColor) { hightlightArray.push({ x:index-1, y:jindex-2, enemyCell: true }) }

        if(index+2<=7 && jindex+1<=7 && !(boardData[index+2][jindex+1].isAvailable)) { hightlightArray.push({ x:index+2, y:jindex+1, enemyCell: false }) } else if(index+2<=7 && jindex+1<=7 && boardData[index+2][jindex+1].isAvailable && playerSide!==boardData[index+2][jindex+1].pieceColor) { hightlightArray.push({ x:index+2, y:jindex+1, enemyCell: true }) }
        if(index+2<=7 && jindex-1>=0 && !(boardData[index+2][jindex-1].isAvailable)) { hightlightArray.push({ x:index+2, y:jindex-1, enemyCell: false }) } else if(index+2<=7 && jindex-1>=0 && boardData[index+2][jindex-1].isAvailable && playerSide!==boardData[index+2][jindex-1].pieceColor) { hightlightArray.push({ x:index+2, y:jindex-1, enemyCell: true }) }
        if(index-2>=0 && jindex+1<=7 && !(boardData[index-2][jindex+1].isAvailable)) { hightlightArray.push({ x:index-2, y:jindex+1, enemyCell: false }) } else if(index-2>=0 && jindex+1<=7 && boardData[index-2][jindex+1].isAvailable && playerSide!==boardData[index-2][jindex+1].pieceColor) { hightlightArray.push({ x:index-2, y:jindex+1, enemyCell: true }) }
        if(index-2>=0 && jindex-1>=0 && !(boardData[index-2][jindex-1].isAvailable)) { hightlightArray.push({ x:index-2, y:jindex-1, enemyCell: false }) } else if(index-2>=0 && jindex-1>=0 && boardData[index-2][jindex-1].isAvailable && playerSide!==boardData[index-2][jindex-1].pieceColor) { hightlightArray.push({ x:index-2, y:jindex-1, enemyCell: true }) }
        
        return hightlightArray
    }
}