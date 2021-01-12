import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import HeaderBar from '../../shared/header-bar';
import {wp} from '../../shared/resposive-dimension';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors as color} from '../../colors';
import {getTime} from '../../utils/helpers';

export class UserInfo extends Component {
  render() {
    const {
      colors,
      fullName,
      countries,
      gender,
      avatar,
      createdAt,
    } = this.props.route.params.details;
    console.log(createdAt);
    return (
      <View style={styles.container}>
        <HeaderBar
          title={fullName}
          leftIcon
          rightIcon
          onLeftPress={() => this.props.navigation.goBack()}
          onRightPress={() => this.props.navigation.navigate('Home')}
        />

        <Image source={{uri: avatar}} style={styles.avatar} />
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.gender}>{gender}</Text>
        <Text style={styles.about}>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat
          a nibh id convallis. Aliquam condimentum in ante nec sagittis.
          Suspendisse a felis ornare, pellentesque purus a, auctor orci. Mauris
          in congue ante. Integer aliquet imperdiet tortor a tristique. Quisque.
        </Text>

        <Section title="time">
          <Text style={styles.time}>{getTime(createdAt)}</Text>
          <Text style={styles.timeLabel}>current</Text>
        </Section>

        <Section title="Countries">
          {countries.map((country, i) => (
            <Text style={styles.country} key={i}>
              {country}
            </Text>
          ))}
        </Section>

        <Section title="colors">
          {colors.map((color, i) => (
            <View
              style={[
                styles.color,
                {left: 20 * i, backgroundColor: `${color.toLowerCase()}`},
              ]}
              key={i}
            />
          ))}
        </Section>
      </View>
    );
  }
}

const Section = ({title, children}) => {
  return (
    <>
      <Text style={styles.myColors}>{title}</Text>
      <View style={styles.childContainer}>
        {children.length ? (
          children
        ) : (
          <View>
            <Icon
              name="md-information-circle-sharp"
              size={wp(25)}
              color={color.dark}
            />
            <Text style={styles.emptyText}>No {title}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default UserInfo;
