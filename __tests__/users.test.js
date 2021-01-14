import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import Users from '../src/screens/users';
global.fetch = jest.fn(async () =>
  Promise.resolve({
    json: () => Promise.resolve({rates: {CAD: 1.42}}),
  }),
);

jest.useFakeTimers();

describe('<Users />', () => {
  it('renders correctly', () => {
    const instance = renderer.create(<Users />);
    expect(instance).toMatchSnapshot();
    spyOn(console, 'error');
  });
});
