global.fetch = jest.fn(async () =>
  Promise.resolve({
    json: () => Promise.resolve({rates: {CAD: 1.42}}),
  }),
);
