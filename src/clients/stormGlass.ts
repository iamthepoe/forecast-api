export class StormGlass {
  readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';

  constructor(protected request: typeof fetch){}

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    this.request("", {})
    return Promise.resolve({});
  }
}
