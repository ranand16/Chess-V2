/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import './Extensions'
import app from './App';
import CONFIG from './config/config';
import './config/db';
import HumanPlayer from './GameClasses/HumanPlayer';
import { PlayerType } from './GameClasses/Enums/PlayerType';
import DataAccess from './DataAccess';
import Game from './GameClasses/Game';
import GameParams from './GameClasses/Game/game.interface';

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
			if(userName) user = new HumanPlayer(PlayerType.HUMAN, userName) // create a user object
			else throw { status: false, data: "User name is mandatory." }
			if(!roomName) throw { status: false, data: "Room name is mandatory." } // check ${room}'s availability(created already or not)
			gameParams = await db.findGameUsingName(roomName)
			game = new Game(roomName)
			if(gameParams && type==="join" ) { // There is a room which is already created. So this is JOIN
				game.setGame(gameParams)
				game.addSpectator(user)
				let updateGame = db.updateGame(game.getGame())
				if(!updateGame) throw { status: false, data: "There was some error!" }
				app.io.to(game.getGameId()).emit('updateState', game.getGame() )
			} else if(!gameParams && type==="host") { // A new room is going to be created
				game.addSpectator(user)
				let savedGame = db.addNewGame(game.getGame())
				if(!savedGame) throw { status: false, data: "Could not create game!" }
			}
			socket.join(game.getGameId());
			response["data"] = { game, user }
			callback(response)
		} catch(err) {
			response["status"] = false
			response["data"] = err["data"] || "There was some kind of error."
			callback(response)
		}
	});

	socket.on('disconnect', ()=>{
		console.log("Someone disconnected from the room");
	});
})
