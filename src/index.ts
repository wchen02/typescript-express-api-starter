import express from "express";
import Utils from "./utils";
import Server from "./server";

const port = Utils.normalizePort(process.env.PORT || "3000");
const server = new Server(express(), port);
server.init();
