import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ScreenStack} from '../..';

export default class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text> HomeScreen </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenStack.Detail, {backgroundColor: 'red'})
          }>
          <Text style={styles.boxOne}>Go to BoxOne</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenStack.Detail, {backgroundColor: 'green'})
          }>
          <Text style={styles.boxTwo}>Go to BoxTwo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxOne: {
    color: 'red',
  },
  boxTwo: {
    color: 'green',
  },
});
