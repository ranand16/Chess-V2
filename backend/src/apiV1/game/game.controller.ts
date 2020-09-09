import { Request, Response } from 'express'
import * as express from 'express';
import * as socketio from 'socket.io'

export default class GameController {
    public express: express.Application = express()
    public io: socketio; 
    public socket;
    public hostAGame = async (req: Request, res: Response): Promise<any> => {
        try {
            this.io = req.app["io"]
            this.socket = req.app["connectionSock"]
            this.socket.join(req.body.roomID)
            console.log("Someone joined room ", req.body.roomID)
            // setInterval(()=>{
            // this.socket.broadcast.to(req.body.roomID).emit('updateFrontendRoomData', { "roomId": req.body.roomID })
            // }, 2000)
            // this.io.emit("updateFrontendRoomData", { success: true, message: "New game created!" })
            return res.status(200).send({
                success: true,
                message: "New game created!",
                data: null
            })
        } catch(err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

    public broadcastGameUpdate = async (req: Request, res: Response): Promise<any> => {
        try {
            this.io = req.app["io"]
            this.socket = req.app["connectionSock"]
            this.socket.broadcast.to(req.body.roomID).emit('updateFrontendRoomData', { room:"THis is the room id" })
        } catch(err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            })
        }
    }
}