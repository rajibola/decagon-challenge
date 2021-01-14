import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import Users from '../src/screens/users';

jest.useFakeTimers();

describe('<Users />', () => {
  it('renders correctly', () => {
    const instance = renderer.create(<Users />);
    expect(instance).toMatchSnapshot();
  });
});
