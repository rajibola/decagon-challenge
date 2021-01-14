import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import {AlertComponent} from '../src/shared/alert-component';
jest.useFakeTimers();

describe('<AlertComponent/>', () => {
  it('Alert component renders correctly', () => {
    const text = 'Incorrect Path';
    const instance = renderer.create(<AlertComponent text={text} />);
    expect(instance).toMatchSnapshot();
  });

  it('Alert component renders correctly after an update', () => {
    const value1 = 'Hello';
    const value2 = 'Hi';

    const instance = renderer.create(<AlertComponent text={value1} />);
    const textInstance = instance.root.findByType(Text);
    expect(textInstance.props.children).toBe(value1);

    instance.update(<AlertComponent text={value2} />);
    expect(textInstance.props.children).toBe(value2);
  });
});
