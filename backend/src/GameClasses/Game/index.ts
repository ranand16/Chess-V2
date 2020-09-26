/** 
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import IdGenerator from "../IdGenerator"
import HumanPlayer from "../HumanPlayer"
import GameParams from "./game.interface"
import PlayerParams from "../Player/player.interface"
import Board from "../Board"
import PieceParams from "../Piece/pieceparams.interface"

export default class Game {
    private gameName: String
    private gameId: String
    private players: Array<HumanPlayer>
    private spectators: Array<HumanPlayer>
    private gameChance: String
    private board: Board
    constructor(gameName: String) {
        this.players = []
        this.spectators = []
        this.setGameId(null)
        this.setGameName(gameName)
        this.board = new Board()
    }

    /**
     * 
     * @param gameName This is the new game's name
     */
    public setGameName = (gameName: String): void => {
        this.gameName = gameName
    }

    /**
     * This returns current game name
     * @returns the game name as string
     */
    public getGameName = (): String => this.gameName

    /**
     * This function will be used to generate new game id s
     */
    public setGameId = (gameId): void => {
        this.gameId = gameId?gameId:new IdGenerator().generateNewId()
    }

    /**
     * This fucntion is responsible for the 
     */
    public getGameId = (): String => this.gameId

    /**
     * This returns all the players in the game right now
     * @returns array all players: HumanPlayer
     */
    public getPlayers = (): Array<HumanPlayer> => this.players

    /**
     * This returns all the players in the game right now
     * @returns array all players: HumanPlayer
     */
    public setPlayers = (players: Array<HumanPlayer>): Array<HumanPlayer> => this.players = players

    /**
     * Return all the spectators in the current game
     * @returns array all players: HumanPlayer
     */
    public getSpectators = (): Array<HumanPlayer> => this.spectators

    /**
     * This returns all the players in the game right now
     * @returns array all players: HumanPlayer
     */
    public setSpectators = (spectators: Array<HumanPlayer>): Array<HumanPlayer> => this.spectators = spectators

    /**
     * return current chance
     */
    public getChance = (): String => this.gameChance

    /**
     * 
     * @param chance set game chance to chance
     */
    public setChance = (chance: String): String => this.gameChance = chance

    /**
     * @returns current board
     */
    public getBoard = (): Board => this.board

    /**
     * @returns currently set board
     */
    public setBoard = (board: Board): Board => this.board = board

    /**
     * get the board data
     */
    public getBoardData = (): Array<Array<PieceParams>> => this.board.getBoard()

    /**
     * 
     * @param board new board data
     */
    public setBoardData = (board: Array<Array<PieceParams>>) => this.board.setBoard(board)

    /**
     * 
     * @param spectator Add this spectator to this game
     * returns number of spectators in the current game
     */
    public addSpectator = (spectator: HumanPlayer): number => this.spectators.push(spectator)

    /**
     * 
     * @param spectator Change this player from spectator top player
     * @return the spectator HumanPlayer
     */
    public changeSpectatorToPlayer = (spectator: HumanPlayer): HumanPlayer => {
        spectator.setToPlayer()
        return spectator
    }

    /**
     * 
     * @param player Add this player to the game
     */
    public addPlayer = (player: HumanPlayer): void => {
        try{
            if(this.players.length>=2) return 
            this.players.push(player)
        } catch (e){
            console.log(e)
            return e
        }
    }

    /**
     * 
     * @param spectatorId Remove this spectator from the spectator list 
     * @returns array of remaining spectators:HumanPlayers
     */
    public removeSpectator = (spectatorId: String): Array<HumanPlayer> => {
        console.log(this.spectators)
        // this.spectators.removeIf((each, i) => each["spectatorId"] === spectatorId )
        return this.spectators
    }

    /**
     * Start the game now
     */
    public startGame = () => {
        this.resetGame()
        this.changeGameChance()
    }

    /**
     * this function will give chance to the white player if no one has the chance or chnage the chance
     */
    public changeGameChance = () => {
        if(!this.gameChance) this.gameChance = "white"
        if(this.gameChance && this.gameChance === "white") this.gameChance = "dark"
        else if(this.gameChance && this.gameChance === "dark") this.gameChance = "white"
    }

    /**
     * This function is to create new game using the db data
     * 
     * @param gameDoc - This is a game document from db
     * @returns a Game object
     */
    public setGame = (gameDoc): Game => {
        const { players: playersDoc, spectators: spectatorsDoc, gameId, gameName, boardData, gameChance } = gameDoc
        const players: Array<HumanPlayer> = new Array()
        const spectators: Array<HumanPlayer> = new Array()
        playersDoc.forEach((playerDoc: PlayerParams) =>{ 
            const newPlayer = new HumanPlayer(playerDoc.playerName, playerDoc.playerSide)
            newPlayer.setPlayer(playerDoc)
            players.push(newPlayer)
        });
        spectatorsDoc.forEach((spectatorDoc: PlayerParams) =>{ 
            const newPlayer = new HumanPlayer(spectatorDoc.playerName, spectatorDoc.playerSide)
            newPlayer.setPlayer(spectatorDoc)
            spectators.push(newPlayer)
        });
        this.setPlayers(players)
        this.setSpectators(spectators)
        this.setGameId(gameId)
        this.setGameName(gameName)
        this.setChance(gameChance)
        this.setBoardData(boardData)
        return this
    }

    /**
     * This function will return the variables in the current game to be saved in db
     * @returns all the vlariables in this game
     */
    public getGame = (): GameParams => {
        const playersDocs: Array<PlayerParams> = new Array()
        const spectatorDocs: Array<PlayerParams> = new Array()
        this.players.forEach((player) => playersDocs.push(player.getPlayer()))
        this.spectators.forEach((spectator) => spectatorDocs.push(spectator.getPlayer()))
        return {
            gameId: this.gameId,
            gameName: this.gameName,
            gameChance: this.gameChance,
            players: playersDocs,
            spectators: spectatorDocs,
            boardData: this.getBoardData()
        }
    }

    public movePiece = (from, to): Game => {
        const { fromI, fromJ } = from
        const { toI, toJ } = to
        this.board.movePiece({ fromI, fromJ },{ toI, toJ })
        return this
    }

    /**
     * This function will be used to reset the current game
     */
    public resetGame = (): void => {

    }
}