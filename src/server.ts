import { Express } from "express";
import http from "http";
import debug from "debug";

import App from "./app";

class Server {
  private port: number;

  private app: Express;

  private debugger?: debug.Debugger;

  private server?: http.Server;

  constructor(app: Express, port: number) {
    this.app = app;
    this.port = port;
  }

  init() {
    this.initApp();
    this.initDebugger();
    this.initServer();
  }

  private initApp() {
    const expressApp = new App(this.app, this.port);
    expressApp.init();
  }

  private initDebugger() {
    this.debugger = debug("src:server");
  }

  private initServer() {
    this.server = http.createServer(this.app);
    this.server.listen(this.port);
    this.server.on("error", (error: NodeJS.ErrnoException) => {
      if (error.syscall !== "listen") {
        throw error;
      }

      const bind = typeof this.port === "string"
        ? `Pipe ${this.port}`
        : `Port ${this.port}`;

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case "EACCES":
          // eslint-disable-next-line no-console
          console.error(`${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case "EADDRINUSE":
          // eslint-disable-next-line no-console
          console.error(`${bind} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    });

    this.server.on("listening", () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const addr = this.server!.address();
      const bind = typeof addr === "string"
        ? `pipe ${addr}`
        : `port ${addr instanceof Object ? addr.port : ""}`;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.debugger!(`Listening on ${bind}`);
    });
  }

  shutdown() {
    if (this.server) {
      this.server.close();
    }
  }
}

export default Server;
