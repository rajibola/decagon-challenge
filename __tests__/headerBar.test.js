import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import HeaderBar from '../src/shared/header-bar';

jest.useFakeTimers();

describe('<HeaderBar/>', () => {
  it('HeaderBar component renders correctly', () => {
    const text = 'Incorrect Path';
    const instance = renderer.create(<HeaderBar title={text} />);
    expect(instance).toMatchSnapshot();
  });

  it('HeaderBar component renders correctly after an update', () => {
    const value1 = 'Hello';
    const value2 = 'Hi';

    const instance = renderer.create(<HeaderBar title={value1} />);
    const textInstance = instance.root.findByType(Text);
    expect(textInstance.props.children).toBe(value1);

    instance.update(<HeaderBar title={value2} />);
    expect(textInstance.props.children).toBe(value2);
  });
});
