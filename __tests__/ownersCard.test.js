import React from 'react';
import renderer from 'react-test-renderer';
import {OwnersCard} from '../src/shared/owners-card';

jest.useFakeTimers();

describe('<OwnersCard/>', () => {
  it('OwnersCard component renders correctly', () => {
    mockData.map((data) => {
      const instance = renderer.create(<OwnersCard data={data} />);
      expect(instance).toMatchSnapshot();
    });
  });
});

const mockData = [
  {
    bio: 'lorem ipsum ndhd fdjdjjd d dsssns',
    car_color: 'red',
    car_model: 'Toyota',
    car_model_year: '2008',
    gende: 'male',
    job_title: 'Senior Developer',
    email: 'rajibola1997@gmail.com',
    first_name: 'ridwan',
    last_name: 'ajibola',
  },
  {
    bio: 'lorem ipsum ndhd fdjdjjd d dsssns',
    car_color: 'blue',
    car_model: 'Mazda',
    car_model_year: '2004',
    gende: 'female',
    job_title: 'Junior Developer',
    email: 'rajibola1997@gmail.com',
    first_name: 'john',
    last_name: 'doe',
  },
  {
    bio: 'lorem ipsum ndhd fdjdjjd d dsssns',
    car_color: 'green',
    car_model: 'Toyota',
    car_model_year: '2008',
    gende: 'male',
    job_title: 'DevOp Developer',
    email: 'rajibola1997@gmail.com',
    first_name: 'shishi',
    last_name: 'ma',
  },
  {
    bio: 'lorem ipsum ndhd lured d disius',
    car_color: 'brown',
    car_model: 'BMW',
    car_model_year: '2008',
    gende: 'male',
    job_title: 'Senior Developer',
    email: 'rajibola1997@gmail.com',
    first_name: 'kaka',
    last_name: 'demo',
  },
];
