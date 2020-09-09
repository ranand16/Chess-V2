import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as http from 'http';
import * as socketio from 'socket.io'
import apiV1 from './apiV1/index';
import * as errorHandler from './helpers/errorHandler';

class App {
  public express: express.Application;
  public server = null;
  public io = null;
  constructor() {
    this.express = express();
    this.server = http.createServer(this.express);
    this.io = socketio(this.server)
    this.setMiddlewares();
    this.setSocketConnection()
    this.setRoutes();
    this.catchErrors();
  }

  private setMiddlewares(): void {
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(helmet());
  }

  private setSocketConnection(): void {
    this.express["io"] = this.io // attach io in app itself
    // ----------------- OR -----------------
    // this.express.use((req,res,next)=>{ // pass IO in request
    //   req["io"] = this.io
    //   next();
    // })
  }

  private setRoutes(): void {
    this.express.use('/v1', apiV1);
  }

  private catchErrors(): void {
    this.express.use(errorHandler.notFound);
    this.express.use(errorHandler.internalServerError);
  }
}

const app = new App()
export default app;
