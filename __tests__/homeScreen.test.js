import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import HomeScreen from '../src/screens/home-screen';
jest.useFakeTimers();

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const instance = renderer.create(<HomeScreen />);
    expect(instance).toMatchSnapshot();
  });

  it('check if onScrollHandler increments the page data', () => {
    const component = renderer.create(<HomeScreen />);
    const instance = component.getInstance();
    expect(instance.state.page).toBe(0);
    instance.onScrollHandler();
    expect(instance.state.page).toBe(1);
  });
});
