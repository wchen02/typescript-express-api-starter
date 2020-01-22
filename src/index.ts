import express from "express";
import env from "dotenv";
import Util from "./util";
import Server from "./server";

const result = env.config();
if (result.error) {
  throw result.error;
}
const port = Util.normalizePort(process.env.PORT || "3000");
const server = new Server(express(), port);
server.init();
