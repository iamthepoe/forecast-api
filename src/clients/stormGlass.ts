export class StormGlass {
  readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
  readonly stormGlassAPISource = 'noaa';
  
  constructor(protected request: typeof fetch){}

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    return this.request(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}`, {
      method: 'GET'
    });
  }
}
