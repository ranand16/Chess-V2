/*
What are the four rules for castling in chess?
-- The king and the rook may not have moved from their starting squares if you want to castle.
-- All spaces between the king and the rook must be empty.
-- The king cannot be in check.
-- The squares that the king passes over must not be under attack, nor the square where it lands on.
*/

import Piece from "..";
import Board from "../../Board";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";
import Spot from "../../Spot";

export default class King extends Piece{
    constructor(playerside: PlayerSide) {
        super(PieceType.KING, playerside)
    }

    public calculateMovePositions = (board: Board, spot: Spot, playerSide: PlayerSide): Array<Object> => {
        const boardData = board.getBoard()
        let hightlightArray: Array<Object> = []
        const index = spot.getX()
        const jindex = spot.getY()
        if(index+1<=7 && !(boardData[index+1][jindex].isAvailable)) { hightlightArray.push({ x:index+1, y:jindex, enemyCell: false }) } else if(index+1<=7 && boardData[index+1][jindex].isAvailable && playerSide !== (boardData[index+1][jindex]).pieceColor) { hightlightArray.push({ x:index+1, y:jindex, enemyCell: true }) }
        if(index-1>=0 && !(boardData[index-1][jindex].isAvailable)) { hightlightArray.push({ x:index-1, y:jindex, enemyCell: false }) } else if(index-1>=0 && (boardData[index-1][jindex]).isAvailable && playerSide!==(boardData[index-1][jindex]).pieceColor) { hightlightArray.push({ x:index-1, y:jindex, enemyCell: true }) }
        if(jindex+1<=7 && !(boardData[index][jindex+1].isAvailable)) { hightlightArray.push({ x:index, y:jindex+1, enemyCell: false }) } else if(jindex+1<=7 && (boardData[index][jindex+1].isAvailable) && playerSide!==(boardData[index][jindex+1]).pieceColor) { hightlightArray.push({ x:index, y:jindex+1, enemyCell: true }) }
        if(jindex-1>=0 && !(boardData[index][jindex-1].isAvailable)) { 
            hightlightArray.push({ x:index, y:jindex-1, enemyCell: false }) 
        } else if(jindex-1>=0 && (boardData[index][jindex-1].isAvailable) && playerSide!==(boardData[index][jindex-1]).pieceColor) { 
            hightlightArray.push({ x:index, y:jindex-1, enemyCell: true }) 
        }
        if(index+1<=7 && jindex+1<=7 && !(boardData[index+1][jindex+1].isAvailable)) { 
            hightlightArray.push({ x:index+1, y:jindex+1, enemyCell: false }) 
        } else if(index+1<=7 && jindex+1<=7 && boardData[index+1][jindex+1].isAvailable && playerSide!==(boardData[index+1][jindex+1]).pieceColor) { 
            hightlightArray.push({ x:index+1, y:jindex+1, enemyCell: true }) 
        }
        if(index+1<=7 && jindex-1>=0 && !(boardData[index+1][jindex-1].isAvailable)) { 
            hightlightArray.push({ x:index+1, y:jindex-1, enemyCell: false }) 
        } else if(index+1<=7 && jindex-1>=0 && boardData[index+1][jindex-1].isAvailable && playerSide!==(boardData[index+1][jindex-1]).pieceColor) { 
            hightlightArray.push({ x:index+1, y:jindex-1, enemyCell: true }) 
        }
        if(index-1>=0 && jindex+1<=7 && !(boardData[index-1][jindex+1]).isAvailable) { 
            hightlightArray.push({ x:index-1, y:jindex+1, enemyCell: false }) 
        } else if(index-1>=0 && jindex+1<=7 && boardData[index-1][jindex+1].isAvailable && playerSide!==(boardData[index-1][jindex+1]).pieceColor) { 
            hightlightArray.push({ x:index-1, y:jindex+1, enemyCell: true }) 
        }
        if(index-1>=0 && jindex-1>=0 && !(boardData[index-1][jindex-1].isAvailable)) { 
            hightlightArray.push({ x:index-1, y:jindex-1, enemyCell: false }) 
        } else if(index-1>=0 && jindex-1>=0 && boardData[index-1][jindex-1].isAvailable && playerSide!==(boardData[index-1][jindex-1]).pieceColor) { 
            hightlightArray.push({ x:index-1, y:jindex-1, enemyCell: true }) 
        }
        return hightlightArray
    }
}