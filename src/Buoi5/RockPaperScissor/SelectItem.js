import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default class SelectItem extends Component {
  render() {
    const {selectImage} = this.props;
    return (
      <View style={styles.selectItemContainer}>
        <Image style={styles.selectImage} source={selectImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectItemContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 2,
    borderColor: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectImage: {
    width: 50,
    height: 50,
  },
});
