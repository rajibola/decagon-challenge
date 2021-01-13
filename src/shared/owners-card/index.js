import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {wp} from '../resposive-dimension';

export class OwnersCard extends PureComponent {
  render() {
    const {
      bio,
      car_color,
      car_model,
      car_model_year,
      gender,
      job_title,
      email,
      first_name,
      last_name,
    } = this.props.data;
    return (
      <View style={styles.card}>
        <Text style={styles.name}>
          {first_name} {last_name} ({gender})
        </Text>

        <View style={styles.containerRow}>
          <View>
            <View style={styles.row}>
              <View style={styles.row}>
                <MaterialIcons name="work" size={wp(15)} style={styles.icon} />
                <Text style={styles.detail}>{job_title}</Text>
              </View>

              <MaterialIcons name="email" size={wp(15)} style={styles.icon} />
              <Text style={styles.detail}>{email}</Text>
            </View>

            <View style={styles.row}>
              <View style={styles.row}>
                <MaterialIcons
                  name="directions-car"
                  size={wp(15)}
                  style={styles.icon}
                />
                <Text style={styles.detail}>
                  {car_model} {car_model_year}
                </Text>
              </View>
              <MaterialIcons
                name="color-lens"
                size={wp(15)}
                style={styles.icon}
              />
              <Text style={styles.detail}>{car_color}</Text>
            </View>
          </View>

          <View style={styles.bioSection}>
            <Text style={styles.bio}>Bio:</Text>
            <Text style={styles.bioDetail}>{bio}</Text>
          </View>
        </View>
      </View>
    );
  }
}
