import { mock } from 'node:test';

type FetchMockConfig = {
  responseData: any;
};

const createFetchMock = ({ responseData }: FetchMockConfig) => {
  return mock.fn(
    fetch,
    (input: RequestInfo | URL, init?: RequestInit | undefined) => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(responseData),
      });
    }
  ) as typeof fetch;
};

export { createFetchMock };
