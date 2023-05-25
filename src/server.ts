import express from 'express';
import { Server } from '@overnightjs/core';
import { ForecastController } from './controllers/forecast.js';

export class SetupServer extends Server{
  constructor(private port = 3000){
    super();
  }

  public init(): void {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void{
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }
}

