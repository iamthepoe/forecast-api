const URL = 'http://localhost:3000';
import assert from 'assert/strict';
import { describe, it, before } from "node:test";

before(()=>{
  
});

describe("Beach forecast functional tests", ()=>{
  it("should return status code 200", async ()=>{
    const {body, status} = await fetch(`${URL}/forecast`);
    assert.strictEqual(body, [{
      "time": "2020-04-26T00:00:00+00:00",
      "forecast": [{
        "lat": -33.792726,
        "lng": 151.289824,
        "name": "Manly",
        "position": "E",
        "rating": 2,
        "swellDirection": 64.26,
        "swellHeight": 0.15,
        "swellPeriod": 3.89,
        "time": "2020-04-26T00:00:00+00:00",
        "waveDirection": 231.38,
        "waveHeight": 0.47,
        "windDirection": 299.45
      }]},
      {
      "time": "2020-04-26T01:00:00+00:00",
      "forecast": [{
        "lat": -33.792726,
        "lng": 151.289824,
        "name": "Manly",
        "position": "E",
        "rating": 2,
        "swellDirection": 123.41,
        "swellHeight": 0.21,
        "swellPeriod": 3.67,
        "time": "2020-04-26T01:00:00+00:00",
        "waveDirection": 232.12,
        "waveHeight": 0.46,
        "windDirection": 310.48
      }]}
    ]);
    assert.strictEqual(status, 200);
  });
});
