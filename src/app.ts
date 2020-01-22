import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import config from "config";
import knex, * as Knex from "knex";

import IndexRouter from "./router";

class App {
  private app: express.Express;

  private config?: config.IConfig;

  private knex?: Knex;

  constructor(app: express.Express, port: number) {
    this.app = app;
    this.app.set("port", port);
  }

  init() {
    this.config = config;
    this.initDatabase();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private initDatabase() {
    if (this.config) {
      this.knex = knex(this.config.get<knex.Config>("db"));
    }
  }

  private setupMiddlewares() {
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
  }

  private setupRoutes() {
    const indexRouter = new IndexRouter(express.Router());
    indexRouter.init();
    indexRouter.useBy(this.app);
  }
}

export default App;
