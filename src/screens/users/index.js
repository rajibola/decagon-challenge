import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../colors';
import HeaderBar from '../../shared/header-bar';
import {Loader} from '../../shared/loader';
import {handleDate} from '../../utils/helpers';
import {styles} from './styles';

export class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {
    this.setState({loading: true});
    fetch('https://android-json-test-api.herokuapp.com/accounts')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({error, loading: false});
      });
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.list}
      onPress={() => {
        this?.props?.navigation?.navigate('UserInfo', {
          details: item,
        });
      }}>
      <View style={styles.avatarContainer}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <View
          style={[
            styles.gender,
            item.gender === 'female' && {
              backgroundColor: colors.green,
            },
          ]}
        />
      </View>
      <View>
        <Text style={styles.name}>{item?.fullName}</Text>
        <Text style={styles.date}>{handleDate(item?.createdAt)}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar
          title="Contacts"
          onLeftPress={() => this?.props?.navigation?.goBack()}
        />
        <FlatList
          data={this.state?.data}
          renderItem={this?.renderItem}
          keyExtractor={(item) => item?.id}
        />
        {this.state?.loading && <Loader />}
      </View>
    );
  }
}

export default Users;

Users.defaultProps = [
  {
    id: '5e5a3027d9d9e4a6369c835b',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    fullName: 'Addie Sharon',
    createdAt: 'Sat, 29 Feb 2020 09:34:31 GMT',
    gender: 'male',
    colors: [],
    countries: [
      'China',
      'South Africa',
      'france',
      'Mexico',
      'Japan',
      'Estonia',
      'Colombia',
      'China',
    ],
  },
];
