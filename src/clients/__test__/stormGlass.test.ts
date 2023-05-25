import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { StormGlass } from '../stormGlass.ts';

describe("StormGlass Client", ()=>{
  it("should return normalized forecast from the StormGlass service", async ()=>{
    const lat = -33.792726;
    const lng = 151.721726;

    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng);
    assert.deepStrictEqual(response, {});
  });
});
