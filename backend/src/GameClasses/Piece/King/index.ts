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

    public calculateMovePositions = (board: Board, spot: Spot, playerSide: PlayerSide): Array<Spot> => {
        const boardData = board.getBoard()
        let hightlightArray: Array<Spot>
        const index = spot.getX()
        const jindex = spot.getY()
        // if(index+1<=7 && (boardData[index+1][jindex]). ==="na") { 
        //     hightlightArray.push(new Spot(index+1, jindex)) 
        // } else if(index+1<=7 && boardData[index+1][jindex]!=="na" && playerSide!==boardData[index+1][jindex].split("_")[1]) { 
        //     hightlightArray.push({ x:index+1, y:jindex, enemyCell: true }) 
        // }
        // if(index-1>=0 && boardData[index-1][jindex]==="na") { 
        //     hightlightArray.push({ x:index-1, y:jindex, enemyCell: false }) 
        // } else if(index-1>=0 && boardData[index-1][jindex]!=="na" && playerSide!==boardData[index-1][jindex].split("_")[1]) { 
        //     hightlightArray.push({ x:index-1, y:jindex, enemyCell: true }) 
        // }
        // if(jindex+1<=7 && boardData[index][jindex+1]==="na") { 
        //     hightlightArray.push({ x:index, y:jindex+1, enemyCell: false }) 
        // } else if(jindex+1<=7 && boardData[index][jindex+1]!=="na" && playerSide!==boardData[index][jindex+1].split("_")[1]) { 
        //     hightlightArray.push({ x:index, y:jindex+1, enemyCell: true }) 
        // }
        // if(jindex-1>=0 && boardData[index][jindex-1]==="na") { 
        //     hightlightArray.push({ x:index, y:jindex-1, enemyCell: false }) 
        // } else if(jindex-1>=0 && boardData[index][jindex-1]!=="na" && playerSide!==boardData[index][jindex-1].split("_")[1]) { 
        //     hightlightArray.push({ x:index, y:jindex-1, enemyCell: true }) 
        // }
        
        // if(index+1<=7 && jindex+1<=7 && boardData[index+1][jindex+1]==="na") { 
        //     hightlightArray.push({ x:index+1, y:jindex+1, enemyCell: false }) 
        // } else if(index+1<=7 && jindex+1<=7 && boardData[index+1][jindex+1]!=="na" && playerSide!==boardData[index+1][jindex+1].split("_")[1]) { 
        //     hightlightArray.push({ x:index+1, y:jindex+1, enemyCell: true }) 
        // }
        // if(index+1<=7 && jindex-1>=0 && boardData[index+1][jindex-1]==="na") { 
        //     hightlightArray.push({ x:index+1, y:jindex-1, enemyCell: false }) 
        // } else if(index+1<=7 && jindex-1>=0 && boardData[index+1][jindex-1]!=="na" && playerSide!==boardData[index+1][jindex-1].split("_")[1]) { 
        //     hightlightArray.push({ x:index+1, y:jindex-1, enemyCell: true }) 
        // }
        // if(index-1>=0 && jindex+1<=7 && boardData[index-1][jindex+1]==="na") { 
        //     hightlightArray.push({ x:index-1, y:jindex+1, enemyCell: false }) 
        // } else if(index-1>=0 && jindex+1<=7 && boardData[index-1][jindex+1]!=="na" && playerSide!==boardData[index-1][jindex+1].split("_")[1]) { 
        //     hightlightArray.push({ x:index-1, y:jindex+1, enemyCell: true }) 
        // }
        // if(index-1>=0 && jindex-1>=0 && boardData[index-1][jindex-1]==="na") { 
        //     hightlightArray.push({ x:index-1, y:jindex-1, enemyCell: false }) 
        // } else if(index-1>=0 && jindex-1>=0 && boardData[index-1][jindex-1]!=="na" && playerSide!==boardData[index-1][jindex-1].split("_")[1]) { 
        //     hightlightArray.push({ x:index-1, y:jindex-1, enemyCell: true }) 
        // }
        // break;
        return hightlightArray
    }
}