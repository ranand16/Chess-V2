import { PieceType } from "../Enums/PieceType";

export default class Board {
    // private boardData: Array<Array<PieceType>>
    private boardData: Array<Array<String>>
    constructor() {
        this.createBoard()
    }

    /**
     * create a new board or reset 
     */
    public createBoard = (): Array<Array<String>> => this.boardData = [
        ["rook_dark", "knight_dark", "bishop_dark", "queen_dark", "king_dark", "bishop_dark", "knight_dark", "rook_dark"],
        ["pawn_dark", "pawn_dark", "pawn_dark", "pawn_dark", "pawn_dark", "pawn_dark", "pawn_dark", "pawn_dark"],
        ["na", "na", "na", "na", "na", "na", "na", "na"],
        ["na", "na", "na", "na", "na", "na", "na", "na"],
        ["na", "na", "na", "na", "na", "na", "na", "na"],
        ["na", "na", "na", "na", "na", "na", "na", "na"],
        ["pawn_white", "pawn_white", "pawn_white", "pawn_white", "pawn_white", "pawn_white", "pawn_white", "pawn_white"],        
        ["rook_white", "knight_white", "bishop_white", "queen_white", "king_white", "bishop_white", "knight_white", "rook_white"],
    ]
    
    /**
     * get board data
     */
    public getBoard = (): Array<Array<String>> => this.boardData

    /**
     * 
     * @param bData set board data as bData
     */
    public setBoard = (bData: Array<Array<String>>): Array<Array<String>> => this.boardData = bData 
}