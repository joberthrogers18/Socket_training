import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
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

export default new App().express;
