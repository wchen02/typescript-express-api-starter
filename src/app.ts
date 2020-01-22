import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import IndexRouter from "./routes";

class App {
  private app: express.Express;

  constructor(app: express.Express, port: number) {
    this.app = app;
    this.app.set("port", port);
  }

  init() {
    this.setupMiddlewares();
    this.setupRoutes();
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
