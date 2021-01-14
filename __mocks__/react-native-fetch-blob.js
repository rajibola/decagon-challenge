jest.mock('react-native-fetch-blob', () => {
  return {
    DocumentDir: () => {},
    fetch: () => {},
    base64: () => {},
    android: () => {},
    ios: () => {},
    config: () => {},
    session: () => {},
    fs: () => {
      return {
        onError: () => {},
      };
    },
    wrap: () => {},
    polyfill: () => {},
    JSONStream: () => {},
  };
});
