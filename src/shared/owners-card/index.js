import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const OwnersCard = ({data}) => {
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
  } = data;
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {first_name} {last_name} ({gender})
      </Text>

      <View style={styles.containerRow}>
        <View>
          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={styles.listTitle}></Text>
              <Text style={styles.detail}>{job_title}</Text>
            </View>

            <Text style={styles.listTitle}></Text>
            <Text style={styles.detail}>{email}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={styles.listTitle}></Text>
              <Text style={styles.detail}>
                {car_model} {car_model_year}
              </Text>
            </View>
            <Text style={styles.listTitle}></Text>
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
};
