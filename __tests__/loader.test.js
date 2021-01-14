import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import {Loader} from '../src/shared/loader';

jest.useFakeTimers();

describe('<Loader/>', () => {
  it('Loader component renders correctly', () => {
    const text = 'Incorrect Path';
    const instance = renderer.create(<Loader text={text} />);
    expect(instance).toMatchSnapshot();
  });

  it('Loader component renders correctly after an update', () => {
    const value1 = 'Hello';
    const value2 = 'Hi';

    const instance = renderer.create(<Loader text={value1} />);
    const textInstance = instance.root.findByType(Text);
    expect(textInstance.props.children).toBe(value1);

    instance.update(<Loader text={value2} />);
    expect(textInstance.props.children).toBe(value2);
  });
});
