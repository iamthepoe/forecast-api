import assert from 'assert/strict';
import { describe, it} from 'node:test';
import { StormGlass } from '../stormGlass.ts';
import { createFetchMock } from '../../../test/factories/fetch.mock.factory.ts';
import stormglassNormalizedResponseFixture from '../../../test/fixtures/stormglass_normalized_response_3_hours.json';
import * as stormglassWeatherPointFixture from '../../../test/fixtures/stormglass_weather_3_hours.json';

describe('StormGlass Client', () => {
  it('should return normalized forecast from the StormGlass service', async () => {
    const fetchMock = createFetchMock({responseData: {data: stormglassWeatherPointFixture}});
    const lat = -33.792726;
    const lng = 151.721726;

    const stormGlass = new StormGlass(fetchMock);
    const response = await stormGlass.fetchPoints(lat, lng);
    assert.deepStrictEqual(response, stormglassWeatherPointFixture);
  });
});
