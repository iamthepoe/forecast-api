import express from 'express';
import { Server } from '@overnightjs/core';
import { ForecastController } from './controllers/forecast.js';
import { Application } from 'express';
import cors from 'cors';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
