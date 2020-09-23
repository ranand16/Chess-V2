import { PieceType } from "../Enums/PieceType";
import { PlayerSide } from "../Enums/PlayerSide";
import Bishop from "../Piece/Bishop";
import King from "../Piece/King";
import Knight from "../Piece/Knight";
import Pawn from "../Piece/Pawn";
import PieceParams from "../Piece/pieceparams.interface";
import Queen from "../Piece/Queen";
import Rook from "../Piece/Rook";
import Spot from "../Spot";

export default class Board {
    private boardData: Array<Array<Spot>>
    constructor() {
        this.createBoard()
    }

    /**
     * create a new board or reset 
     */
    public createBoard = (): Array<Array<Spot>> => this.boardData = [
        [new Spot(0, 0, new Rook(PlayerSide.BLACK)), new Spot(0, 1, new Knight(PlayerSide.BLACK)), new Spot(0, 2, new Bishop(PlayerSide.BLACK)), new Spot(0, 3, new Queen(PlayerSide.BLACK)), new Spot(0, 4, new King(PlayerSide.BLACK)), new Spot(0, 5, new Bishop(PlayerSide.BLACK)), new Spot(0, 6, new Knight(PlayerSide.BLACK)), new Spot(0, 7, new Rook(PlayerSide.BLACK))],
        [new Spot(1, 0, new Pawn(PlayerSide.BLACK)), new Spot(1, 1, new Pawn(PlayerSide.BLACK)), new Spot(1, 2, new Pawn(PlayerSide.BLACK)), new Spot(1, 3, new Pawn(PlayerSide.BLACK)), new Spot(1, 4, new Pawn(PlayerSide.BLACK)), new Spot(1, 5, new Pawn(PlayerSide.BLACK)), new Spot(1, 6, new Pawn(PlayerSide.BLACK)), new Spot(1, 7, new Pawn(PlayerSide.BLACK))],
        [new Spot(2, 0), new Spot(2, 1), new Spot(2, 2), new Spot(2, 3), new Spot(2, 4), new Spot(2, 5), new Spot(2, 6), new Spot(2, 7)],
        [new Spot(3, 0), new Spot(3, 1), new Spot(3, 2), new Spot(3, 3), new Spot(3, 4), new Spot(3, 5), new Spot(3, 6), new Spot(3, 7)],
        [new Spot(4, 0), new Spot(4, 1), new Spot(4, 2), new Spot(4, 3), new Spot(4, 4), new Spot(4, 5), new Spot(4, 6), new Spot(4, 7)],
        [new Spot(5, 0), new Spot(5, 1), new Spot(5, 2), new Spot(5, 3), new Spot(5, 4), new Spot(5, 5), new Spot(5, 6), new Spot(5, 7)],
        [new Spot(6, 0, new Pawn(PlayerSide.WHITE)), new Spot(6, 1, new Pawn(PlayerSide.WHITE)), new Spot(6, 2, new Pawn(PlayerSide.WHITE)), new Spot(6, 3, new Pawn(PlayerSide.WHITE)), new Spot(6, 4, new Pawn(PlayerSide.WHITE)), new Spot(6, 5, new Pawn(PlayerSide.WHITE)), new Spot(6, 6, new Pawn(PlayerSide.WHITE)), new Spot(6, 7, new Pawn(PlayerSide.WHITE))],    
        [new Spot(7, 0, new Rook(PlayerSide.WHITE)), new Spot(7, 1, new Knight(PlayerSide.WHITE)), new Spot(7, 2, new Bishop(PlayerSide.WHITE)), new Spot(7, 3, new Queen(PlayerSide.WHITE)), new Spot(7, 4, new King(PlayerSide.WHITE)), new Spot(7, 5, new Bishop(PlayerSide.WHITE)), new Spot(7, 6, new Knight(PlayerSide.WHITE)), new Spot(7, 7, new Rook(PlayerSide.WHITE))],
    ]
    
    /**
     * get board data to be sent to frontend or saved to db
     */
    public getBoard = (): Array<Array<PieceParams>> => {
        let boardData: Array<Array<PieceParams>> = [[],[],[],[],[],[],[],[]]
        console.log(boardData)
        this.boardData.map((row, i)=> {
            row.map((spot, j)=>{
                boardData[i][j] = spot.getSpot().piece?spot.getSpot().piece.getPiece():{ pieceType: null, pieceColor: null, isAvailable: false }
            })
        })
        return boardData
    }

    /**
     * 
     * @param bData set board data as bData
     */
    public setBoard = (bData: Array<Array<PieceParams>>) => {
        bData.map((row, i)=> {
            row.map((spot, j)=>{
                switch(spot.pieceType) {
                    case PieceType.BISHOP: 
                        this.boardData[i][j] = new Spot(i, j, new Bishop(spot.pieceColor))
                    break;
                    case PieceType.KING: 
                        this.boardData[i][j] = new Spot(i, j, new King(spot.pieceColor))
                    break;
                    case PieceType.KNIGHT: 
                        this.boardData[i][j] = new Spot(i, j, new Knight(spot.pieceColor))
                    break;
                    case PieceType.PAWN: 
                        this.boardData[i][j] = new Spot(i, j, new Pawn(spot.pieceColor))
                    break;
                    case PieceType.QUEEN: 
                        this.boardData[i][j] = new Spot(i, j, new Queen(spot.pieceColor))
                    break;
                    case PieceType.ROOK: 
                        this.boardData[i][j] = new Spot(i, j, new Rook(spot.pieceColor))
                    break;
                    default: 
                        this.boardData[i][j] = new Spot(i, j)
                    break;
                }
            })
        })
    }
}