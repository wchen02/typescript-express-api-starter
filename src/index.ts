import express from "express";
import Util from "./util";
import Server from "./server";

const port = Util.normalizePort(process.env.PORT || "3000");
const server = new Server(express(), port);
server.init();
