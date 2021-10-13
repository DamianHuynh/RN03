import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DemoFlex extends Component {
  render() {
    //v1 = v3; v2 = 2v1
    return (
      <View
        style={{
          marginTop: 50,
          flex: 1,
          flexDirection: 'row',
        }}>
        <View style={{backgroundColor: '#C9C9Ff', width: 100, height: 100}} />
        <View style={{backgroundColor: '#3D85C6', width: 100, height: 100}} />
        <View style={{backgroundColor: '#96CC96', width: 100, height: 100}} />
        <View style={{backgroundColor: '#C9C9Ff', width: 100, height: 100}} />
        <View style={{backgroundColor: '#3D85C6', width: 100, height: 100}} />
      </View>
    );
  }
}
