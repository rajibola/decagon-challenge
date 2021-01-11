import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../colors';
import HeaderBar from '../../shared/header-bar';
import {handleDate} from '../../utils/helpers';
import {styles} from './styles';

export class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
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
        this.props.navigation.navigate('UserInfo', {
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
        <Text style={styles.name}>{item.fullName}</Text>
        <Text style={styles.date}>{handleDate(item.createdAt)}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title="Contacts" leftIcon />
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default Users;
