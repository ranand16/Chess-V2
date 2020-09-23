/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import './Extensions'
import app from './App';
import CONFIG from './config/config';
import './config/db';
import HumanPlayer from './GameClasses/HumanPlayer';
import DataAccess from './DataAccess';
import Game from './GameClasses/Game';
import GameParams from './GameClasses/Game/game.interface';
import { PlayerSide } from './GameClasses/Enums/PlayerSide';

const PORT = CONFIG.PORT;

app.server.listen(PORT, ():void => {
  	console.log(`Server is listening on ${PORT}`);
});

app.io.on('connection', (socket)=>{
	console.log("someone joined now")
	const db = new DataAccess();
	// app.express["connectionSock"] = socket
	socket.on('joinroom', async ({userName, roomName}, type="join", callback)=>{
		const response = { status: true, data: {} }
		let gameParams: GameParams ; let user: HumanPlayer; let game: Game 
		try {
			if(userName) user = new HumanPlayer(userName) // create a user object
			else throw { status: false, data: "User name is mandatory." }
			if(!roomName) throw { status: false, data: "Room name is mandatory." } // check ${room}'s availability(created already or not)
			gameParams = await db.findGameUsingName(roomName)
			game = new Game(roomName)
			if(gameParams && type==="join" ) { // There is a room which is already created. So this is JOIN
				console.log("1. gameParams and join")
				game.setGame(gameParams)
				game.addSpectator(user)
				let updateGame = await db.updateGame(game.getGame())
				if(!updateGame) throw { status: false, data: "There was some error!" }
				app.io.to(game.getGameId()).emit('updateState', game.getGame())
			} else if(!gameParams && type==="host") { // A new room is going to be created
				console.log("2. no gameParams and host")
				game.addSpectator(user)
				console.log(game.getGame())
				let savedGame = await db.addNewGame(game.getGame())
				if(!savedGame) throw { status: false, data: "Could not create game!" }
			} else if(gameParams && type==="host") {
				throw { status: false, data: "Room already created, choose a different name!" }
			}
			socket.join(game.getGameId());
			response["data"] = { game: game.getGame(), user }
			callback(response)
		} catch(err) {
			console.log(err.stack)
			response["status"] = false
			response["data"] = err["data"] || "There was some kind of error."			
			callback(response)
		}
	});

	socket.on('participate', async (userId, gameId, playerSide, callback)=>{
		let gameParams: GameParams; let game: Game; let user: HumanPlayer; let response = {status: true, data: {}}; 
		let userIndex;
		playerSide = playerSide==="white"?PlayerSide.WHITE:PlayerSide.BLACK
        try{ 
            if(!userId && !gameId) throw { status: false, data: "User id and Room id are mandatory." }
			gameParams = await db.findGameUsingId(gameId)
			if(!gameParams) throw { status: false, data: "Room was not found in the database." }
			game = new Game(gameParams.gameName)
			game.setGame(gameParams)
			let players = game.getPlayers()
			let spectators = game.getSpectators()
			if(players.length === 2 ) throw { data: "2 players are already playing" }
			user = spectators.find((spec, j) => {
				userIndex = j;
				return (spec.getPlayerId() == userId);
			})
			if(players.length === 0 ) user.setPlayerSide(playerSide)
			else if(players.length === 1) {
				user.setPlayerSide(players[0].getPlayerSide()?PlayerSide.WHITE:PlayerSide.BLACK)
				game.startGame()
			}
			game.addPlayer(user)
			let updateRoomData = db.updateGame(game.getGame())
			if(!updateRoomData) throw { data: "Was not able to update game data in database!" }
            socket.broadcast.to(game.getGameId()).emit('updateFrontendRoomData', { game: game.getGame() })
            response["data"] = { game: game.getGame() }
            callback(response)
        } catch(err) {
            response["status"] = false
            console.log(err)
            response["data"] = err["data"] || "There was some kind of error."
            callback(response)
        }
    });
    
	socket.on('disconnect', ()=>{
		console.log("Someone disconnected from the room");
	});
})
