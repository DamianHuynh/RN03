import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentTop}>
          <View style={styles.topItem} />
          <View style={styles.topItem} />
        </View>
        <View style={styles.contentBot}>
          <View style={styles.botItem}>
            <View style={styles.botItemInner} />
            <View style={styles.botItemInner} />
          </View>
          <View style={styles.botItem}>
            <View style={styles.botItemInner} />
            <View style={styles.botItemInner} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentTop: {
    flex: 1,
    backgroundColor: '#96CC96',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  topItem: {
    backgroundColor: '#F4B940',
    height: '30%',
    borderRadius: 10,
  },
  contentBot: {
    flex: 1,
    backgroundColor: '#C9C9Ff',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  botItem: {
    flex: 1,
  },
  botItemInner: {
    flex: 1,
    backgroundColor: '#3D85C6',
    borderRadius: 10,
    margin: 20,
    marginVertical: 30,
  },
});
