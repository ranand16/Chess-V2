/**
 * @author Rishabh Anand <ranand16@gmail.com>
 */

import Piece from "..";
import Board from "../../Board";
import { PieceType } from "../../Enums/PieceType";
import { PlayerSide } from "../../Enums/PlayerSide";
import Spot from "../../Spot";

 export default class Queen extends Piece {
    constructor(playerSide: PlayerSide) {
        super(PieceType.QUEEN, playerSide)
    }

    public calculateMovePositions = (board: Board, spot: Spot, playerSide: PlayerSide): Array<Object> => {
        let hightlightArray: Array<Object> = []
        const boardData = board.getBoard()
        let index = spot.getX()
        let jindex = spot.getY()

        index = spot.getX(); jindex = spot.getY();
        while(index>=0 && index<=7){
          if(index-1>=0 && !(boardData[index-1][jindex]).isAvailable){ hightlightArray.push({ x:index-1, y:jindex, enemyCell: false }) } 
          else if(index-1>=0 && (boardData[index-1][jindex]).isAvailable && playerSide!==(boardData[index-1][jindex]).pieceColor){
            hightlightArray.push({ x:index-1, y:jindex, enemyCell: true });
            break;
          } else break;
          --index;
        }
        index = spot.getX(); jindex = spot.getY();
        while(index>=0 && index<=7){
          if(index+1<=7 && !(boardData[index+1][jindex]).isAvailable){ hightlightArray.push({ x:index+1, y:jindex, enemyCell: false }) } 
          else if(index+1<=7 && (boardData[index+1][jindex]).isAvailable && playerSide!==(boardData[index+1][jindex]).pieceColor){
            hightlightArray.push({ x:index+1, y:jindex, enemyCell: true });
            break;
          } else break;
          ++index;
        }
        index = spot.getX(); jindex = spot.getY();
        while(jindex>=0 && jindex<=7){
          if(jindex-1>=0 && !(boardData[index][jindex-1]).isAvailable){ hightlightArray.push({ x:index, y:jindex-1, enemyCell: false }) } 
          else if(jindex-1>=0 && (boardData[index][jindex-1]).isAvailable && playerSide!==(boardData[index][jindex-1]).pieceColor){
            hightlightArray.push({ x:index, y:jindex-1, enemyCell: true });
            break;
          } else break;
          --jindex;
        }
        index = spot.getX(); jindex = spot.getY();
        while(jindex>=0 && jindex<=7){
          if(jindex+1<=7 && !(boardData[index][jindex+1]).isAvailable){
            hightlightArray.push({ x:index, y:jindex+1, enemyCell: false });          
          } else if(jindex+1<=7 && (boardData[index][jindex+1]).isAvailable && playerSide!==(boardData[index][jindex+1]).pieceColor){
            hightlightArray.push({ x:index, y:jindex+1, enemyCell: true });
            break;
          } else break;
          ++jindex;
        }

        index = spot.getX(); jindex = spot.getY();
        while(index>=0 && index<=7 && jindex>=0 && jindex<=7){
          if(index-1>=0 && jindex-1>=0 && !(boardData[index-1][jindex-1]).isAvailable){ hightlightArray.push({ x:index-1, y:jindex-1, enemyCell: false }) }
          else if(index-1>=0 && jindex-1>=0 && (boardData[index-1][jindex-1]).isAvailable && playerSide!==(boardData[index-1][jindex-1]).pieceColor){
            hightlightArray.push({ x:index-1, y:jindex-1, enemyCell: true });
            break;
          } else break;
          --index; --jindex;
        }
        index = spot.getX(); jindex = spot.getY();
        while(index>=0 && index<=7 && jindex>=0 && jindex<=7){
          if(index+1<=7 && jindex-1>=0 && !(boardData[index+1][jindex-1]).isAvailable){ hightlightArray.push({ x:index+1, y:jindex-1, enemyCell: false }) } 
          else if(index+1<=7 && jindex-1>=0 && boardData[index+1][jindex-1].isAvailable && playerSide!==(boardData[index+1][jindex-1]).pieceColor){
            hightlightArray.push({ x:index+1, y:jindex-1, enemyCell: true });
            break;
          } else break;
          ++index; --jindex;
        }
        index = spot.getX(); jindex = spot.getY();
        while(index>=0 && index<=7 && jindex>=0 && jindex<=7){
          if(index-1>=0 && jindex+1<=7 && !(boardData[index-1][jindex+1]).isAvailable){ hightlightArray.push({ x:index-1, y:jindex+1, enemyCell: false }) }
          else if(index-1>=0 && jindex+1<=7 && (boardData[index-1][jindex+1]).isAvailable && playerSide!==boardData[index-1][jindex+1].pieceColor){
            hightlightArray.push({ x:index-1, y:jindex+1, enemyCell: true });
            break;
          } else break;
          --index; ++jindex;
        }
        index = spot.getX(); jindex = spot.getY();
        while(index>=0 && index<=7 && jindex>=0 && jindex<=7){
          if(index+1<=7 && jindex+1<=7 && !(boardData[index+1][jindex+1]).isAvailable){ hightlightArray.push({ x:index+1, y:jindex+1, enemyCell: false }) } 
          else if(index+1<=7 && jindex+1<=7 && boardData[index+1][jindex+1].isAvailable && playerSide!==boardData[index+1][jindex+1].pieceColor){
            hightlightArray.push({ x:index+1, y:jindex+1, enemyCell: true });
            break;
          } else break;
          ++index; ++jindex;
        }       

        return hightlightArray
    }
 }