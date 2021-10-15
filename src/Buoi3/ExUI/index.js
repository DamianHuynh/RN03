import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Alto_icon from './images/Alto_icon.png';
import Alto_0 from './images/Alto_0.png';

export default class ExUI extends Component {
  gameInfo = {
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    preview: Alto_0,
    backgroundColor: '#824671CC',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.gameInfo.preview} />
        <View
          style={[
            styles.info,
            {backgroundColor: this.gameInfo.backgroundColor},
          ]}>
          <Image source={this.gameInfo.icon} style={styles.icon} />
          <View style={styles.infoContent}>
            <Text>{this.gameInfo.title}</Text>
            <Text>{this.gameInfo.subTitle}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343434',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  infoContent: {
    width: '80%',
  },
});
