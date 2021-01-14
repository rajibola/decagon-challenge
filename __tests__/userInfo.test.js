import React from 'react';
import renderer from 'react-test-renderer';
import UserInfo from '../src/screens/user-info';

jest.useFakeTimers();

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

// describe('rendering', () => {
//   let props; // use type "any" to opt-out of type-checking
//   beforeEach(() => {
//     props = createTestProps({});

//     it('should render a <View />', () => {
//       let wrapper = renderer.create(<UserInfo {...props} />);
//       expect(wrapper.root.findByType(View)).toHaveLength(1); // SUCCESS
//       expect(props.navigation.navigate).toHaveBeenCalledWith('Users'); // SUCCESS
//     });
//   });
// });

describe('App', () => {
  it('renders app', () => {
    const props = createTestProps({
      route: {
        params: {
          details: {
            colors: [],
            fullName: '',
            countries: [],
            gender: '',
            avatar: '',
            createdAt: '',
          },
        },
      },
    });
    const tree = renderer.create(<UserInfo {...props} />);
    expect(tree).toMatchSnapshot();
    spyOn(console, 'error');
  });
});
