import { normalizePort } from './utils';
import express from 'express';
import Server from './server';

const port = normalizePort(process.env.PORT || '3000');
const server = new Server(express(), port);
server.init();
