import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller('forecast')
export class forecastController {

  @Get('')
  public getForecastForLoggedUser(_: Request, res: Response){
    
  }
}
