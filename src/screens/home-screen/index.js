import Papa from 'papaparse';
import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import RNFS from 'react-native-fs';
import {OwnersCard} from '../../shared/owners-card';

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Car{'\n'} Owners </Text>

        <FlatList
          data={Data}
          renderItem={({item}) => <OwnersCard data={item} />}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>
    );
  }
}

export default HomeScreen;

const Data = [
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
];
