/**
 * @author Rishabh Anand <ranand16@gmail.com>
 * 
 */

import './Extensions'
import app from './App';
import CONFIG from './config/config';
import './config/db';

const PORT = CONFIG.PORT;

app.io.on('connection', (socket)=>{
  console.log("someone joined now")
  app.express["connectionSock"] = socket // attach socket in app itself
  socket.on('disconnect', ()=>{
    console.log("Someone disconnected from the room");
  });
})

app.server.listen(PORT, ():void => {
  console.log(`Server is listening on ${PORT}`);
});
