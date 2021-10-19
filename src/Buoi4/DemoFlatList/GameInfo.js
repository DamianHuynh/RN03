import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class GameInfo extends Component {
  render() {
    const {game} = this.props;

    return (
      <View style={[styles.info, {backgroundColor: game.backgroundColor}]}>
        <Image source={game.icon} style={styles.icon} />
        <View style={styles.infoContent}>
          <Text>{game.title}</Text>
          <Text>{game.subTitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    width: '90%',
    // marginTop: 20,
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
