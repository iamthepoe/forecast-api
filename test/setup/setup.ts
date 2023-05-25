import { SetupServer } from '../../src/server.ts';
import { Application } from 'express';
import * as http from 'http';

const server = new SetupServer();
server.init();

let serverInstance: http.Server;

const setupServer = (PORT: number): void => {
  const app: Application = server.getApp();
  serverInstance = app.listen(PORT);
};

const dropServer = (): void => {
  serverInstance.close();
};

export { setupServer, dropServer };
