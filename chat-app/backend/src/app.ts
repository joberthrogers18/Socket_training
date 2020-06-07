import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import socketIo from "socket.io";

import routes from "./routes";

class App {
  public express: express.Application;
  public io: socketIo.Server;

  public constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
  }

  public initializeSocket(io: socketIo.Server) {
    // this.express.use((req: express.Request, res: express.Response, next) => {
    //   console.log('passou');
    //   console.log(io);
    //   req.io = io;
    //   return next();
    // });
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect(
      "mongodb://localhost:27017/tsnode",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Database is connected!");
      }
    );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App();
